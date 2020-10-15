import React, { Component } from 'react'
import Chart from "react-apexcharts";
import Axios from 'axios';

 class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: [{
        name: "ETH ",
        data:  [
          8107.85,
          8128.0,
          8122.9,
          8165.5,
          8340.7,
          8423.7,
          8423.5,
          8514.3,
          8481.85,
          8487.7,
          8506.9,
          8626.2,
          8668.95,
          8602.3,
          8607.55,
          8512.9,
          8496.25,
          8600.65,
          8881.1,
          9340.85
        ],
      }],
      options: {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        
        title: {
          text: 'Currency ETH',
          align: 'left'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        labels: [
          "13 Nov 2017",
          "14 Nov 2017",
          "15 Nov 2017",
          "16 Nov 2017",
          "17 Nov 2017",
          "20 Nov 2017",
          "21 Nov 2017",
          "22 Nov 2017",
          "23 Nov 2017",
          "24 Nov 2017",
          "27 Nov 2017",
          "28 Nov 2017",
          "29 Nov 2017",
          "30 Nov 2017",
          "01 Dec 2017",
          "04 Dec 2017",
          "05 Dec 2017",
          "06 Dec 2017",
          "07 Dec 2017",
          "08 Dec 2017"
        ],
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      },
      
    }
  }

  componentDidMount(){
    // Axios.get('/static/history/ETH', {
    // })
    //   .then((result) => {
    //     let series = result.data.map(item=>item.price)
    //     console.log(series)
    //     this.setState({
    //       series: [{
    //         name: "ETH",
    //         data: series
    //       }],
    //     })
    //   }).catch((err) => {
    //     console.log(err)
    //   });
  }

  render() {
    console.log(this.state.series);
    console.log(this.state.options);
    return (
      <div style={{backgroundColor: 'black'}}>
      <div className="row" style={{display: 'flex', justifyContent:'space-evenly',backgroundColor: 'black', marginTop: '5rem', marginBottom: '5rem'}}>
        <div className="col-6">
          {this.state.series && 
           <Chart
            options={this.state.options} series={this.state.series} type="area" height={350} width={500}
          />
          }
        </div>
        <div className="col-6">
          {this.state.series && 
           <Chart
            options={this.state.options} series={this.state.series} type="area" height={350} width={500}
          />
          }
        </div>
      </div>
      <div className="row" style={{display: 'flex', justifyContent:'space-evenly',backgroundColor: 'black', marginTop: '5rem', marginBottom: '5rem'}}>
        <div className="col-6">
          {this.state.series && 
           <Chart
            options={this.state.options} series={this.state.series} type="area" height={350} width={500}
          />
          }
        </div>
        <div className="col-6">
          {this.state.series && 
           <Chart
            options={this.state.options} series={this.state.series} type="area" height={350} width={500}
          />
          }
        </div>
      </div>
    </div>
    )
  }
}
export default Home