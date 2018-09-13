namespace MoneyWiseCommon.Interfaces
{
    using System.Threading.Tasks;

    public interface IAuthAccountsServices
    {
        Task ShareBookToUserAsync(string userName, string bookId);
    }
}
