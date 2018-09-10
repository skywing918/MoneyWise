import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import CardAccount from './CardAccount';

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create: false
        };
        this.toggleNew = this.toggleNew.bind(this);
    }
    
    toggleNew() {
        this.setState({
            create: !this.state.create,
        });
    }

    render() {
        const cardList = [
            {
                name:'活期',
                total:'-400', 
                accountList: [
                    { id: 0, title: '他的活期', owner: 'Kyle', total: '100' },
                    { id: 1, title: '我的活期', owner: 'aniv', total: '-500' }
                ]
            },
            {
                name:'卡',
                total:'1,000', 
                accountList: [
                    { id: 0, title: '招行卡', owner: 'Kyle', total: '1500' },
                    { id: 1, title: '农行卡', owner: 'aniv', total: '-500' }
                ]
            }

        ]
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Traffic {' & '} Sales
                                <div className="card-header-actions">
                                    <Button onClick={this.toggleNew} size="sm"><i className="icon-plus"></i>&nbsp;增加账户</Button>
                                    <Modal isOpen={this.state.create} toggle={this.toggleNew} className={this.props.className}>
                                        <ModalHeader toggle={this.toggleNew}>Modal title</ModalHeader>
                                        <ModalBody>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.toggleNew}>Do Something</Button>{' '}
                                            <Button color="secondary" onClick={this.toggleNew}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </CardHeader>
                            <CardBody >
                            {cardList.map((accounts, index) =>
                                <CardAccount accounts={accounts}/>
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
