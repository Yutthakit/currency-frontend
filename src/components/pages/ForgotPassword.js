import React from 'react'
import { Row, Col, Form, Input, Button } from "antd";
const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};
function ForgotPassword() {
    function onFinish(values) {
        console.log(values);
    }
    return (
        <Row style={{ height: "100vh" , backgroundColor: '#1E1F28'}} justify="center" align="middle" >
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
        <Form onFinish={onFinish} {...formItemLayout}>
          <Row>
           
            <Form.Item
              style={{ width: "100%" }}
              name="Email"
              rules={[
                { required: true, message: "Not a valid email address. Should be your@email.com" },
              ]}
            >
               <h1 style={{color:'#ffffff'}}>Forgot Password</h1>
               <p style={{color:'#ffffff'}}>Please,enter your Email address. your will receive a link to create a new password view email</p> 
              <Input 
              style={{backgroundColor: '#2A2C36', border: '#2A2C36'}}
              placeholder="Email"/>
            </Form.Item>
          </Row>
          <Row justify="space-around">
            <Col>
              <Button htmlType="submit" type="danger">
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
    )
}

export default ForgotPassword