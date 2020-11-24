
import React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { Row, Col, Layout } from 'antd';
import { Link } from "react-router-dom";
import SideNav from '../components/widget/SideNav'
const { Header, Content, Sider } = Layout;

export default function status(props) {
  const show = props.match.params.params
  return (
    <div>
      <Layout>
          <Sider>            
            <SideNav props={props} />
          </Sider>
          <Layout>
          <Header style={{ backgroundColor: '#1E1F28' }}>
              <h2 style={{ color: 'white' }}>Payment Method</h2>
          </Header>
          <Content>
          {show === 'payment' ?
      <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
      <h2 style={{color: 'white'}}>Payment Succesfully</h2>
      <h2 style={{color: 'white'}}>Done!</h2>
        <div style={{backgroundColor: 'green' , borderRadius: '100%', width: '22rem' , height: '22rem'}}>
          <AiFillCheckCircle color="#1E1F28" fontSize={350} style={{verticalAlign: 'middle'}} />
        </div>
        <Link to="/">
        <button>Home Page</button>
        </Link>
      </Col>
    </Row>
      :
      null
      }
      {show === 'success' ?
      <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
      <h2 style={{color: 'white'}}>Withdrawal Succesfully</h2>
      <h2 style={{color: 'white'}}>Done!</h2>
        <div style={{backgroundColor: 'green' , borderRadius: '100%', width: '22rem' , height: '22rem'}}>
          <AiFillCheckCircle color="#1E1F28" fontSize={350} style={{verticalAlign: 'middle'}} />
        </div>
        <Link to="/">
        <button>Home Page</button>
        </Link>
      </Col>
    </Row>
      :
      null
      }
      {show === 'fail' ?
      <Row style={{ height: "100vh", backgroundColor: '#1E1F28' }} justify="center" align="middle" >
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
      <h2 style={{color: 'white'}}>Withdrawal Failed !</h2> 
          <div style={{backgroundColor: 'red' , borderRadius: '100%', width: '22rem' , height: '22rem'}}>
            <AiFillCloseCircle color="#1E1F28" fontSize={350} style={{verticalAlign: 'middle'}} />
          </div>
        <Link to="/">
        <button>Try Again</button>
        </Link>
      </Col>
    </Row>
      :
      null
      }
          </Content>
          </Layout>
        </Layout>
     
    </div>
  )
}
