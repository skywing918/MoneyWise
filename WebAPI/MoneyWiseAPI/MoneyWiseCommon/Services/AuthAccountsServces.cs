namespace MoneyWiseCommon.Services
{
    using MoneyWiseCommon.Helper;
    using MoneyWiseCommon.Interfaces;
    using MoneyWiseCommon.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public class AuthAccountsServces: IAuthAccountsServces
    {
        private static volatile object _obj = new object();

        private static readonly string collectionName = "users";
        private static IAuthAccountsServces _instance;

        public static IAuthAccountsServces Instance
        {
            get
            {
                if (_instance != null)
                {
                    return _instance;
                }

                lock (_obj)
                {
                    return _instance ?? (_instance = new AuthAccountsServces());
                }
            }
        }

        public async Task ShareBookToUserAsync(string userName, string bookId)
        {
            var userToVerify = await MongoDbHelper.GetRecordById<ApplicationUser>(collectionName, user => user.UserName, userName);

            if (userToVerify.BookIds == null)
            {
                userToVerify.BookIds = new List<string>();
            }
            userToVerify.BookIds.Add(bookId);

            await MongoDbHelper.UpdateRecord(collectionName, user => user.Id, userToVerify.Id, userToVerify);
        }
    }
}
