import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Badge, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { connect } from 'react-redux';
import { userActions } from '../../../_actions';

function imageFormatter(cell, row) {
    return (
        <img src={row.photo} height={35}/>
    );
}

function statusFormatter(cell, row) {
    const getBadge = (status) => {
        return status === 'Active' ? 'success' :
            status === 'Inactive' ? 'secondary' :
                status === 'Pending' ? 'warning' :
                    status === 'Banned' ? 'danger' :
                        'primary'
    }

    return (
        <Badge color={getBadge(row.userStatus)}>{row.userStatus}</Badge>
    );
}

function dateTimeFormatter(cell, row) {
    return (
        <span>{new Date(cell).toLocaleDateString()} {new Date(cell).toLocaleTimeString()}</span>
    );
}

function customTotal(from, to, size) {
    return (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
        </span>
    );
}


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: [] };

    }
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleCreate = () => {
        window.location = '/system/usersCreate';
    }

    handleUpdate = () => {
        if (this.state.selected.length === 0) {
            alert("请选择一条记录。")
            return;
        }
        var curr = this.state.selected[0]
        const userLink = `/system/users/${curr}`
        window.location = userLink;
    }

    handleReset = () => {
        if (this.state.selected.length === 0) {
            alert("请选择一条记录。")
            return;
        }
        const { dispatch } = this.props;
        if (window.confirm('Are you sure you wish to delete this item?')) {
            this.state.selected.forEach(function (id) {
                dispatch(userActions.reset(id));
            })
        }
    }

    handleLock = () => {
        if (this.state.selected.length === 0) {
            alert("请选择一条记录。")
            return;
        }
        const { dispatch, users } = this.props;
        if (window.confirm('Are you sure you wish to delete this item?')) {
            this.state.selected.forEach(function (id) {
                var detials = users.items.find(function (row) {
                    return row.id === id;
                });
                detials.userStatus = 'Inactive';
                dispatch(userActions.lockOrUnLock(id, detials));
            })
        }
    }

    handleUnLock = () => {
        if (this.state.selected.length === 0) {
            alert("请选择一条记录。")
            return;
        }
        const { dispatch, users } = this.props;
        if (window.confirm('Are you sure you wish to delete this item?')) {
            this.state.selected.forEach(function (id) {
                var detials = users.items.find(function (row) {
                    return row.id === id;
                });
                detials.userStatus = 'Active';
                dispatch(userActions.lockOrUnLock(id, detials));
            })
        }
    }

    handleDelete = () => {
        const { dispatch } = this.props;
        if (window.confirm('Are you sure you wish to delete this item?')) {
            this.state.selected.forEach(function (id) {
                dispatch(userActions.delete(id));
            })
        }
    }

    handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            this.setState(() => ({
                selected: [...this.state.selected, row.id]
            }));
        } else {
            this.setState(() => ({
                selected: this.state.selected.filter(x => x !== row.id)
            }));
        }
    }

    render() {
        const { user, users } = this.props;
        const columns = [
            {
                dataField: 'id',
                text: '序号'
            },
            {
                dataField: 'photo',
                text: '照片',
                formatter: imageFormatter
            },
            {
                dataField: 'fullName',
                text: '姓名'
            },
            {
                dataField: 'userName',
                text: '工号'
            },
            {
                dataField: 'mobilePhone',
                text: '手机'
            },
            {
                dataField: 'userRole',
                text: '角色'
            },
            {
                dataField: 'userStatus',
                text: '状态',
                formatter: statusFormatter
            },
            {
                dataField: 'registered',
                text: '创建时间',
                formatter: dateTimeFormatter
            }];
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            selected: this.state.selected,
            onSelect: this.handleOnSelect,
        };

        const options = {
            paginationSize: 4,
            pageStartIndex: 1,
            // alwaysShowAllBtns: true, // Always show next and previous button
            //withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            //hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }] // A numeric array is also available. the purpose of above example is custom the text
        };

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col xs="12" sm="6" lg="7">
                                        <Form action="" method="post" inline>
                                            <FormGroup className="pr-1">
                                                <Label htmlFor="userNo" className="pr-1">工号</Label>
                                                <Input type="text" id="userNo" />
                                            </FormGroup>
                                            <FormGroup className="pr-1">
                                                <Label htmlFor="userName" className="pr-1">姓名</Label>
                                                <Input type="text" id="userName" />
                                            </FormGroup>
                                            <FormGroup className="pr-1">
                                                <Label htmlFor="userStatus" className="pr-1">用户状态</Label>
                                                <Input type="select" name="userStatus" id="SelectLm">
                                                    <option value="0">Please select</option>
                                                    <option value="1">可用</option>
                                                    <option value="2">不可用</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="pr-1">
                                                <Label htmlFor="userMobile" className="pr-1">手机号码</Label>
                                                <Input type="text" id="userMobile" />
                                            </FormGroup>
                                            <FormGroup className="pr-1">
                                                <Label htmlFor="userRole" className="pr-1">角色</Label>
                                                <Input type="text" id="userRole" />
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                    <Col xs="12" sm="6" lg="5">
                                        <Button type="submit" color="primary">查询</Button>
                                    </Col>
                                </Row>

                            </CardHeader>
                            <CardBody>
                                <Row style={{ padding: '10px' }}>
                                    <Button color="info" style={{ margin: '5px' }} onClick={this.handleCreate}>增加</Button>
                                    <Button color="warning" style={{ margin: '5px' }} onClick={this.handleUpdate}>修改</Button>
                                    <Button color="danger" style={{ margin: '5px' }} onClick={this.handleDelete}>删除</Button>
                                    <Button style={{ margin: '5px' }} onClick={this.handleReset}>密码重置</Button>
                                    <Button color="dark" style={{ margin: '5px' }} onClick={this.handleLock}>锁定</Button>
                                    <Button color="success" style={{ margin: '5px' }} onClick={this.handleUnLock}>解锁</Button>
                                </Row>
                                {users.items &&
                                    <BootstrapTable keyField='id' data={users.items} columns={columns} selectRow={selectRow} pagination={paginationFactory(options)} />
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default connect(mapStateToProps)(Users);
