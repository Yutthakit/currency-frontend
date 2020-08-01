import React, { Component } from "react";
import Axios from '../../config/axios.setup'
import { Link } from "react-router-dom";
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
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }




  render() {

    const onFinish = values => {
      console.log(values);
      Axios.post('/login', {
        username: values.username,
        password: values.password
      })
        .then(result => {
          localStorage.setItem('ACCESS_TOKEN', result.data.token)
          redirect()

        })
        .catch(err => {
          console.log(err);
          failLoginNotification()
        })
    }

    const redirect = () => {
      this.props.history.push("/profile")
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
            <Row justify='end'>
              <Col style={{ color: '#ffffff', marginBottom: '1rem' }}>
                <Link to="/ForgotPassword">
                  forgot your password
              </Link>
              </Col>
            </Row>
            <Row justify="space-around">
              <Col>
                <Link to="/signup">
                  <Button type="link">Signup</Button>
                </Link>
              </Col>
              <Col>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="danger">
                    Login
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


export default Login


