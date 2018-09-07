using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoneyWiseCommon.Models
{
    public class Account : MongoEntity
    {
        public string Title { get; set; }
        public string Type { get; set; }
        public string BookId { get; set; }
        public bool IsDisalbed { get; set; }
        public string Comments { get; set; }
    }
}
