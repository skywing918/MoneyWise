import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cash: false,
            creditCard: false,
            toggleCurrent: false,
            thirdparty: false,
            claims: false,
            liabilities: false,
        };
        this.toggleCash = this.toggleCash.bind(this);
        this.toggleCreditCard = this.toggleCreditCard.bind(this);
        this.toggleCurrent = this.toggleCurrent.bind(this);
        this.toggleThirdParty = this.toggleThirdParty.bind(this);
        this.toggleClaims = this.toggleClaims.bind(this);
        this.toggleLiabilities = this.toggleLiabilities.bind(this);
    }
    toggleCash() {
        this.setState({
            cash: !this.state.cash,
        });
    }

    toggleCreditCard() {
        this.setState({
            creditCard: !this.state.creditCard,
        });
    }

    toggleCurrent() {
        this.setState({
            current: !this.state.current,
        });
    }

    toggleThirdParty() {
        this.setState({
            thirdparty: !this.state.thirdparty,
        });
    }

    toggleClaims() {
        this.setState({
            claims: !this.state.claims,
        });
    }

    toggleLiabilities() {
        this.setState({
            liabilities: !this.state.liabilities,
        });
    }


    render() {

        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <strong>现金</strong>
                        <div className="card-header-actions">
                            <Button onClick={this.toggleCash} className="mr-1">Launch demo modal</Button>
                            <Modal isOpen={this.state.cash} toggle={this.toggleCash} className={this.props.className}>
                                <ModalHeader toggle={this.toggleCash}>Modal title</ModalHeader>
                                <ModalBody>
                                    现金
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleCash}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleCash}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill
                                color="warning">1</Badge></ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <strong>活期</strong>
                        <div className="card-header-actions">
                            <Button onClick={this.toggleCurrent} className="mr-1">Launch demo modal</Button>
                            <Modal isOpen={this.state.current} toggle={this.toggleCurrent} className={this.props.className}>
                                <ModalHeader toggle={this.toggleCurrent}>Modal title</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleCurrent}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleCurrent}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill
                                color="warning">1</Badge></ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <strong>信用卡</strong>
                        <div className="card-header-actions">
                            <Button onClick={this.toggleCreditCard} className="mr-1">Launch demo modal</Button>
                            <Modal isOpen={this.state.creditCard} toggle={this.toggleCreditCard} className={this.props.className}>
                                <ModalHeader toggle={this.toggleCreditCard}>Modal title</ModalHeader>
                                <ModalBody>
                                    信用卡
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleCreditCard}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleCreditCard}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill
                                color="warning">1</Badge></ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <strong>第三方储蓄</strong>
                        <div className="card-header-actions">
                            <Button onClick={this.toggleThirdParty} className="mr-1">Launch demo modal</Button>
                            <Modal isOpen={this.state.thirdparty} toggle={this.toggleThirdParty} className={this.props.className}>
                                <ModalHeader toggle={this.toggleThirdParty}>Modal title</ModalHeader>
                                <ModalBody>
                                   3part
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleThirdParty}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleThirdParty}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill
                                color="warning">1</Badge></ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <strong>借入款</strong>
                        <div className="card-header-actions">
                            <Button onClick={this.toggleLiabilities} className="mr-1">Launch demo modal</Button>
                            <Modal isOpen={this.state.liabilities} toggle={this.toggleLiabilities} className={this.props.className}>
                                <ModalHeader toggle={this.toggleLiabilities}>Modal title</ModalHeader>
                                <ModalBody>
                                    借入
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleLiabilities}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleLiabilities}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill
                                color="warning">1</Badge></ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <strong>借出款</strong>
                        <div className="card-header-actions">
                            <Button onClick={this.toggleClaims} className="mr-1">Launch demo modal</Button>
                            <Modal isOpen={this.state.claims} toggle={this.toggleClaims} className={this.props.className}>
                                <ModalHeader toggle={this.toggleClaims}>Modal title</ModalHeader>
                                <ModalBody>
                                    借出
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleClaims}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleClaims}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill
                                color="warning">1</Badge></ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Accounts;
