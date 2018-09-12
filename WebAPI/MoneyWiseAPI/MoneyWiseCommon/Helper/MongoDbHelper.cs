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
        static IMongoDatabase mdb;

        static MongoDbHelper()
        {
            string connectionString = "mongodb://kylezhang83.imwork.net:27017/moneywisetestdb";
            var client = new MongoClient(connectionString);
            string dbName = MongoUrl.Create(connectionString).DatabaseName;

            mdb = client.GetDatabase(dbName);
        }

        public static IMongoCollection<T> GetCollection<T>(string name) where T : class
        {
            return mdb.GetCollection<T>(name);
        }

        public async static Task<List<T>> GetAllList<T>() where T : class
        {
            var results = await GetCollection<T>(typeof(T).Name).FindAsync("{}").ConfigureAwait(false);
            return results.ToList();
        }

        public async static Task<List<T>> GetWithFilter<T>(FilterDefinition<T> filter) where T : class
        {
            var results = await GetCollection<T>(typeof(T).Name).FindAsync(filter).ConfigureAwait(false);
            return results.ToList();
        }

        public async static Task<T> AddRecord<T>(T data) where T : class
        {
            await GetCollection<T>(typeof(T).Name).InsertOneAsync(data).ConfigureAwait(false);
            return data;
        }

        public async static Task<T> GetRecordById<T>(Expression<Func<T, string>> keyField, string id) where T : class
        {
            var results = await GetCollection<T>(typeof(T).Name).FindAsync(Builders<T>.Filter.Eq(keyField, id));
            return results.FirstOrDefault();
        }

        public async static Task UpdateRecord<T>(Expression<Func<T, string>> keyField, string id, T data) where T : class
        {
            var filter = Builders<T>.Filter.Eq(keyField, id);
            await GetCollection<T>(typeof(T).Name).ReplaceOneAsync(filter, data).ConfigureAwait(false);
        }

        public async static Task DeleteRecord<T>(Expression<Func<T, string>> keyField, string id) where T : class
        {
            var filter = Builders<T>.Filter.Eq(keyField, id);
            await GetCollection<T>(typeof(T).Name).DeleteOneAsync(filter);
        }

    }
}
