﻿using MoneyWiseAPI.ViewModels.Validations;

namespace MoneyWiseAPI.ViewModels
{
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
