using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoteAppBackend.DTOs;
using NoteAppBackend.Entities;

namespace NoteAppBackend.Service
{
    public class NoteService: INoteService
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public NoteService(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<ActionResult<List<NoteDTO>>> Get()
        {
            var notes = await context.Notes
                .ToListAsync();

            List<NoteDTO> lista = new List<NoteDTO>();  
            
            foreach (var note in notes)
            {
                lista.Add(mapper.Map<NoteDTO>(note));
            }

            return lista;
        }

        public async Task<ActionResult<List<NoteDTOConCategories>>> GetNotesWithCategories()
        {
            var notes = await context.Notes
                .Include(n => n.Notecategories)
                .ThenInclude(cn => cn.Category)
                .ToListAsync();

            List<NoteDTOConCategories> lista = new List<NoteDTOConCategories>();

            foreach (var note in notes)
            {
                lista.Add(mapper.Map<NoteDTOConCategories>(note));
            }

            return lista;
        }

        public async Task Post(CreateNoteDTO createNoteDTO)
        {
            var note = mapper.Map<Note>(createNoteDTO);
            note.Active = true;
            context.Add(note);
            await context.SaveChangesAsync();
        }

        public async Task<CreateNoteDTO> Put(CreateNoteDTO createNoteDTO, int id)
        {
            var existingNote = await context.Notes.FindAsync(id);

            if (existingNote == null)
            {
                return null;
            }

            existingNote = mapper.Map(createNoteDTO, existingNote);
            existingNote.Id = id;
            context.Update(existingNote);
            await context.SaveChangesAsync();

            var upadtedDTONote = mapper.Map<CreateNoteDTO>(existingNote);
            return upadtedDTONote;
        }

        public async Task<Note> Delete(int id)
        {
            var noteToEliminate = await context.Notes.FindAsync(id);

            if (noteToEliminate == null)
            {
                return null;
            }
            context.Notes.Remove(noteToEliminate);
            await context.SaveChangesAsync();
            return noteToEliminate;
        }

        public async Task<Note> ArchiveNote(int id)
        {
            var existingNote = await context.Notes.FindAsync(id);

            if (existingNote == null)
            {
                return null;
            }

            existingNote.Active = false;

            context.Update(existingNote);
            await context.SaveChangesAsync();
            return existingNote;
        }

        public async Task<Note> UnarchiveNote(int id)
        {
            var existingNote = await context.Notes.FindAsync(id);

            if (existingNote == null)
            {
                return null;
            }

            existingNote.Active = true;

            context.Update(existingNote);
            await context.SaveChangesAsync();
            return existingNote;
        }

        public async Task<ActionResult<List<NoteDTOConCategories>>> GetActiveNotes()
        {          
            var notes = await context.Notes.Where(x => x.Active == true)
                               .Include(n => n.Notecategories)
                               .ThenInclude(cn => cn.Category)
                               .ToListAsync();
            
            List<NoteDTOConCategories> lista = new List<NoteDTOConCategories>();

            foreach (var note in notes)
            {
                lista.Add(mapper.Map<NoteDTOConCategories>(note));
            }
            return lista;
        }

        public async Task<ActionResult<List<NoteDTOConCategories>>> GetArchivedNotes()
        {
            var notes = await context.Notes.Where(x => x.Active == false)
                                .Include(n => n.Notecategories)
                                .ThenInclude(cn => cn.Category)
                                .ToListAsync();
            List<NoteDTOConCategories> lista = new List<NoteDTOConCategories>();

            foreach (var note in notes)
            {
                lista.Add(mapper.Map<NoteDTOConCategories>(note));
            }
            return lista;
        }

        public async Task<Note> AddCategory(AddCategoryDTO addCategoryDTO)
        {
            var noteDB = await context.Notes
                .Include(noteDB => noteDB.Notecategories)
                .FirstOrDefaultAsync(noteDB => noteDB.Id == addCategoryDTO.Note.Id);

            if (noteDB == null)
            {
                return null;
            }

            noteDB = mapper.Map(addCategoryDTO, noteDB);
            await context.SaveChangesAsync();
            return noteDB;
        }

        public async Task<ActionResult<List<NoteDTOConCategories>>> GetNotesByCategory(string name)
        {
            List<Note> notes = null;
            List<NoteDTOConCategories> lista = new List<NoteDTOConCategories>();

            if (name =="Todas las categorias")
            {
                notes = await context.Notes
                    .Include(n => n.Notecategories)
                    .ThenInclude(cn => cn.Category)
                    .ToListAsync();
            }

            else
            {
                notes = await context.Notes
                .Where(n => n.Notecategories.Any(nc => nc.Category.Name == name))
                .Include(n => n.Notecategories)
                .ThenInclude(cn => cn.Category)
                .ToListAsync();
            }

            foreach (var note in notes)
            {
                lista.Add(mapper.Map<NoteDTOConCategories>(note));
            }
            return lista;
        }
    }
}
