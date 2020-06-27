import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./login.css"

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

function Login() {
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
                { required: true, message: "Email or Password is not correct" },
              ]}
            >
               <h1 style={{color:'#ffffff'}}>Login</h1>
              <Input 
              style={{backgroundColor: '#2A2C36', border: '#2A2C36'}}
              placeholder="Email"/>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              style={{ width: "100%", backgroundColor: '#2A2C36'  }}
              name="password"
              rules={[
                { required: true, message: "Email or Password is not correct" },
              ]}
            >
              <Input.Password 
              style={{backgroundColor: '#2A2C36', border: '#2A2C36'}}
              placeholder='Password'
              />
            </Form.Item>
          </Row>
          <Row justify='end'>
            <Col style={{color:'#ffffff' , marginBottom: '1rem'}}>
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
              <Button htmlType="submit" type="danger">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
