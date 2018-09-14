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
  return price.toFixed(2).toLocaleString();
}

function AccountRow(props) {
  const account = props.account
  const calloutClasses = classNames('callout', 'callout-' + getColor(account.price));
  const totalClasses = classNames('text-' + getColor(account.price));

  return (
    <tr >
      <td ></td>
      <td className="p-0">
        <div className={calloutClasses}>
          <div>{account.name}</div>
          <div className="small text-muted">
            <span>人民币</span> | {account.owner}
          </div>
        </div>
      </td>
      <td className={totalClasses}>
        <strong>{currencyFormater(account.price)}</strong>
      </td>
      <td >
        <div className="accountMenu">修改 | 删除</div>
      </td>
    </tr>
  )
}

class CardAccount extends Component {
  render() {
    const { cards } = this.props;
    const accountList = cards.accounts;
    const totalClasses = classNames('text-' + getColor(cards.total));
    return (
      <Table hover responsive className="table-outline mb-3 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th style={{ width: 10 + '%' }}>{cards.name}</th>
            <th style={{ width: 75 + '%' }}></th>
            <th className={totalClasses}>{currencyFormater(cards.total)}</th>
            <th style={{ width: 10 + '%' }}></th>
          </tr>
        </thead>
        <tbody>
          {accountList.map((account, index) =>
            <AccountRow key={index} account={account} />
          )}
        </tbody>
      </Table>
    );
  }
}

CardAccount.propTypes = propTypes;
CardAccount.defaultProps = defaultProps;

export default CardAccount;