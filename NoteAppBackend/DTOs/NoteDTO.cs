using NoteAppBackend.Entities;
using System.ComponentModel.DataAnnotations;

namespace NoteAppBackend.DTOs
{
    public class NoteDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public bool Active { get; set; }
    }
}
