import React, { Component } from 'react';
import { CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardFooter, Nav, NavItem, NavLink, CardHeader, Card, CardBody, TabContent, TabPane, Col, Row } from 'reactstrap';

import logsData from './LogsData'
import BootstrapTable from 'react-bootstrap-table-next';
import classnames from 'classnames';

import { accountActions } from '../../_actions';
import { connect } from 'react-redux';

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

    componentDidMount() {
        if(this.props.site.bookid) {
            this.props.dispatch(accountActions.getAllByTypeInBook(this.props.site.bookid,4));
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.site.bookid !== prevProps.site.bookid) {
            this.props.dispatch(accountActions.getAllByTypeInBook(this.props.site.bookid,4));
        }
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
        const { accounts } = this.props;
        const logList = logsData;//.filter((log) => log.id < 7)
        const listColumns = [
            {
                dataField: 'title',
                text: '账户名称',
                headerStyle: {
                    fontSize: '12px'
                },
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'income',
                text: '预期年华收益',
                align: 'right',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'outgo',
                text: '实际盈亏',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'interestReceivable',
                text: '待收利息',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'receivables',
                text: '待收本金',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: '',
                text: '可用资金',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'cost',
                text: '资产值',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            }
        ];
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            hideSelectColumn: true,
            bgColor: '#00BFFF'
        };

        const detailsColumns = [
            {
                dataField: 'name',
                text: '收款日期',
                headerStyle: {
                    fontSize: '12px'
                },
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'income',
                text: '投资名称',
                headerStyle: {
                    fontSize: '12px',
                },
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'outgo',
                text: '应收本金',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'interestReceivable',
                text: '应收利息',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: 'receivables',
                text: '应收合计',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            {
                dataField: '',
                text: '剩余期数',
                headerStyle: {
                    fontSize: '12px',
                    textAlign: 'right',
                },
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            }
        ];
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
                            <CardBody className="p-0">
                            {accounts.items && <BootstrapTable keyField='id' data={accounts.items} columns={listColumns} selectRow={selectRow} striped
                                    hover
                                    condensed
                                    bordered={ false }/>
                            }
                            </CardBody>
                            <CardFooter className="p-0">
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
                                        <BootstrapTable keyField='id' data={logList} columns={detailsColumns} selectRow={selectRow} />
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
                                        <BootstrapTable keyField='id' data={logList} columns={detailsColumns} selectRow={selectRow} />
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

function mapStateToProps(state) {
    const { books, authentication,accounts,site } = state;
    const { user } = authentication;
    return {
      user,
      books,
      site,
      accounts
    };
  }

export default connect(mapStateToProps)(Lending);