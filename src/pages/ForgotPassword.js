import React, { Component } from 'react'
import Axios from '../config/axios.setup'
import { Row, Col, Form, Input, Button, notification } from "antd";

class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    const onFinish = values => {
      Axios.post('/sendLinkResetPassword', {
        username: values.username,
      })
        .then(() => {
          sendEmailNotification()
        })
        .catch(err => {
          sendEmailFailNotification()
        })
    }

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    }
    const sendEmailNotification = (message) => {
      notification.open({
        message: 'sendEmail',
        description: message,
      })
    }

    const sendEmailFailNotification = (message) => {
      notification.open({
        message: 'username is not corract',
        description: message,
      })
    }

    return (
      <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
        <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
          <Row justify='center'>
            <Col style={{ color: '#ffffff', marginBottom: '1rem' }}>
              <h1 style={{ color: '#ffffff' }}>Forgot Password</h1>
              <p style={{ color: '#ffffff' }}>Please,enter your Username. your will receive a link to create a new password view email</p>
            </Col>
          </Row>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              style={{ width: "100%", justifyContent: 'center' }}
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input
                style={{ backgroundColor: '#2A2C36', border: '#2A2C36', color: ' #ffffff' }}
                placeholder="username"
              />
            </Form.Item>
            <Row justify="space-around">
              <Col>
                <Form.Item >
                  <Button htmlType="submit" type="danger">
                    Send
                </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default ForgotPassword