using AutoMapper;
using NoteAppBackend.DTOs;
using NoteAppBackend.Entities;

namespace NoteAppBackend.Utilities
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Note, NoteDTO>();
            CreateMap<Note, NoteDTOConCategories>()
                .ForMember(noteDTO => noteDTO.Categories, options => options.MapFrom(MapNoteDTOConCategories));
            CreateMap<CreateNoteDTO, Note>().ReverseMap();
            CreateMap<Category, CategoryDTO>();
            CreateMap<CreateCategoryDTO, Category>();
            CreateMap<AddCategoryDTO, Note>().
                ForMember(note => note.Notecategories, opciones => opciones.MapFrom(MapNoteCategories));
        }

        private List<CategoryDTO> MapNoteDTOConCategories(Note note, NoteDTO noteDTO)
        {
            var lista = new List<CategoryDTO>();

            if (note.Notecategories == null) { return lista; }

            foreach(var noteCategorie in  note.Notecategories)
            {
                lista.Add(new CategoryDTO()
                {
                    Id = noteCategorie.CategoryId,
                    Name = noteCategorie.Category.Name
                });
            }
            return lista;
        }

        private List<NoteCategory> MapNoteCategories(AddCategoryDTO addCategoryDTO, Note note)
        {
            var resultado = new List<NoteCategory>();
            if (addCategoryDTO.IdCategories == null) { return resultado; }  
            foreach (var categoryId in  addCategoryDTO.IdCategories)
            {
                resultado.Add(new NoteCategory { CategoryId = categoryId });
            }
            return resultado;
        }
    }
}
