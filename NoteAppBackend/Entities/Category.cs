namespace NoteAppBackend.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<NoteCategory> Notecategories { get; set; }
    }
}
