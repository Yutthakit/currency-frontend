import React, { Component } from 'react'
import { Col, Row, Input, Icon, Button } from 'antd'

export default class Login extends Component {
  render() {
    return (
      <Row type='flex' justify='center'>
        <Col xs={24} sm={22} md={18} lg={14}>
          <Row type='flex' justify='center'>
            <Col>
              <h1> Login </h1>
              <Row >
                <Col> Username : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
                <Col style={{marginBottom : '10px'}}> Password : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
                <Button type="primary" block>
                  Login
                </Button>
                <Button type="link" block>
                  Forgot You Password
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row >
    )
  }
}
