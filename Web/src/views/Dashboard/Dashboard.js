import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
} from 'reactstrap';
import chinadata from './china';
import { geoMercator, geoPath } from 'd3-geo';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

// D3 Map
function D3Map(props) {
    const { width } = props.size;
    const projection = geoMercator().scale(width / 2.5).translate([-width * 0.45, width * 0.45]);
    const pathGenerator = geoPath().projection(projection);
    const countries = chinadata.features
        .map((d, i) => <path
            key={'path' + i}
            d={pathGenerator(d)}
            className='countries'
            fill='rgba(25, 133, 172, 1)'
        />);

    return (<svg>
        {countries}
    </svg>)
};

//Random Numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTargetDate(diff) {
    var currDate = new Date();
    currDate.setDate(currDate.getDate() - diff);
    return currDate.toDateString();
}

var elements = 6;
var data1 = [];
var data2 = [];
var data3 = [];


for (var i = 0; i <= elements; i++) {
    data1.push(random(50, 200));
    data2.push(random(80, 100));
    data3.push(getTargetDate(6 - i));
}

const mainChart1 = {
    labels: data3,
    datasets: [
        {
            label: '最近7天注册趋势',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data1,
        }
    ],
};

const mainChartOpts1 = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
            labelColor: function (tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
        }
    },
    maintainAspectRatio: false,
};

const mainChart2 = {
    labels: data3,
    datasets: [
        {
            label: '最近7天APP活跃度',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: '#c2cfd6',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data2,
        }
    ],
};

const mainChartOpts2 = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
            labelColor: function (tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
        }
    },
    maintainAspectRatio: false,
};

const pie1 = {
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

const pie2 = {
    labels: [
        'Red',
        'Green',
    ],
    datasets: [
        {
            data: [80, 20],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
            ],
        }],
};



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };

    }

    componentDidMount() {
        var self = this;
        window.addEventListener("resize", function (e) {
            self.setState({ size: { width: window.innerWidth, height: window.innerHeight } });
        });
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="4">
                        <Card>
                            <CardBody className="clearfix p-3 card-body">
                                <i className="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
                                <div className="text-muted text-uppercase font-weight-bold font-xs">总终端数</div>
                                <div className="h5 mb-0 text-primary mt-2">1112</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="4">
                        <Card>
                            <CardBody className="clearfix p-3 card-body">
                                <i className="fa fa-group bg-info p-3 font-2xl mr-3 float-left"></i>
                                <div className="text-muted text-uppercase font-weight-bold font-xs">用户量</div>
                                <div className="h5 mb-0 text-primary mt-2">1001</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="4">
                        <Card>
                            <CardBody className="clearfix p-3 card-body">
                                <i className="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
                                <div className="text-muted text-uppercase font-weight-bold font-xs">APP绑定终端</div>
                                <div className="h5 mb-0 text-primary mt-2">503</div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="8">
                        <D3Map size={this.state.size} />
                    </Col>
                    <Col xs="12" sm="6" lg="4">
                        <Card>
                            <CardHeader>
                                终端使用群体统计
              <div className="card-header-actions">

                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-wrapper">
                                    <Pie data={pie1} />
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                APP转化率
              <div className="card-header-actions">
                                    50%
                            </div>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-wrapper">
                                    <Pie data={pie2} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <div className="chart-wrapper" style={{ height: 300 + 'px' }}>
                                    <Line data={mainChart1} options={mainChartOpts1} height={300} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <div className="chart-wrapper" style={{ height: 300 + 'px' }}>
                                    <Line data={mainChart2} options={mainChartOpts2} height={300} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
