import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const propTypes = {
  investment: PropTypes.array
};

const defaultProps = {
  investment: []
};

function currencyFormater(price) {
  return price.toFixed(2).toLocaleString();
}

function InvestmentRow(props) {
  const investment = props.investment
  const logList = investment.recordList
  const columns = [
    {
      dataField: 'name',
      text: '名称'
    },
    {
      dataField: 'price',
      text: '投入成本',
      headerAlign: 'right',
      align: 'right',
      formatter: currencyFormater
    }
  ];

  return (
    <Col>
      <Card>
        <CardHeader>
          <strong>{investment.name}</strong>
          <div className="card-header-actions">
            <strong>投入成本</strong>
            <div className="text-muted text-right">{currencyFormater(investment.total)}</div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          {logList &&
            <BootstrapTable keyField='id' data={logList} columns={columns} striped
              hover
              condensed
              bordered={false}
              headerClasses="investments-header-class"
            />
          }
        </CardBody>
      </Card>
    </Col>
  )
}

class CardInvestment extends Component {
  render() {
    const { investments } = this.props;
    return (
      <div>
        {investments.map((investment, index) =>
          <InvestmentRow key={index} investment={investment} />
        )}
      </div>
    );
  }
}

CardInvestment.propTypes = propTypes;
CardInvestment.defaultProps = defaultProps;

export default CardInvestment;