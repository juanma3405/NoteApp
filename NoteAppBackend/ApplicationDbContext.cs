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

        public DbSet<Note> Notes { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<NoteCategory> NoteCategories { get; set; }
    }
}
