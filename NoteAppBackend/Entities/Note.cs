using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace NoteAppBackend.Entities
{
    public class Note
    {
        public int Id { get; set; }
        public string? Title { get; set; }  
        [Required]
        public string Text { get; set; }
        public bool Active { get; set; }
        public List<NoteCategory> Notecategories { get; set; }
    }
}
