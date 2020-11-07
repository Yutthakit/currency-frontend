import React from 'react'
import { Row, Col, Form, Input, Button, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};
function ChangePassword() {
    function onFinish(values) {
        console.log(values);
    }
    return (
        <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
            <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
                <Form onFinish={onFinish} {...formItemLayout}>
                    <Avatar
                        style={{ margin: '1rem' }}
                        size={100} icon={<UserOutlined />}
                    />
                    <Row>

                        <Form.Item
                            style={{ width: "100%" }}
                            name="Email"
                            rules={[
                                { required: true, message: "Not a valid email address. Should be your@email.com" },
                            ]}
                        >
                            <Input
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder="Email" />
                        </Form.Item>
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
                        <Form.Item
                            style={{ width: "100%", backgroundColor: '#2A2C36' }}
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                style={{ backgroundColor: '#2A2C36', border: '#2A2C36' }}
                                placeholder='Confirm Password' />
                        </Form.Item>
                    </Row>
                    <Row justify="space-around">
                        <Col>
                            <Button htmlType="submit" type="danger">
                                Change Password
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default ChangePassword