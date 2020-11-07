import React, { Component } from "react";
import Axios from '../config/axios.setup'
import "./login.css"
import { Row, Col, Form, Input, Button, notification } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

class ResetPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


componentDidMount() {
  console.log(this.props.match.url);
}

  render() {

    const onFinish = values => {
      const api = this.props.match.url
      Axios.put(api, {
        username: values.username,
        password: values.password
      })
        .then(result => {
          console.log(result);
          redirect()
        })
        .catch(err => {
          console.log(err);
          failLoginNotification()
        })
    }

    const redirect = () => {
      this.props.history.push("/login")
    }


    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    }

    const failLoginNotification = (message) => {
      notification.open({
        message: 'Login fail',
        description: message,
      })
    }
    return (
      <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
        <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
          <Row justify='center'>
              <Col style={{ color: '#ffffff', marginBottom: '1rem' }}>
              <h1 style={{ color: '#ffffff' }}>Reset Password</h1>
              </Col>
            </Row>
          <Form
            {...layout}
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

            <Form.Item
              style={{ width: "100%", justifyContent: 'center' }}
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                style={{ backgroundColor: '#2A2C36', border: '#2A2C36', color: ' #ffffff' }}
                placeholder='Password'
              />
            </Form.Item>
            <Row justify="center">
              <Col>
                <Form.Item >
                  <Button type="primary" htmlType="danger">
                    Reset
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


export default ResetPassword


