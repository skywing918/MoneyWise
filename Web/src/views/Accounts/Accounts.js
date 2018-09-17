import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Modal, ModalBody, ModalFooter, ModalHeader,
    Form, FormGroup, Label, Input
} from 'reactstrap';

import CardAccount from './CardAccount';
import { accountActions } from '../../_actions';
import { connect } from 'react-redux';

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create: false,
            account: {
                name: '',
                type: '2',
                role: 'RMB',
                price: 0,
                comments: ''
            }
        };
        this.toggleNew = this.toggleNew.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(accountActions.getAllByBookId('5b9b50e55f36930bd41a254b'));
    }

    toggleNew() {
        this.setState({
            create: !this.state.create,
        });
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { account } = this.state;
        this.setState({
            account: {
                ...account,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ create: !this.state.create });
        const { account } = this.state;
        const { dispatch, user } = this.props;
        account.CreatedBy = user.unique_name;
        account.BookId = '5b9b50e55f36930bd41a254b';
        if (account.name) {
            dispatch(accountActions.create(account));
        }
    }

    handleDelete(accountId) {
        const { dispatch } = this.props;
        dispatch(accountActions.delete(accountId));
    }

    render() {
        const { accounts } = this.props;
        const { account } = this.state;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                账户中心
                                <div className="card-header-actions">
                                    <Button onClick={this.toggleNew} size="sm"><i className="icon-plus"></i>&nbsp;增加账户</Button>
                                    <Modal isOpen={this.state.create} toggle={this.toggleNew} className={this.props.className}>
                                        <ModalHeader toggle={this.toggleNew}>新增账号</ModalHeader>
                                        <ModalBody>
                                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>
                                                <FormGroup row>
                                                    <Col md="3">
                                                        <Label htmlFor="name">账户名称</Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="text" id="name" name="name" value={account.name} onChange={this.handleChange} required />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Col md="3">
                                                        <Label htmlFor="type">账户类型</Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="select" id="type" name="type" value={account.type} onChange={this.handleChange}>
                                                            <option value="1">现金</option>
                                                            <option value="2">活期(卡折)</option>
                                                            <option value="3">信用卡</option>
                                                            <option value="4">投资</option>
                                                        </Input>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Col md="3">
                                                        <Label htmlFor="role">币种</Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="select" id="role" name="role" value={account.role} onChange={this.handleChange}>
                                                            <option value="RMB">人民币</option>
                                                            <option value="MB">美元</option>
                                                        </Input>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Col md="3">
                                                        <Label htmlFor="curr">账户余额</Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="text" id="curr" name="curr" value={account.curr} onChange={this.handleChange} />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Col md="3">
                                                        <Label htmlFor="comment">备注</Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="text" id="comment" name="comment" value={account.comment} onChange={this.handleChange} />
                                                    </Col>
                                                </FormGroup>
                                            </Form>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.handleSubmit}>保存</Button>{' '}
                                            <Button color="secondary" onClick={this.toggleNew}>取消</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </CardHeader>
                            <CardBody >
                                {accounts.items && accounts.items.map((cards, index) =>
                                    <CardAccount cards={cards} key={index} delete={this.handleDelete} />
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { books, authentication,accounts } = state;
    const { user } = authentication;
    return {
      user,
      books,
      accounts
    };
  }

export default connect(mapStateToProps)(Accounts);
