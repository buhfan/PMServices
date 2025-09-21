using Npgsql;
namespace PMServices
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapGet("/health/db", async (IConfiguration cfg) =>
            {
                var cs = cfg.GetConnectionString("DefaultConnection")!;
                await using var conn = new NpgsqlConnection(cs);
                await conn.OpenAsync();
                await using var cmd = new NpgsqlCommand("select 1", conn);
                var r = await cmd.ExecuteScalarAsync();
                return r?.ToString() == "1" ? Results.Ok(new { ok = true }) : Results.Problem("DB ping failed");
            });
            //app.MapGet("/debug/cs", (IConfiguration cfg) =>
            //{
            //    var cs = cfg.GetConnectionString("DefaultConnection") ?? "<null>";
            //    var safe = System.Text.RegularExpressions.Regex.Replace(cs, "(?i)Password=[^;]*", "Password=***");
            //    return Results.Ok(new { cs = safe });
            //});


            app.Run();
        }
    }
}
