using Microsoft.AspNetCore.Mvc;
using NoteAppBackend.Service;
using NoteAppBackend.DTOs;

namespace NoteAppBackend.Controllers
{
    [ApiController]
    [Route("api/notes")]
    public class NoteController : ControllerBase
    {
        private readonly INoteService service;

        public NoteController(INoteService service)
        {
            this.service = service;
        }

        [HttpGet("getNotes")]
        public async Task<ActionResult<List<NoteDTO>>> Get()
        {
            var notes = await service.Get();
            return Ok(notes);
        }

        [HttpGet("getNotesWithCategories")]
        public async Task<ActionResult<List<NoteDTOConCategories>>> GetNotesWithCategories()
        {
            var notes = await service.GetNotesWithCategories();
            return Ok(notes);
        }


        [HttpPost("createNote")]
        public async Task<ActionResult> Post(CreateNoteDTO createNoteDTO)
        {
            await service.Post(createNoteDTO);
            return Ok();
        }

        [HttpPut("updateNote/{id}")]
        public async Task<ActionResult> Put(CreateNoteDTO createNoteDTO, int id)
        {
            var updatedNote = await service.Put(createNoteDTO, id);
            if (updatedNote == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("deleteNote/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var deletedNote = await service.Delete(id);
            if (deletedNote == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpPut("archiveNote/{id}")]
        public async Task<ActionResult> ArchiveNote(int id)
        {
            var archivedNote = await service.ArchiveNote(id);
            if (archivedNote == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpPut("unarchiveNote/{id}")]
        public async Task<ActionResult> UnarchiveNote(int id)
        {
            var unarchivedNote = await service.UnarchiveNote(id);
            if (unarchivedNote == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpGet("getActiveNotes")]
        public async Task<ActionResult<List<NoteDTO>>> GetActiveNotes()
        {
            var notes = await service.GetActiveNotes();
            return Ok(notes);
        }

        [HttpGet("getArchivedNotes")]
        public async Task<ActionResult<List<NoteDTO>>> GetArchivedNotes()
        {
            var notes = await service.GetArchivedNotes();
            return Ok(notes);
        }

        [HttpPut("addCategory")]
        public async Task<ActionResult> AddCategory([FromBody] AddCategoryDTO addCategoryDTO)
        {
            var updatedNote = await service.AddCategory(addCategoryDTO);
            if (updatedNote == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpGet("getNotesByCategory/{name}")]
        public async Task<ActionResult<List<NoteDTO>>> GetNotesByCategory(string name)
        {
            var notes = await service.GetNotesByCategory(name);
            return Ok(notes);
        }
    }
}