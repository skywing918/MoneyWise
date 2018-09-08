import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    Table,
    Col,
    Row,
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
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Traffic {' & '} Sales
                                <div className="card-header-actions">
                                    <Button onClick={this.toggleCurrent} size="sm"><i className="icon-plus"></i>&nbsp;增加账户</Button>
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
                            <CardBody >
                                <Card>
                                    <CardHeader>
                                        <strong>活期</strong>
                                        <div className="card-header-actions pr-4">1000</div>
                                    </CardHeader>
                                    <CardBody className="p-0 pl-5">
                                        <Col sm="12">
                                            <div className="callout callout-success">
                                                <strong className="h4">现金</strong>
                                                <br />
                                                <small className="text-muted">人民币|张三</small>
                                                <div className="card-header-actions pr-4">
                                                    123
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="12">
                                            <div className="callout callout-success">
                                                <strong className="h4">现金</strong>
                                                <br />
                                                <small className="text-muted">人民币|张三</small>
                                                <div className="card-header-actions pr-4">
                                                    123
                                                </div>
                                            </div>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Accounts;
