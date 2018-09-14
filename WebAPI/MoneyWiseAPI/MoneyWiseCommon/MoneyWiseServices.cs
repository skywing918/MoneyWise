using MoneyWiseCommon.Interfaces;
using MoneyWiseCommon.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoneyWiseCommon
{
    public class MoneyWiseServices: IMoneyWiseServices
    {
        private static volatile object _instanceContructorLock = new object();
        private static IMoneyWiseServices _instance;
        private readonly IConfiguration _configuration;

        public static IMoneyWiseServices Instance
        {
            get {
                if (_instance != null)
                {
                    return _instance;
                }

                lock (_instanceContructorLock)
                {
                    return _instance ?? (_instance = new MoneyWiseServices());
                }
            }
        }

        public MoneyWiseServices() : this(ServiceFactory.ConfigurationInstance)
        { }

        /// <summary>
        /// Create a service object with dependency injection
        /// </summary>
        public MoneyWiseServices(IConfiguration configuration)
        {
            if (configuration == null)
            {
                throw new ArgumentNullException("configuration");
            }

            _configuration = configuration;
        }

        public async Task<IEnumerable<Book>> GetBooksByOwnerIdAsync(string userId)
        {
            return await ServiceFactory.BooksServicesInstance.GetBooksByOwnerIdAsync(userId).ConfigureAwait(false);
        }

        public async Task<Book> AddBookAsync(Book book)
        {
            return await ServiceFactory.BooksServicesInstance.AddBookAsync(book).ConfigureAwait(false);
        }

        public async Task DeleteBookAsync(string bookId)
        {
            await ServiceFactory.BooksServicesInstance.DeleteBookAsync(bookId).ConfigureAwait(false);
        }
    }
}
