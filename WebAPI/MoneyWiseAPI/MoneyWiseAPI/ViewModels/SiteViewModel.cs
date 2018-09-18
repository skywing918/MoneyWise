using MoneyWiseCommon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoneyWiseAPI.ViewModels
{
    public class SiteAccountOptionsViewModel
    {
        public string Name { get; set; }
        public string Value { get; set; }
    }

    public class SiteViewModel
    {
        public string BookId { get; set; }
        public IEnumerable<SiteAccountOptionsViewModel> Accounts { get; set; }
    }

    public static class SiteViewModelExtensions
    {
        public static SiteViewModel ToViewModel(string bookId, IEnumerable<Account> accounts, IEnumerable<Category> category)
        {
            var ops = accounts.Select(x => new SiteAccountOptionsViewModel { Name = x.Title, Value = x.Id });
            var model = new SiteViewModel
            {
                BookId = bookId,
                Accounts = ops
            };
            return model;
        }
    }
}
