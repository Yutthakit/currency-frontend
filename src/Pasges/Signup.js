import React, { Component } from 'react'
import { Row, Col, Form, Input, Icon, Button, Select } from 'antd'
import Axios from 'axios'

const { Option } = Select;

class Signup extends Component {
  sumbitForm = () => {
    Axios.post('http://localhost:8080/', {
      username: 'gogle',
      password: 'password'
    })
  }

  // compareToFirstPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('Two passwords that you enter is inconsistent!');
  //   } else {
  //     callback();
  //   }
  // };

  // validateToNextPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // };


  handleSubmit = (e) => {
    e.preventDefault()
    console.log("google")
    this.props.form.validateFields((err, values) => {
      console.log(err)
      if (!err) {
        console.log('Received value of form', values)
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
      <Form {...formItemLayout} onSubmit={this.handleSubmit} >
        <Form.Item label='Username'>{
          getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username',
              },
            ],
          })(<Input />)
        }</Form.Item>
        <Form.Item label='Password' > {
          getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password'
              },
              // {
              //   validator: this.validateToNextPassword,
              // }
            ],
          })(<Input />)
        } </Form.Item>
        <Form.Item label='Confirmed Password' > {
          getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please input your password'
              },
              // {
              //   validator: this.compareToFirstPassword,
              // },
            ],
          })(<Input />)
        } </Form.Item>
        <Form.Item label="Name" >{
          getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input name'
              },
            ],
          })(<Input />)
        }</Form.Item>
        <Form.Item label="Surname" >{
          getFieldDecorator('Surname', {
            rules: [
              {
                required: true,
                message: 'Please input surname'
              },
            ],
          })(<Input />)
        }</Form.Item>
        <Form.Item label="Gender" >{
          getFieldDecorator('gender', {
            rules: [
              {
                required: true,
                message: 'Please input name'
              },
            ],
          })(<Select style={{ width: 70 }}>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>)
        }</Form.Item>
        <Form.Item label="E-mail" >{
          getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input email'
              },
            ],
          })(<Input />)
        }</Form.Item>
        <Form.Item  {...tailFormItemLayout} >
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button htmlType="submit">
            Already have an Account
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(Signup)
   // <Row type='flex' justify='center'>
      //   <Col xs={24} sm={22} md={18} lg={14}>
      //     <Row type='flex' justify='center'>
      //       <Col>
      //         <h1> Sign Up </h1>
      //         <Row >
      //           <Col> Username : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Col> Password : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Col> Confirmed Password : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Col> E-mail : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Col> Name : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Col> Surname : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Col> Tel : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Col style={{ marginBottom: '10px' }}> Gender : <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please Input" /></Col>
      //           <Button type="primary" block>
      //             Login
      //           </Button>
      //           <Button type="link" block>
      //             Already have an Account
      //           </Button>
      //         </Row>
      //       </Col>
      //     </Row>
      //   </Col>
      // </Row >