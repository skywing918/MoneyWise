﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoneyWiseAPI.ViewModels;
using MoneyWiseCommon;
using MoneyWiseCommon.Models;

namespace MoneyWiseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController
    {
        // GET api/accounts/getbybook
        [HttpGet("getbybook/{book}")]
        public async Task<IEnumerable<AccountsCenterViewModel>> Get(string book)
        {
            var result = await MoneyWiseServices.Instance.GetAccountsByBookIdAsync(book);

            var cardDics = result.GroupBy(x => x.Type).ToDictionary(x => x.Key, x => x);

            return cardDics.Select(x => new AccountsCenterViewModel { Name = x.Key.ToString(), Accounts = x.Value.Select(a => a.ToViewModel()) }).ToList();
        }

        // POST api/accounts
        [HttpPost]
        public async Task<BookAccountViewModel> AddAccountAsync([FromBody] BookAccountViewModel viewModel)
        {
            var curr = viewModel.ToModel();
            var result = await MoneyWiseServices.Instance.AddAccountAsync(curr);
            return result.ToViewModel();
        }
    }
}
