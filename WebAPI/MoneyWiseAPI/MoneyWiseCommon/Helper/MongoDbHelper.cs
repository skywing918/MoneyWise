using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

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

        public static List<T> GetAllList<T>() where T : class
        {
            return GetCollection<T>(typeof(T).Name).Find("{}").ToList<T>();
        }

        public static List<T> GetWithFilter<T>(FilterDefinition<T> filter) where T : class
        {
            return GetCollection<T>(typeof(T).Name).Find(filter).ToList<T>();
        }

        public static void AddRecord<T>(T data) where T : class
        {
            GetCollection<T>(typeof(T).Name).InsertOne(data);
        }

        public static T GetRecordById<T>(Expression<Func<T, string>> keyField, string id) where T : class
        {
            return GetCollection<T>(typeof(T).Name).Find(Builders<T>.Filter.Eq(keyField, id)).FirstOrDefault();
        }

        public static void UpdateRecord<T>(Expression<Func<T, string>> keyField, string id, T data) where T : class
        {
            var filter = Builders<T>.Filter.Eq(keyField, id);
            GetCollection<T>(typeof(T).Name).ReplaceOne(filter, data);
        }

        public static void DeleteRecord<T>(Expression<Func<T, string>> keyField, string id) where T : class
        {
            var filter = Builders<T>.Filter.Eq(keyField, id);
            GetCollection<T>(typeof(T).Name).DeleteOne(filter);
        }

    }
}
