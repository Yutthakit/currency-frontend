import React, { Component } from 'react'
import { Input, Button, Form } from 'antd'
import  Axios  from 'axios'

class Login extends Component {

  

  handelSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received value of form', values)
        Axios.post('http://localhost:8080/login', {username: values.username, password: values.password});
      }
    })
  }


  render() {

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 6,
        },
      },
    };

    return (

      <Form {...formItemLayout} onSubmit={this.handelSubmit}>
        <Form.Item label="Username"> {
          getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'The input is not valid User!',
              }
            ]
          })(<Input />)
        } </Form.Item>
        <Form.Item label="Password" hasFeedback> {
          getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password'
              }
            ]
          })(<Input />)
        } </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="link" htmlType="submit">
            Forgot Password
          </Button>
        </Form.Item>

      </Form>
    )
  }
}

export default Form.create()(Login)
