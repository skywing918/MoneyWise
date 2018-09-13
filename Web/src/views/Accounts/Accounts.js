import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Modal, ModalBody, ModalFooter, ModalHeader,
    Form,FormGroup,Label,Input
} from 'reactstrap';
import CardAccount from './CardAccount';


class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create: false,
            account: {
                name: '',
                type:'',
                role: 'RMB',
                curr: '',
                comment:''
            }
        };
        this.toggleNew = this.toggleNew.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        //this.setState({ submitted: true });
        const { account } = this.state;
        const { dispatch } = this.props;
        if (account.name) {
            this.setState({
                create: !this.state.create,
            });
            //dispatch(userActions.register(user));
        }
    }

    render() {
        const { account, submitted } = this.state;
        const cardList = [
            {
                id:0,
                name:'活期',
                total:-400, 
                accountList: [
                    { id: 1, title: '他的活期', owner: 'Kyle', total: 100 },
                    { id: 2, title: '我的活期', owner: 'aniv', total: -500 }
                ]
            },
            {
                id:3,
                name:'卡',
                total:1000, 
                accountList: [
                    { id: 4, title: '招行卡', owner: 'Kyle', total: -1500 },
                    { id: 5, title: '农行卡', owner: 'aniv', total: 500 }
                ]
            }

        ]
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
                                                        <Label htmlFor="role">账户类型</Label>
                                                    </Col>
                                                    <Col xs="12" md="9">
                                                        <Input type="select" id="role" name="role" value={account.type} onChange={this.handleChange}>
                                                            <option value="RMB">现金</option>
                                                            <option value="MB">活期(卡折)</option>
                                                            <option value="MB">信用卡</option>
                                                            <option value="MB">投资</option>
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
                            {cardList.map((accounts, index) =>
                                <CardAccount accounts={accounts} key={index}/>
                            )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Accounts;
