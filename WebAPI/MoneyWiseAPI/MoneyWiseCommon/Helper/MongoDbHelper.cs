using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MoneyWiseCommon.Helper
{
    public class MongoDbHelper
    {
        private static IMongoDatabase mdb;

        static MongoDbHelper()
        {
            string connectionString = "mongodb://kylezhang83.imwork.net:27017/moneywisetestdb";
            var client = new MongoClient(connectionString);
            string dbName = MongoUrl.Create(connectionString).DatabaseName;

            mdb = client.GetDatabase(dbName);
        }

        private static IMongoCollection<T> GetCollection<T>() where T : class
        {
            return mdb.GetCollection<T>(typeof(T).Name);
        }

        public async static Task<IEnumerable<T>> GetAllList<T>() where T : class
        {
            var results = await GetCollection<T>().FindAsync("{}").ConfigureAwait(false);
            return results.ToList();
        }

        public async static Task<IEnumerable<T>> GetWithFilter<T>(FilterDefinition<T> filter) where T : class
        {
            var results = await GetCollection<T>().FindAsync(filter).ConfigureAwait(false);
            return results.ToList();
        }

        public async static Task<T> AddRecord<T>(T data) where T : class
        {
            await GetCollection<T>().InsertOneAsync(data).ConfigureAwait(false);
            return data;
        }

        public async static Task<T> GetRecordById<T>(Expression<Func<T, string>> keyField, string id) where T : class
        {
            var results = await GetCollection<T>().FindAsync(Builders<T>.Filter.Eq(keyField, id));
            return results.FirstOrDefault();
        }

        public async static Task UpdateRecord<T>(Expression<Func<T, string>> keyField, string id, T data) where T : class
        {
            var filter = Builders<T>.Filter.Eq(keyField, id);
            await GetCollection<T>().ReplaceOneAsync(filter, data).ConfigureAwait(false);
        }

        public async static Task DeleteRecord<T>(Expression<Func<T, string>> keyField, string id) where T : class
        {
            var filter = Builders<T>.Filter.Eq(keyField, id);
            await GetCollection<T>().DeleteOneAsync(filter);
        }

    }
}
