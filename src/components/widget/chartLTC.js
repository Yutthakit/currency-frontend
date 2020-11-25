import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Modal, Button, InputNumber } from "antd";
import Axios from '../../config/axios.setup'

export default class chartLTC extends Component {

  state = {
    visible: false,
    name: '',
    price: 0,
    investPerUnit: 0,
    amount: 0,
    type: '',
    data: {
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
      ]}
  };

  componentDidMount() {
    this.getDateAndPrice()
  }

  getDateAndPrice() {
    Axios.get('/static/history/ltc').then((result) => {
      this.getData(result.data)
    }).catch((err) => {
      console.log(err)
    });
  }

  getData = (data) => {
    if (data) {
      this.setState({
        amount: data.price[9],
        data: { 
          labels : data.date,
          datasets:[
            {
              label: "current",
              fill: false,
              lineTension: 0.3,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.5,
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
              data: data.price
            }
          ]
        }
      })
    }
  }

  showModal = (type) => {
    this.setState({
      visible: true,
      name: 'LTC',
      price: this.state.data.datasets[0].data[9],
      type: type
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (value) => {
    this.setState({
      investPerUnit: value,
      amount: value * this.state.price
    })
  }

  render() {
    return (
      <div>
        <h2>LTC</h2>
        <Line
          ref="chart"
          data={this.state.data}
        />
        <Button type="primary" onClick={() => this.showModal('buy')}>
            Buy
        </Button>
        <Button type="primary" onClick={() => this.showModal('sell')}>
            Sell
        </Button>
        <Modal
          title={this.state.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Current Price : { this.state.price }</p>
          <p>Value Investment/Divestment : <InputNumber price={this.state.price} min={0.01} max={1000} defaultValue={1} onChange={this.onChange} /> </p>
          <p>Amount : { this.state.amount  }</p>
        </Modal>
      </div>
    );
  }


}