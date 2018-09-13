using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoneyWiseCommon.Models;
using MoneyWiseAPI.ViewModels;
using MongoDB.Driver;
using MoneyWiseCommon.Helper;
using Microsoft.AspNetCore.Identity;
using System.Linq.Expressions;
using MoneyWiseCommon;

namespace MoneyWiseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public BooksController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        // GET api/books/getbylist
        [HttpPost("GetByList")]
        public async Task<IEnumerable<Book>> Get([FromBody] List<string> model)
        {
            return await MoneyWiseServices.Instance.GetBooksByIdsAsync(model);
        }

        //// GET api/books/5
        //[HttpGet("{id}")]
        //public async Task<Book> Get(string id)
        //{
        //    return await MongoDbHelper.GetRecordById<Book>(b => b.Id, id);
        //}

        // POST api/books
        [HttpPost]
        public async Task Post([FromBody] BookViewModel viewModel)
        {
            var curr = viewModel.ToModel();
            await MoneyWiseServices.Instance.AddBookAsync(curr);
        }

        //// PUT api/books/5
        //[HttpPut("{id}")]
        //public async Task Put(string id, [FromBody] BookViewModel model)
        //{
        //    var curr = await _operation.GetByIdAsync(id);
        //    curr.UpdatedDate = DateTime.Now;
        //    curr.Name = model.Name;
        //    await _operation.UpdateAsync(id, curr);
        //}

        // DELETE api/books/5
        [HttpDelete("{id}")]
        public async Task Delete(string id)
        {
            await MoneyWiseServices.Instance.DeleteBookAsync(id);
        }
    }
}
