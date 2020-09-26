import React, { useState, useEffect } from 'react'
import { Row, Col, Drawer } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [token, settoken] = useState(localStorage.getItem('ACCESS_TOKEN'))
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    console.log(token);
    settoken(localStorage.getItem('ACCESS_TOKEN'))
  })

  const logOut = () => {
    settoken(localStorage.removeItem('ACCESS_TOKEN'))
    window.location="/"
  }

  return (
    <div>
      <Row justify="space-between" style={{ backgroundColor: 'black' }}>
        <Col span={4} style={{ color: 'white' }}>
        <Link to="/">
          <img style={{ width: '3.8rem' }} src="https://images.assetsdelivery.com/compings_v2/asmati/asmati1703/asmati170310496.jpg" alt="currency" />
        </Link>
        </Col>
        <Col span={8} style={{ color: 'white' }}></Col>
        <Col span={2} style={{ color: 'white' }}></Col>
        <Col span={2} style={{ color: 'white' }}>
          <AiOutlineMenu fontSize={16} onClick={showDrawer} />
        </Col>
      </Row>
      <Drawer
        title="Currency Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {token !== null ?
          <>
            <Link to="/ShowStatus">
              <p>Account</p>
            </Link>
            <Link to="/Profile">
              <p>Profile</p>
            </Link>
            <div
            onClick={logOut}
            >
              <p>Log Out</p>
            </div>
          </>
          :
          <>
            <Link to="/login">
        <p>Login</p>
            </Link>
            <Link to="/signup">
              <p>Register</p>
            </Link>
          </>
        }

      </Drawer>
    </div>
  )

}

export default Navbar
