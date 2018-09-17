using MoneyWiseCommon.Models;
using MoneyWiseCommon.Models.Enum;

namespace MoneyWiseAPI.ViewModels
{
    public class BookAccountViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string BookId { get; set; }
        public AccountType Type { get; set; }
        public double Price { get; set; }
        public string Comments { get; set; }
        public string CreatedBy { get; set; }
    }
    public static class BookAccountViewModelExtensions
    {
        public static Account ToModel(this BookAccountViewModel bookViewModel)
        {
            var model = new Account
            {
                Title = bookViewModel.Name,
                BookId = bookViewModel.BookId,
                Type = bookViewModel.Type,
                CreatedBy = bookViewModel.CreatedBy
            };
            return model;
        }

        public static BookAccountViewModel ToViewModel(this Account account)
        {
            var model = new BookAccountViewModel
            {
                Id = account.Id,
                Name = account.Title,
                Type = account.Type,
                Price = 0,
                CreatedBy = account.CreatedBy
            };
            return model;
        }
    }
}
