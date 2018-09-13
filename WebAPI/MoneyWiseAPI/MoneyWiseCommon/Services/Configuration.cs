namespace MoneyWiseCommon.Services
{
    using MoneyWiseCommon.Interfaces;
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class Configuration: IConfiguration
    {
        private static volatile object _obj = new object();
        private static IConfiguration _instance;

        public static IConfiguration Instance
        {
            get
            {
                if (null != _instance)
                {
                    return _instance;
                }
                lock (_obj ?? (_obj = new object()))
                {
                    return _instance ?? (_instance = new Configuration());
                }
            }
        }

        internal Configuration()
        {
            
        }
    }
}
