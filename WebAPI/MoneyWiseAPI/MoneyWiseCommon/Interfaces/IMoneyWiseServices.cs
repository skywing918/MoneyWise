using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MoneyWiseCommon.Models;

namespace MoneyWiseCommon.Interfaces
{
    public interface IMoneyWiseServices
    {
        Task<IEnumerable<Book>> GetBooksByIdsAsync(List<string> model);

        Task<Book> AddBookAsync(Book book);

        Task DeleteBookAsync(string bookId);
    }
}
