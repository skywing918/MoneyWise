namespace MoneyWiseCommon.Services
{
    using MoneyWiseCommon.Helper;
    using MoneyWiseCommon.Interfaces;
    using MoneyWiseCommon.Models;
    using MongoDB.Driver;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class BooksServices : IBooksServices
    {
        private static volatile object _obj = new object();

        private static readonly string collectionName = "Book";
        private static IBooksServices _instance;

        public static IBooksServices Instance
        {
            get
            {
                if (_instance != null)
                {
                    return _instance;
                }

                lock (_obj)
                {
                    return _instance ?? (_instance = new BooksServices());
                }
            }
        }

        public async Task<IEnumerable<Book>> GetBooksByIdsAsync(IEnumerable<string> Ids)
        {
            var filterBuilder = Builders<Book>.Filter;
            var filter = filterBuilder.Where(x => Ids.Contains(x.Id));
            return await MongoDbHelper.GetWithFilter(collectionName, filter).ConfigureAwait(false);
        }

        public async Task<Book> AddBookAsync(Book book)
        {
            // when create the new book, the createdby and updatedby should be same.
            var currDateTime = DateTime.Now;
            book.CreatedBy = book.UpdatedBy;
            book.CreatedDate = currDateTime;
            book.UpdatedDate = currDateTime;
            var result = await MongoDbHelper.AddRecord(collectionName, book).ConfigureAwait(false);

            var currBookId = result.Id;
            var userName = book.CreatedBy;
            await ServiceFactory.AuthAccountsServicesInstance.ShareBookToUserAsync(userName, currBookId).ConfigureAwait(false);
            return result;
        }

        public async Task DeleteBookAsync(string bookId)
        {
            await MongoDbHelper.DeleteRecord<Book>(collectionName, book => book.Id, bookId).ConfigureAwait(false);
        }
    }
}
