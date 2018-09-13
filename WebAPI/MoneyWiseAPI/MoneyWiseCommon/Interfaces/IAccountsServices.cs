namespace MoneyWiseCommon.Interfaces
{
    using MoneyWiseCommon.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IAccountsServices
    {
        /// <summary>
        /// Gets books with ids 
        /// </summary>
        /// <param name="bookid"></param>
        /// <returns></returns>
        Task<IEnumerable<Account>> GetAccountsByBookIdAsync(string bookid);

        /// <summary>
        /// Add account 
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        Task<Account> AddAccountAsync(Account account);

        /// <summary>
        /// Delete account 
        /// </summary>
        /// <param name="accountId"></param>
        /// <returns></returns>
        Task DeleteAccountAsync(string accountId);
    }
}
