#requires -Version 5.1
$ErrorActionPreference = "SilentlyContinue"

function Section($title){ Write-Host "`n=== $title ===" -ForegroundColor Cyan }

Section "Host tools"
dotnet --info
dotnet --list-sdks
node -v
npm -v
try { ng version } catch { try { npx -y @angular/cli@latest ng version } catch {} }
tsc -v
git --version
docker --version
try { docker compose version } catch { docker-compose --version }

Section "Angular workspace (package.json)"
# Ищем ближайший package.json фронта (без -Depth, совместимо с Windows PowerShell 5.1)
$pkgCandidates = Get-ChildItem -Path .., . -Recurse -Filter package.json -ErrorAction SilentlyContinue |
  Where-Object { $_.FullName -notmatch "\\node_modules\\" }

$targetPkg = $null
foreach($p in $pkgCandidates){
  try {
    $json = Get-Content $p.FullName -Raw | ConvertFrom-Json
    if($json.dependencies."@angular/core" -or $json.devDependencies."@angular/cli"){ $targetPkg = $p; break }
  } catch {}
}
if($targetPkg){
  Write-Host "package.json: $($targetPkg.FullName)"
  $json = Get-Content $targetPkg.FullName -Raw | ConvertFrom-Json
  $deps = @("@angular/core","@angular/cli","rxjs","zone.js","typescript","keycloak-js")
  foreach($d in $deps){
    $v = $json.dependencies.$d
    if(-not $v){ $v = $json.devDependencies.$d }
    if($v){ "{0} {1}" -f $d, $v | Write-Host }
  }
  Push-Location $targetPkg.Directory.FullName
  try { npm outdated --depth=0 } catch {}
  Pop-Location
}else{
  Write-Host "Angular package.json not found nearby (skipped)."
}

Section ".NET packages (outdated)"
Get-ChildItem -Path .., . -Recurse -Filter *.csproj -ErrorAction SilentlyContinue | ForEach-Object {
  try { dotnet list $_.FullName package --outdated } catch {}
}

Section "Containers (running)"
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"
try { docker compose images } catch { try { docker-compose images } catch {} }

# Версии внутри контейнеров (если запущены)
$kc = docker ps --format "{{.Names}}" | Where-Object { $_ -match "keycloak" }
if ($kc) { try { docker exec $kc /opt/keycloak/bin/kc.sh --version } catch {} }
$pg = docker ps --format "{{.Names}}" | Where-Object { $_ -match "postgres" }
if ($pg) { try { docker exec $pg psql --version; docker exec $pg postgres --version } catch {} }
$rd = docker ps --format "{{.Names}}" | Where-Object { $_ -match "redis" }
if ($rd) { try { docker exec $rd redis-server --version } catch {} }
$mp = docker ps --format "{{.Names}}" | Where-Object { $_ -match "mailpit" }
if ($mp) { try { docker exec $mp mailpit --version } catch {} }
