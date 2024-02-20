using Application.Models;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ModelController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Model>>> GetListModel()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Model>> GetModel(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateModel(Model model)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Model = model }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditModel(Guid id, Model model)
        {
            model.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Model = model }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModel(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
