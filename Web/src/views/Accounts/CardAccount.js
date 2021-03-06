import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import classNames from 'classnames';

const propTypes = {
  account: PropTypes.array
};

const defaultProps = {
  account: []
};
function getColor(total) {
  return total > 0 ? 'success' : 'danger';
}

function currencyFormater(price) {
  price = price || 0;
  return price.toFixed(2).toLocaleString();
}

function AccountRow(props) {
  const account = props.account
  const handleDelete = props.handleDelete
  const cardUrl = props.cardUrl
  const calloutClasses = classNames('callout', 'callout-' + getColor(account.price));
  const totalClasses = classNames('text-' + getColor(account.price));

  return (
    <tr >
      <td ></td>
      <td className="p-0">
        <div className={calloutClasses}>
          <div><a href={cardUrl}>{account.name}</a></div>
          <div className="small text-muted">
            <span>人民币</span> | {account.owner}
          </div>
        </div>
      </td>
      <td className={totalClasses}>
        <strong>{currencyFormater(account.price)}</strong>
      </td>
      <td >
        <div className="accountMenu">修改 | <button onClick={() => handleDelete(account.id)}>删除</button></div>
      </td>
    </tr>
  )
}

class CardAccount extends Component {
  render() {
    const { cards } = this.props;
    const handleDelete = this.props.delete;
    const accountList = cards.accounts;
    const totalClasses = classNames('text-' + getColor(cards.total));

    let cardName = '';
    let cardUrl = '';
    switch (cards.name) {
      case 'Cash':
        cardName = '现金';
        cardUrl = '/Cash';
        break;
      case 'Saving':
        cardName = '活期(卡折)';
        cardUrl = '/Saving';
        break;
      case 'CreditCard':
        cardName = '信用卡';
        cardUrl = '/CreditCard';
        break;
      case 'Investment':
        cardName = '投资';
        cardUrl = '/Lending';
        break;
      case 'Loan':
        cardName = '债务';
        cardUrl = '/Loan';
        break;
    }

    return (
      <Table hover responsive className="table-outline mb-3 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th style={{ width: 10 + '%' }}>{cardName}</th>
            <th style={{ width: 75 + '%' }}></th>
            <th className={totalClasses}>{currencyFormater(cards.total)}</th>
            <th style={{ width: 10 + '%' }}></th>
          </tr>
        </thead>
        <tbody>
          {accountList && accountList.map((account, index) =>
            <AccountRow key={index} account={account} handleDelete={handleDelete} cardUrl={cardUrl} />
          )}
        </tbody>
      </Table>
    );
  }
}

CardAccount.propTypes = propTypes;
CardAccount.defaultProps = defaultProps;

export default CardAccount;