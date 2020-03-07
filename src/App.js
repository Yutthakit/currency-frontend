import './App.css';
import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { Layout, Row, Col } from 'antd';
import Signup from './Pasges/Signup';
import Login from './Pasges/Login';

const { Header, Footer, Content } = Layout;

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          Header
        </Header>
        <Content >
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    )
  }
}
