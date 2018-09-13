namespace MoneyWiseCommon
{
    using MoneyWiseCommon.Interfaces;
    using MoneyWiseCommon.Services;
    using System;
    using System.Collections.Generic;
    using System.Text;


    public class ServiceFactory
    {
        private static IConfiguration _configuration;
        private static IBooksServices _booksService;
        private static IAuthAccountsServices _authAccountsService;
        private static IAccountsServices _accountsService;
        private static ITransactionServices _transactionService;

        /// <summary>
        /// Configuration instance
        /// </summary>
        public static IConfiguration ConfigurationInstance
        {
            get { return _configuration ?? (_configuration = Configuration.Instance); }
        }

        public static IBooksServices BooksServicesInstance
        {
            get { return _booksService ?? (_booksService = BooksServices.Instance); }
        }

        public static IAccountsServices AccountsServicesInstance
        {
            get { return _accountsService ?? (_accountsService = AccountsServices.Instance); }
        }

        public static ITransactionServices TransactionServicesInstance
        {
            get { return _transactionService ?? (_transactionService = TransactionServices.Instance); }
        }


        public static IAuthAccountsServices AuthAccountsServicesInstance
        {
            get { return _authAccountsService ?? (_authAccountsService = AuthAccountsServices.Instance); }
        }
    }
}
