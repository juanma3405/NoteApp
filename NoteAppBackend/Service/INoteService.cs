using Microsoft.AspNetCore.Mvc;
using NoteAppBackend.DTOs;
using NoteAppBackend.Entities;

namespace NoteAppBackend.Service
{
    public interface INoteService
    {
        public Task<ActionResult<List<NoteDTO>>> Get();
        public Task<ActionResult<List<NoteDTOConCategories>>> GetNotesWithCategories();
        public Task Post(CreateNoteDTO noteCreateNoteDTO);
        public Task<CreateNoteDTO> Put(CreateNoteDTO createNoteDTO, int id);
        public Task<Note> Delete(int id);
        public Task<Note> ArchiveNote(int id);
        public Task<Note> UnarchiveNote(int id);
        public Task<ActionResult<List<NoteDTOConCategories>>> GetActiveNotes();
        public Task<ActionResult<List<NoteDTOConCategories>>> GetArchivedNotes();
        public Task<Note> AddCategory(AddCategoryDTO addCategoryDTO);
        public Task<ActionResult<List<NoteDTOConCategories>>> GetNotesByCategory(string name);
    }
}
