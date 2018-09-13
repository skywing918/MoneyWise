namespace MoneyWiseCommon.Models
{
    using MongoDB.Bson.Serialization.Attributes;
    using System;

    public class Transaction : MongoEntity
    {
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime TransactionDate { get; set; }
        public string CategoryId { get; set; }
        public string IncomeAccountId { get; set; }
        public double IncomeAmount { get; set; }
        public string ExpensesAccountId { get; set; }
        public double ExpensesAmount { get; set; }
        public string Comments { get; set; }
    }
   
}
