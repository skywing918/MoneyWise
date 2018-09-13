namespace MoneyWiseAPI.ViewModels
{
    using MoneyWiseCommon.Models;
    using System;
    using System.Collections.Generic;

    public class BookViewModel
    {
        public string Name { get; set; }
        public string UpdatedBy { get; set; }
        public string OwnerBy { get; set; }
    }

    public static class BookViewModelExtensions
    {
        public static Book ToModel(this BookViewModel bookViewModel)
        {
            var model = new Book
            {
                Name = bookViewModel.Name,
                UpdatedBy = bookViewModel.UpdatedBy
            };
            return model;
        }
    }
}
