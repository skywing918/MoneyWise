using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MoneyWiseCommon.Models;

namespace MoneyWiseCommon.Interfaces
{
    public interface IMoneyWiseServices
    {
        Task<IEnumerable<Book>> GetBooksByOwnerIdAsync(string user);

        Task<Book> AddBookAsync(Book book);

        Task DeleteBookAsync(string bookId);
        Task<IEnumerable<Account>> GetAccountsByBookIdAsync(string book);
        Task<Account> AddAccountAsync(Account curr);
        Task DeleteAccountAsync(string id);
        Task<IEnumerable<Category>> GetCategoriesByBookIdAsync(string id);
    }
}
