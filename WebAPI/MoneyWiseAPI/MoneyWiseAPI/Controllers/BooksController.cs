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

        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<Book>> Get()
        {
            return await MongoDbHelper.GetAllList<Book>();
        }

        // GET api/values
        [HttpPost("GetByList")]
        public async Task<IEnumerable<Book>> Get([FromBody] List<string> model)
        {
            var filterBuilder = Builders<Book>.Filter;
            var filter = filterBuilder.Where(x => model.Contains(x.Id));
            return await MongoDbHelper.GetWithFilter(filter);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Book> Get(string id)
        {
            return await MongoDbHelper.GetRecordById<Book>(b => b.Id, id);
        }

        // POST api/values
        [HttpPost]
        public async Task Post([FromBody] BookViewModel model)
        {
            var curr = new Book
            {
                Name = model.Name,
                CreatedBy = model.CreatedBy,
                CreatedDate = DateTime.Now
            };
            var result = await MongoDbHelper.AddRecord(curr);
            var currId = result.Id;

            // get the user to verifty
            var userToVerify = await _userManager.FindByNameAsync(model.CreatedBy);
            if (userToVerify.BookIds == null)
            {
                userToVerify.BookIds = new List<string>();
            }
            userToVerify.BookIds.Add(currId);

            await _userManager.UpdateAsync(userToVerify);
        }

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public async Task Put(string id, [FromBody] BookViewModel model)
        //{
        //    var curr = await _operation.GetByIdAsync(id);
        //    curr.UpdatedDate = DateTime.Now;
        //    curr.Name = model.Name;
        //    await _operation.UpdateAsync(id, curr);
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public async Task<DeleteResult> Delete(string id)
        //{
        //    return await _operation.RemoveByIdAsync(id);
        //}
    }
}
