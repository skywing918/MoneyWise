using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoneyWiseCommon.Models;
using MoneyWiseAPI.ViewModels;
using MongoDB.Driver;

namespace MoneyWiseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {

        //public BooksController()
        //{
        //}

        //// GET api/values
        //[HttpGet]
        //public async Task<IEnumerable<Book>> Get()
        //{
        //    return await _operation.GetAllAsync();
        //}

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public async Task<Book> Get(string id)
        //{
        //    return await _operation.GetByIdAsync(id);
        //}

        //// POST api/values
        //[HttpPost]
        //public async Task Post([FromBody] BookViewModel model)
        //{
        //    var curr = new Book
        //    {
        //        Name = model.Name,
        //        CreatedDate = DateTime.Now
        //    };
        //    await _operation.SaveAsync(curr);
        //}

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
