namespace MoneyWiseCommon.Interfaces
{
    using MoneyWiseCommon.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IBooksServices
    {
        /// <summary>
        /// Gets books with ids 
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        Task<IEnumerable<Book>> GetBooksByOwnerIdAsync(string ownerId);

        /// <summary>
        /// Add books 
        /// </summary>
        /// <param name="book"></param>
        /// <returns></returns>
        Task<Book> AddBookAsync(Book book);

        /// <summary>
        /// Delete books 
        /// </summary>
        /// <param name="bookId"></param>
        /// <returns></returns>
        Task DeleteBookAsync(string bookId);
    }
}
