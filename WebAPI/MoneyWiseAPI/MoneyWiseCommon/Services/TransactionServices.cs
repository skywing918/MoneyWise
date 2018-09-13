namespace MoneyWiseCommon.Services
{
    using MoneyWiseCommon.Interfaces;

    public class TransactionServices: ITransactionServices
    {
        private static volatile object _obj = new object();

        private static readonly string collectionName = "Transaction";
        private static ITransactionServices _instance;

        public static ITransactionServices Instance
        {
            get
            {
                if (_instance != null)
                {
                    return _instance;
                }

                lock (_obj)
                {
                    return _instance ?? (_instance = new TransactionServices());
                }
            }
        }
    }
}
