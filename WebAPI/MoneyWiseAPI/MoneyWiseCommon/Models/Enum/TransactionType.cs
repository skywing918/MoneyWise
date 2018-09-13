namespace MoneyWiseCommon.Models.Enum
{
    using System;

    /// <summary>
    /// Describes the transactions
    /// </summary>
    [Flags]
    public enum TransactionType
    {
        Expense=1,
        Income=2,
        Transfer=3
    }
}
