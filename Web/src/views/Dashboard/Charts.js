import React, { Component } from 'react';
import { 
  CardTitle,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import { Bar, Doughnut } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'],
  datasets: [
    {
      label: '收入',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [4000, 59, 80, 81, 56, 55, 40, 2000],
    },
    {
      label: '支出',
      backgroundColor: 'rgba(0,255,132,0.2)',
      borderColor: 'rgba(0,255,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,255,132,0.4)',
      hoverBorderColor: 'rgba(0,255,132,1)',
      data: [650, 59, 80, 81, 56, 90, 20, 1000],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

const doughnut = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

class Charts extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0,
      radioSelected: 2
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {
    return (
      <Col>
        <Card>
          <CardHeader>
            <strong>图表</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="2">
                <ListGroup id="list-tab" role="tablist">
                  <ListGroupItem onClick={() => this.toggle(0)} action active={this.state.activeTab === 0} >月收支对比</ListGroupItem>
                  <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >当月收/支构成</ListGroupItem>
                  <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >可用资金构成</ListGroupItem>
                  <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >债权债务构成</ListGroupItem>
                  <ListGroupItem onClick={() => this.toggle(4)} action active={this.state.activeTab === 4} >资产构成</ListGroupItem>
                </ListGroup>
              </Col>
              <Col xs="10">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId={0} >
                    <Row>
                      <Col sm="12" className="d-none d-sm-inline-block">
                        <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                          <ButtonGroup className="mr-3" aria-label="First group">
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>按月</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>按季</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>按年</Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Col>
                    </Row>
                    <div className="chart-wrapper" style={{ height: 280 + 'px', marginTop: 40 + 'px' }}>
                    <Bar data={bar} options={options} />
                    </div>
                    
                  </TabPane>
                  <TabPane tabId={1}>
                    <Row>
                      <Col sm="12" className="d-none d-sm-inline-block">
                        <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                          <ButtonGroup className="mr-3" aria-label="First group">
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>本月</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>本季</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>本年</Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Col>
                    </Row>
                    <Row className="chart-wrapper" style={{ height: 280 + 'px', marginTop: 40 + 'px' }}>
                      <Col xs="6">
                        <Doughnut data={doughnut}  height={170}/>
                      </Col>
                      <Col xs="6">
                        <Doughnut data={doughnut}  height={170}/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={2}>
                    <div className="chart-wrapper" style={{ height: 315 + 'px', marginTop: 40 + 'px'}}>
                      <Doughnut data={doughnut}  height={90}/>
                    </div>
                  </TabPane>
                  <TabPane tabId={3}>
                  <Row>
                      <Col sm="12" className="d-none d-sm-inline-block">
                        <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                          <ButtonGroup className="mr-3" aria-label="First group">
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>按款项</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>按人员</Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Col>
                    </Row>
                    <Row className="chart-wrapper" style={{ height: 280 + 'px', marginTop: 40 + 'px' }}>
                      <Col xs="6">
                        <Doughnut data={doughnut}  height={170}/>
                      </Col>
                      <Col xs="6">
                        <Doughnut data={doughnut}  height={170}/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={4}>
                    <div className="chart-wrapper" style={{ height: 315 + 'px', marginTop: 40 + 'px'}}>
                      <Doughnut data={doughnut}  height={90}/>
                    </div>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Charts;