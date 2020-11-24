import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Modal, Button, InputNumber } from "antd";
import Axios from '../../config/axios.setup'

export default class LineDemo extends Component {

  state = {
    visible: false,
    name: '',
    price: 0,
    investPerUnit: 0,
    amount: 0,
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
    Axios.get('/static/history/btc').then((result) => {
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

  showModal = () => {
    this.setState({
      visible: true,
      name: 'ETH',
      price: this.state.data.datasets[0].data[9],
    }, () => {

    });
  };

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

  onChange = (value) => {
    this.setState({
      investPerUnit: value,
      amount: value * this.state.price
    })
  }

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line
          ref="chart"
          data={this.state.data}
        />
        <Button type="primary" onClick={this.showModal}>
            Open Modal
        </Button>
        <Modal
          title={this.state.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{ this.state.price }</p>
          <InputNumber price={this.state.price} min={1} max={1000} defaultValue={0} onChange={this.onChange} />
          <p>{ this.state.amount  }</p>
        </Modal>
      </div>
    );
  }


}