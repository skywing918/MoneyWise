using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoneyWiseCommon.Models
{
    public class Category : MongoEntity
    {
        public string ParentId { get; set; }
        public string Name { get; set; }
        public bool IsIncome { get; set; }
    }
}
