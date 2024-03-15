using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using NoteAppBackend.Service;
using System.Text.Json.Serialization;

namespace NoteAppBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            var connectionString = Configuration.GetConnectionString("DefaultConnection");

            //CrearBaseDeDatosSiNoExiste(connectionString);

            services.AddDbContext<ApplicationDbContext>(options =>
           {
               options.UseSqlServer(Configuration.GetConnectionString("defaultConnection"));
           });

            /*using (var serviceScope = services.BuildServiceProvider().CreateScope())
            {
                var dbContext = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                dbContext.Database.Migrate();
            }*/


            services.AddEndpointsApiExplorer();

            services.AddSwaggerGen();

            services.AddAutoMapper(typeof(Startup));

            //Cors para usar aplicacion local
            /*services.AddCors(opciones =>
            {
                opciones.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
                });
            });*/

            //Cors para el hosting
            services.AddCors(opciones =>
            {
                opciones.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });

            services.AddScoped<INoteService, NoteService>();
            services.AddScoped<ICategoryService, CategoryService>();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // para aplicacion local
            /*if (env.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }*/

            // para hosting

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            
        }

        /*private void CrearBaseDeDatosSiNoExiste(string connectionString)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                var dbName = "NoteApp"; 
                var sql = $@"
            IF NOT EXISTS (
                SELECT [name]
                FROM sys.databases
                WHERE [name] = '{dbName}'
            )
            CREATE DATABASE {dbName};
        ";

                using (var command = new SqlCommand(sql, connection))
                {
                    command.ExecuteNonQuery();
                }
            }


            var connectionStringBuilder = new SqlConnectionStringBuilder(connectionString);
            connectionStringBuilder.InitialCatalog = "NoteApp";
            Configuration["ConnectionStrings:DefaultConnection"] = connectionStringBuilder.ConnectionString;
        }*/
    }
}
