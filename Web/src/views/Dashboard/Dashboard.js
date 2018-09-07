import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    CardGroup,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
    ListGroup,
    ListGroupItem,
    TabContent,
    TabPane
} from 'reactstrap';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import Widget04 from './Widget04';
import Charts from './Charts';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: new Array(6).fill(false),
        };
    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="7">
                        <CardGroup className="mb-4">
                            <Card className="h5 mb-0">
                                <CardBody className="h3 mt-4 text-center">
                                    <Dropdown isOpen={this.state.dropdownOpen[5]} toggle={() => { this.toggle(5); }}>
                                        <DropdownToggle
                                            tag="span"
                                            onClick={() => { this.toggle(5); }}
                                            data-toggle="dropdown"
                                            aria-expanded={this.state.dropdownOpen[5]}
                                            caret
                                        >
                                           9月
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <div className="dropdown-item" onClick={() => { this.toggle(5); }}>月</div>
                                            <div className="dropdown-item" onClick={() => { this.toggle(5); }}>季</div>
                                            <div className="dropdown-item" onClick={() => { this.toggle(5); }}>年</div>
                                        </DropdownMenu>
                                    </Dropdown>
                                </CardBody>
                            </Card>
                            <Widget04 icon="fa fa-plus-square fa-lg" color="success" header="10,000.12" >本月收入</Widget04>
                            <Widget04 icon="fa fa-minus-square fa-lg" color="danger" header="8,000.11" >本月支出</Widget04>
                            <Widget04 icon="fa fa-balance-scale fa-lg" header="2,000.01" >结余</Widget04>
                        </CardGroup>
                    </Col>
                    <Col xs="12" sm="6" lg="5">
                        <CardGroup className="mb-4">
                            <Widget04 icon="fa fa-plus-square-o fa-lg" color="success" header="10,000.00" >总资产</Widget04>
                            <Widget04 icon="fa fa-minus-square-o fa-lg" color="danger" header="11.00" >总负债</Widget04>
                            <Widget04 icon="fa fa-balance-scale fa-lg" header="1,999.00" >净资产</Widget04>
                        </CardGroup>
                    </Col>
                </Row>
                <Row>
                    <Charts />
                </Row>
            </div>
        );
    }
}

export default Dashboard;
