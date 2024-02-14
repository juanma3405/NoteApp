using Microsoft.AspNetCore.Mvc;
using NoteAppBackend.DTOs;
using NoteAppBackend.Entities;

namespace NoteAppBackend.Service
{
    public interface ICategoryService
    {
        public Task<ActionResult<List<CategoryDTO>>> Get();
        public Task Post(CreateCategoryDTO createCategoryDTO);
        public Task<Category> Delete(int id);
    }
}
