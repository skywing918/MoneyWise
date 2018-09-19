import React, { Component } from 'react';
import { CardTitle, ButtonToolbar, ButtonGroup, CardFooter, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import logsData from './LogsData'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

function dateTimeFormatter(cell, row) {
    return (
        <span>{new Date(cell).toLocaleDateString()}</span>
    );
}

function accountFormatter(cell, row) {
    let baseAccount = row.incomeAccount||row.outgoAccount;
    if(row.incomeAccount && row.outgoAccount) {
        baseAccount=row.incomeAccount+' -> '+row.outgoAccount
    }
    return (
        <span>{baseAccount}</span>
    );
}

function modalFormatter(cell, row, c, toggle) {
    return (
        <span><Button color="danger" onClick={() => toggle(row)}>查看</Button></span>
    );
}

function customTotal(from, to, size) {
    return (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
        </span>
    );
}

class Records extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    
        this.state = {
          dropdownOpen: false,
          radioSelected: 2,
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
        });
      }
    
      onRadioBtnClick(radioSelected) {
        this.setState({
          radioSelected: radioSelected,
        });
      }

    render() {
        const logList = logsData;//.filter((log) => log.id < 7)
        const columns = [
            {
                dataField: 'createdDate',
                text: '日期',
                formatter: dateTimeFormatter
            },
            {
                dataField: 'type',
                text: '活动类型'
            },
            {
                dataField: 'income',
                text: '收入'
            },
            {
                dataField: 'outgo',
                text: '支出'
            },
            {
                dataField: '',
                text: '账户',
                formatter: accountFormatter
            },
            {
                dataField: '',
                text: '操作',
                formatter: modalFormatter,
                formatExtraData: this.toggle
            }];
        return (
            <div className="animated fadeIn">
            <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                
                <div className="chart-wrapper" style={{  marginTop: 20 + 'px',height:435+'px',overflow:'auto' }}>
                {logList &&
                    <BootstrapTable keyField='id' data={logList} columns={columns}/>
                }
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">流出：<strong className="text-success">100,000.00</strong></div>
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">流入：<strong className="text-danger">200.00</strong></div>
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">差额：<strong>98,000.00</strong></div>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
            </div>
        );
    }
}

export default Records;
