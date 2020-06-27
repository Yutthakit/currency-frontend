import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};

function SignUp() {
    function onFinish(values) {
        console.log(values);
    }

    return (
        <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
            <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
                <Form onFinish={onFinish} {...formItemLayout}>
                    <Row>
                        <Form.Item
                            style={{ width: "100%" }}
                            name="name"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <h1 style={{ color: '#ffffff' }}>Sign Up</h1>
                            <Input
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder="name"
                                 />
                        </Form.Item>
                        <Form.Item
                            style={{ width: "100%" }}
                            name="surname"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <Input
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder="surname" />
                        </Form.Item>
                        <Form.Item
                            style={{ width: "100%" }}
                            name="Email"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <Input
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            style={{ width: "100%" }}
                            name="tel"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <Input
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder="tel" />
                        </Form.Item>
                        <Form.Item
                            style={{ width: "100%" }}
                            name="brithday"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <Input
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder="brithday" />
                        </Form.Item>
                        <Form.Item
                            style={{ width: "100%" }}
                            name="gender"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <Input
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder="gender" />
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item
                            style={{ width: "100%", backgroundColor: '#2A2C36' }}
                            name="password"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <Input.Password
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
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
}

export default SignUp
