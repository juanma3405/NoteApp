using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoteAppBackend.DTOs;
using NoteAppBackend.Entities;

namespace NoteAppBackend.Service
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public CategoryService(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<ActionResult<List<CategoryDTO>>> Get()
        {
            var categories = await context.Categories.ToListAsync();

            List<CategoryDTO> lista = new List<CategoryDTO>();

            foreach (var category in categories)
            {
                lista.Add(mapper.Map<CategoryDTO>(category));
            }

            return lista;
        }

        public async Task Post(CreateCategoryDTO createCategoryDTO)
        {
            var category = mapper.Map<Category>(createCategoryDTO);
            context.Add(category);
            await context.SaveChangesAsync();
        }
        public async Task<Category> Delete(int id)
        {
            var categoryToEliminate = await context.Categories.FindAsync(id);

            if (categoryToEliminate == null)
            {
                return null;
            }

            context.Categories.Remove(categoryToEliminate);
            await context.SaveChangesAsync();
            return categoryToEliminate;
        }       
    }
}
