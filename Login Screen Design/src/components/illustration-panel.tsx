export function IllustrationPanel() {
  return (
    <div className="hidden lg:flex lg:flex-1 items-center justify-center bg-muted/30 rounded-lg p-8">
      <div className="max-w-md text-center space-y-6">
        {/* Illustrated Graphics */}
        <div className="w-full h-64 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden flex items-center justify-center">
          {/* Abstract geometric illustration */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-secondary/30 rounded-full"></div>
            <div className="absolute top-8 left-8 right-8 bottom-8 bg-accent/40 rounded-full"></div>
            <div className="absolute top-12 left-12 right-12 bottom-12 bg-primary/30 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-lg rotate-45"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full"></div>
            <div className="absolute top-1/4 -left-4 w-4 h-4 bg-primary/50 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl">
            Добро пожаловать в PMServices
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Платформа для управления проектами, пользователями и ресурсами компании. 
            Войдите в систему для доступа к инструментам управления.
          </p>
        </div>
      </div>
    </div>
  );
}