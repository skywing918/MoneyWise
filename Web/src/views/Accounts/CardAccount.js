import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, CardHeader } from 'reactstrap';
import classNames from 'classnames';

const propTypes = {
  account: PropTypes.array
};

const defaultProps = {
  account:[]
};
function getColor(total) {
  return total > 0 ? 'success' : 'danger';
}

function currencyFormater(price){
  return price.toFixed(2).toLocaleString();
}

function AccountRow(props) {
  const account = props.account
  const calloutClasses = classNames('callout', 'callout-' + getColor(account.total));
  const totalClasses = classNames('h5', 'text-' + getColor(account.total));
  return (
    <Col sm="12">
      <div className={calloutClasses}>
        <strong className="h4">{account.title}</strong>
        <br />
        <small className="text-muted">人民币|{account.owner}</small>
        <div className="card-header-actions pr-4">
          <div className={totalClasses}>{currencyFormater(account.total)}</div>
        </div>
      </div>
    </Col>
  )
}

class CardAccount extends Component {
  render() {
    const { accounts } = this.props;
    const accountList = accounts.accountList;
    const totalClasses = classNames('pr-4', 'h5', 'text-' + getColor(accounts.total));
    return (
      <Card>
        <CardHeader>
          <strong>{accounts.name}</strong>
          <div className="card-header-actions"><div className={totalClasses}>{currencyFormater(accounts.total)}</div></div>
        </CardHeader>
        <CardBody className="p-0 pl-5">
          {accountList.map((account, index) =>
            <AccountRow key={index} account={account} />
          )}
        </CardBody>
      </Card>
    );
  }
}

CardAccount.propTypes = propTypes;
CardAccount.defaultProps = defaultProps;

export default CardAccount;