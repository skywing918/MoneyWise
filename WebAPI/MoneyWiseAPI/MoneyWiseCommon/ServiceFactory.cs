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
        private static IAuthAccountsServces _authAccountsService;
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

        public static IAuthAccountsServces AuthAccountsServcesInstance
        {
            get { return _authAccountsService ?? (_authAccountsService = AuthAccountsServces.Instance); }
        }
    }
}
