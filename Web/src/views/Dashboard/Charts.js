import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '收入',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [4000, 59, 80, 81, 56, 55, 40],
    },
    {
      label: '支出',
      backgroundColor: 'rgba(0,255,132,0.2)',
      borderColor: 'rgba(0,255,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,255,132,0.4)',
      hoverBorderColor: 'rgba(0,255,132,1)',
      data: [650, 59, 80, 81, 56, 90, 20],
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
      activeTab: 0
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
                </ListGroup>
              </Col>
              <Col xs="10">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId={0} >
                    <Bar data={bar} options={options} />
                  </TabPane>
                  <TabPane tabId={1}>
                    <Row>
                      <Col xs="6">
                        <Doughnut data={doughnut} />
                      </Col>
                      <Col xs="6">
                        <Doughnut data={doughnut} />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={2}>
                    <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                      nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                      est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                      deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                          laborum elit adipisicing pariatur cillum.</p>
                  </TabPane>
                  <TabPane tabId={3}>
                    <Row>
                      <Col xs="6">
                        <Doughnut data={doughnut} />
                      </Col>
                      <Col xs="6">
                        <Doughnut data={doughnut} />
                      </Col>
                    </Row>
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