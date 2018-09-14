namespace MoneyWiseCommon.Services
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using MoneyWiseCommon.Helper;
    using MoneyWiseCommon.Interfaces;
    using MoneyWiseCommon.Models;
    using MongoDB.Driver;

    public class AccountsServices: IAccountsServices
    {
        private static volatile object _obj = new object();

        private static readonly string collectionName = "Accounts";
        private static IAccountsServices _instance;

        public static IAccountsServices Instance
        {
            get
            {
                if (_instance != null)
                {
                    return _instance;
                }

                lock (_obj)
                {
                    return _instance ?? (_instance = new AccountsServices());
                }
            }
        }

        public async Task<IEnumerable<Account>> GetAccountsByBookIdAsync(string bookId)
        {
            var filterBuilder = Builders<Account>.Filter;
            var filter = filterBuilder.Eq(x => x.BookId, bookId);
            return await MongoDbHelper.GetWithFilter(collectionName, filter).ConfigureAwait(false);
        }

        public async Task<Account> AddAccountAsync(Account account)
        {
            // when create the new book, the createdby and updatedby should be same.
            var currDateTime = DateTime.Now;
            account.UpdatedBy = account.CreatedBy;
            account.CreatedDate = currDateTime;
            account.UpdatedDate = currDateTime;
            var result = await MongoDbHelper.AddRecord(collectionName, account).ConfigureAwait(false);
            return result;
        }

        public async Task DeleteAccountAsync(string accountId)
        {
            // it should deleted all related info first, then delete the account.
            await MongoDbHelper.DeleteRecord<Account>(collectionName, account => account.Id, accountId).ConfigureAwait(false);
        }
    }
}
