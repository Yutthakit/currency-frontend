import React from 'react'
import { Row, Col, Form, Input, Button, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};
function Profile() {
    function onFinish(values) {
        console.log(values);
    }
    return (
        <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
            <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
                <Form onFinish={onFinish} {...formItemLayout}>
                    <Avatar
                        style={{margin:'1rem'}}
                        size={100} icon={<UserOutlined />}
                    />
                    <Row>
                    <Form.Item
                            style={{ width: "100%" }}
                            name="name"
                            rules={[
                                { required: true, message: "Email or Password is not correct" },
                            ]}
                        >
                            <h1 style={{ color: '#ffffff' }}>USER ID</h1>
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
                    <Row justify="space-around">
                        <Col>
                            <Button htmlType="submit" type="danger">
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default Profile