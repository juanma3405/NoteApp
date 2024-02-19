using Microsoft.EntityFrameworkCore;
using NoteAppBackend.Entities;

namespace NoteAppBackend
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<NoteCategory>().HasKey(nc => new { nc.CategoryId, nc.NoteId });
        }

        //este metodo OnConfiguring permitiria que se apliquen las migraciones automaticamente verificar
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("TuConnectionString");
            }
        }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<NoteCategory> NoteCategories { get; set; }
    }
}
