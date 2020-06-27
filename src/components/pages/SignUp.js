import React, { Component } from "react";
import Axios from '../../config/axios.setup'
import { Link } from "react-router-dom";
import moment from "moment"
import "./login.css"
import { Row, Col, Form, Input, Button, DatePicker, Radio } from 'antd';

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

const SignUp = () => {
  const onFinish = values => {
    console.log(values)
    Axios.post('/register', {
      name: values.firstname,
      surname: values.surname,
      username: values.username,
      password: values.password,
      tel: values.phone,
      birth_date: moment(values['date-picker']).format("MM-DD-YYYY"),
      email: values.Email,
      gender: values.gender

    })
      .then(result => {
        console.log(result);

        // this.props.history.push('/login')
      })
      .catch(err => {
        console.log(err);
      })
    this.props.from.resetField()
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  };

  const styleInputBox = {
    backgroundColor: '#2A2C36',
    border: '#2A2C36',
    color: '#ffffff'
  }

  const requireField = (v) => {
    console.log(v)
    return {
      required: true,
      message: `Please input ${v}`
    }
  }

  return (
    <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
        <Form  {...layout}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Row>
            <h1 style={{ color: '#ffffff' }}>Sign Up</h1>
            <Form.Item
              style={{ width: "100%" }}
              name="firstname"
              rules={[requireField('name')]}
            >
              <Input
                style={styleInputBox}
                placeholder="firstname"
              />
            </Form.Item>
            <Form.Item
              style={{ width: "100%" }}
              name="surname"
              rules={[requireField('surname')]}
            >
              <Input
                style={styleInputBox}
                placeholder="surname" />
            </Form.Item>
            <Form.Item
              style={{ width: "100%" }}
              name="Email"
              rules={[requireField('Email')]}
            >
              <Input
                style={styleInputBox}
                placeholder="Email" />
            </Form.Item>
            <Form.Item
              style={{ width: "100%" }}
              name="phone"
              rules={[requireField('Phone Number')]}
            >
              <Input
                style={styleInputBox}
                placeholder="phone" />
            </Form.Item>
            <Form.Item
              name="date-picker"
              style={{ width: "100%" }}
              rules={[requireField('Birth Date')]}
            >
              <DatePicker />
            </Form.Item>
            {/* <Form.Item
              style={{ width: "100%" }}
              name="brith_date"
              
            >
              <Input
                style={styleInputBox}
                placeholder="brith_date" />
            </Form.Item> */}
            <Form.Item
              style={{ width: "100%" }}
              name="gender"
              rules={[requireField('Gender')]}
            >
              <Radio.Group
                name="radiogroup"
                defaultValue={1}
                style={styleInputBox}
              >
                <Radio value={'male'}>Male</Radio>
                <Radio value={'female'}>Female</Radio>
              </Radio.Group>
              {/* <Input
                style={styleInputBox}
                placeholder="gender" /> */}
            </Form.Item>
            <Form.Item
              style={{ width: "100%", backgroundColor: '#2A2C36' }}
              name="username"
              rules={[
                requireField('Username'),
                { min: 8, message: 'Username must be min 8 characters' },
              ]}
            >
              <Input
                style={styleInputBox}
                placeholder='username'
              />
            </Form.Item>
            <Form.Item
              style={{ width: "100%", backgroundColor: '#2A2C36' }}
              name="password"
              rules={[requireField('Password')]}
            >
              <Input.Password
                style={styleInputBox}
                placeholder='Password'
              />
            </Form.Item>
          </Row>

          <Row justify='end'>
            <Col style={{ color: '#ffffff', marginBottom: '1rem' }}>
              <Link to="/login">
                Already have an account
              </Link>
            </Col>
          </Row>

          <Row justify="space-around">
            <Col>
              <Button htmlType="submit" type="danger">
                Sign Up
              </Button>
            </Col>
          </Row>

        </Form>
      </Col>
    </Row>

  );
};
export default SignUp


