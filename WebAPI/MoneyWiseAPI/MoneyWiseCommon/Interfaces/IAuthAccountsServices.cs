namespace MoneyWiseCommon.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IAuthAccountsServices
    {
        Task ShareBookToUserAsync(string userName, string bookId);

        Task<IEnumerable<string>> GetBookIdsByUserIdAsync(string userId);
    }
}
