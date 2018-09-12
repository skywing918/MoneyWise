using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MoneyWiseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookAccountsController : ControllerBase
    {
        // GET api/bookaccounts
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/bookaccounts/GetByBookId
        [HttpGet("GetByBookId")]
        public ActionResult<IEnumerable<string>> GetByBookId()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/bookaccounts/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/bookaccounts
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/bookaccounts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/bookaccounts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
