namespace MoneyWiseCommon.Interfaces
{
    using System.Threading.Tasks;

    public interface IAuthAccountsServces
    {
        Task ShareBookToUserAsync(string userName, string bookId);
    }
}
