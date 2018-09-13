namespace MoneyWiseCommon.Models.Enum
{
    using System;

    /// <summary>
    /// Describes the accounts of an account in system
    /// </summary>
    [Flags]
    public enum AccountType
    {
        /// <summary>
        /// Account is Cash
        /// </summary>
        Cash = 1,
        /// <summary>
        /// Account is Saving
        /// </summary>
        Saving = 2,

        /// <summary>
        /// Account is Cash
        /// </summary>
        CreditCard = 3,

        /// <summary>
        /// Account is Investment
        /// </summary>
        Investment = 4,

        /// <summary>
        /// Account is Loan
        /// </summary>
        Loan = 5
    }
}
