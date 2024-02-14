namespace NoteAppBackend.Entities
{
    public class NoteCategory
    {
        public int NoteId { get; set; }
        public int CategoryId { get; set; }
        public Note Note { get; set; }
        public Category Category { get; set; }
    }
}
