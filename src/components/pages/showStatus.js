import React, { Component } from "react";
import Axios from '../../config/axios.setup'
import { Link } from "react-router-dom";
import Status from './status'

import "./showStatus.css"
import { Layout, Row, Col, InputNumber, Button, Input } from 'antd';
const { Header } = Layout;

class ShowStatus extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.number = '250'
  }


  componentDidMount() {
    console.log(this.props);
  }

  hendleSuccess = () => {
    this.props.history.push("/status/success")
  }
  onChangedata = (value) => {
    this.setState({
      number: value
    })
  }

  onChange = (e) => {
    const value = e.target.value
    
    if (e.target.value){
      this.setState({
        number: e.target.value
      })
    }
    if(e){
      this.setState({
        number: e
      })
    }
    console.log(value);
    console.log(e.target.value);
    
  }

  render() {

    console.log(this.state.number);

    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: '#1E1F28' }}>
            <Row>
              <h2 style={{ color: 'white' }}>Payment Method</h2>
            </Row>
          </Header>
          <div style={{ backgroundColor: 'green', height: '5px', width: '100%' }}></div>
          <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
            <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
              <h1 style={{ color: 'white' }}>Amount</h1>
              <div>
                <Input
                style={{ backgroundColor: '#2A2C36', color: '#FFFFFF' }}
                  type="number"
                  prefix="$"
                  suffix="USD"
                  value={this.state.number}
                  onChange={this.onChange}
                />
              </div>

              <div style={{ margin: '2rem' }}>
                <Button style={{ margin: '0.1rem', borderRadius: '10px' }} onClick={() => this.onChange(250)} >$250</Button>
                <Button style={{ margin: '0.1rem', borderRadius: '10px' }} onClick={() => this.onChange(500)} >$500</Button>
                <Button style={{ margin: '0.1rem', borderRadius: '10px' }} onClick={() => this.onChange(1000)} >$1000</Button>
                <Button style={{ margin: '0.1rem', borderRadius: '10px' }} onClick={() => this.onChange(3000)} >$3000</Button>
              </div>
            </Col>
          </Row>
        </Layout>
      </div>
    )
  }
}


export default ShowStatus


