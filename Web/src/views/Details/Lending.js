import React, { Component } from 'react';
import { CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardFooter, Nav, NavItem, NavLink, CardHeader, Card, CardBody, TabContent, TabPane, Col, Row } from 'reactstrap';

import logsData from './LogsData'
import BootstrapTable from 'react-bootstrap-table-next';
import classnames from 'classnames';

function accountFormatter(cell, row) {
    let baseAccount = row.incomeAccount || row.outgoAccount;
    if (row.incomeAccount && row.outgoAccount) {
        baseAccount = row.incomeAccount + ' -> ' + row.outgoAccount
    }
    return (
        <span>{baseAccount}</span>
    );
}

class Lending extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleTab = this.toggleTab.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
            activeTab: '1',
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

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {
        const logList = logsData;//.filter((log) => log.id < 7)
        const columns = [
            {
                dataField: 'name',
                text: '账户名称'
            },
            {
                dataField: 'income',
                text: '预期年华收益'
            },
            {
                dataField: 'outgo',
                text: '实际盈亏'
            },
            {
                dataField: '',
                text: '待收利息'
            },
            {
                dataField: '',
                text: '待收本金',
            },
            {
                dataField: '',
                text: '可用资金',
            },
            {
                dataField: '',
                text: '资产值',
            }
        ];
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            hideSelectColumn: true,
            bgColor: '#00BFFF'
        };
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                网贷
                                <div className="card-header-actions">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="sm">
                                        <DropdownToggle caret>
                                            操作
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-wrapper" style={{ marginTop: 20 + 'px' }}>
                                    {logList &&
                                        <BootstrapTable keyField='id' data={logList} columns={columns} selectRow={selectRow} />
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
                <Row>
                    <Col>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggleTab('1'); }}
                                >
                                    交易明细
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggleTab('2'); }}
                                >
                                    投资列表
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggleTab('3'); }}
                                >
                                    待收明细
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                <div className="card-header-actions">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="sm">
                                        <DropdownToggle caret>
                                            操作
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                </Row>
                                <Row>
                                    {logList &&
                                        <BootstrapTable keyField='id' data={logList} columns={columns} selectRow={selectRow} />
                                    }
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                             </TabPane>
                            <TabPane tabId="3">
                                <Row>

                                </Row>
                                <Row>
                                    {logList &&
                                        <BootstrapTable keyField='id' data={logList} columns={columns} selectRow={selectRow} />
                                    }
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Lending;
