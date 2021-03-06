﻿namespace MoneyWiseCommon.Models
{
    using AspNetCore.Identity.Mongo;
    using System.Collections.Generic;

    // Add profile data for application users by adding properties to the ApplicationUser class

    public class ApplicationUser : MongoIdentityUser
    {
        // Extended Properties
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Picture { get; set; }

        public List<string> BookIds { get; set; }
    }
}
