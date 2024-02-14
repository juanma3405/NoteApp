using Microsoft.AspNetCore.Mvc;
using NoteAppBackend.DTOs;
using NoteAppBackend.Entities;
using NoteAppBackend.Service;

namespace NoteAppBackend.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService service;

        public CategoryController(ICategoryService service)
        {
            this.service = service;
        }

        [HttpGet("getCategories")]
        public async Task<ActionResult<List<CategoryDTO>>> Get()
        {
            var categories = await service.Get();
            return Ok(categories);
        }

        [HttpPost("createCategory")]
        public async Task<ActionResult> Post(CreateCategoryDTO createCategoryDTO)
        {
            await service.Post(createCategoryDTO);
            return Ok();
        }

        [HttpDelete("deleteCategory/{id}")]
        public async Task<ActionResult> Delete(int id)
        {

            var deletedCategory = await service.Delete(id);
            if (deletedCategory == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
