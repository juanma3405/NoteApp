using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using NoteAppBackend;

var builder = WebApplication.CreateBuilder(args);


var startup = new Startup(builder.Configuration);

startup.ConfigureServices(builder.Services);
var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var dbContext = services.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.Migrate();
}


startup.Configure(app, app.Environment);

app.Run();
