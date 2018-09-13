namespace MoneyWiseCommon.Models
{
    using MoneyWiseCommon.Models.Enum;

    public class Account : MongoEntity
    {
        public string Title { get; set; }
        public AccountType Type { get; set; }
        public string BookId { get; set; }
        public bool IsDisalbed { get; set; }
        public string Comments { get; set; }
    }
}
