using NoteAppBackend.Entities;

namespace NoteAppBackend.DTOs
{
    public class AddCategoryDTO
    {
        public NoteDTOConCategories Note { get; set; } 
        public List<int> IdCategories { get; set; }
    }
}
