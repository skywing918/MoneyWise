using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoneyWiseAPI.ViewModels
{
    public class AccountsCenterViewModel
    {
        public string Name { get; set; }
        public double Total { get; set; }
        public IEnumerable<BookAccountViewModel> Accounts { get; set; }
    }
}
