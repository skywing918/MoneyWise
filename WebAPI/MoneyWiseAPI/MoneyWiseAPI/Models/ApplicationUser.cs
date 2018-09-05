using AspNetCore.Identity.Mongo;

namespace MoneyWiseAPI
{
    // Add profile data for application users by adding properties to the ApplicationUser class

    public class ApplicationUser : MongoIdentityUser
    {
        // Extended Properties
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Picture { get; set; }
    }
}
