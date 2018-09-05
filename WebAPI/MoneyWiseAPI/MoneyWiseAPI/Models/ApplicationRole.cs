using AspNetCore.Identity.Mongo;
using MongoDB.Bson;

namespace MoneyWiseAPI
{
    public class ApplicationRole: MongoIdentityRole
    {
        public ApplicationRole(string name)
        {
            Name = name;
            NormalizedName = name.ToUpperInvariant();
        }
    }
}
