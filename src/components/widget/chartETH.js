import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { FromBuyAndSell } from './fromBuyAndSell';
import { Button } from 'antd';

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "current",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,0)",
      pointBackgroundColor: "rgba(75,192,192,1)",
      pointBorderWidth: 1.5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,0)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 111]
    }
  ]
};

export default class LineDemo extends Component {

  state = {
    visible: false,
    name: '',
    price: 0,
    investPerUnit: 0,
    amount: 0
  };


  showModal = () => {
    this.setState({
      visible: true,
      name: 'ETH',
      price: this.lastPrice,
    });
  };

  lastPrice() {
    return Number(data.datasets[0].data.pop())
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line
          ref="chart"
          data={data}
        />
        <Button type="primary" onClick={this.showModal}>
            Open Modal
        </Button>
        <FromBuyAndSell visible={this.state.visible} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}