import React, { Component } from 'react'
import ChartBTC from "../components/widget/chartBTC";
import ChartETH from "../components/widget/chartETH";
import ChartXRP from "../components/widget/chartXRP";
import ChartLTC from "../components/widget/chartLTC";
import SideNav from '../components/widget/SideNav'
import { Layout,Row, Col, Button, Tabs } from "antd";
import "./home.css"

const { TabPane } = Tabs;
const { Header, Content, Sider } = Layout;

 class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('ACCESS_TOKEN'),
    }
  }

  componentDidMount() {
   if(this.state.token === null){
    this.props.history.push('/login')
   }
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider>            
            <SideNav
            props={this.props}
            />
          </Sider>
            <Layout>
              <Header>
                <h2 className="color-white">
                Deshboard
                </h2>
              </Header>
              <Content>
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="BTC" key="1">
                <div className="width-chart">
                  <ChartBTC/>
                </div>
                </TabPane>
                <TabPane tab="LTC" key="2">
                <div className="width-chart">
                  <ChartLTC/>
                </div>
                </TabPane>
                <TabPane tab="ETH" key="3">
                <div className="width-chart">
                  <ChartETH/>
                </div>
                </TabPane>
                <TabPane tab="XRP" key="4">
                <div className="width-chart">
                  <ChartXRP/>
                </div>
                </TabPane>
              </Tabs>
                <Row>
                  <Col span={6}>
                    <div 
                    
                    >
                    <Button className="topic"
                    onClick={() => this.showchart('1')}
                    >
                      
                    </Button>
                    </div>
                  </Col>
                  <Col span={6}>
                    <h2 className="topic">
                       
                    </h2>
                  </Col>
                  <Col span={6}>
                    <h2 className="topic">
                      
                    </h2>
                  </Col>
                  <Col span={6}>
                    <h2 className="topic">
                       
                    </h2>
                  </Col>
                </Row>
              </Content>
            </Layout>
        </Layout>
    </div>

    )
  }
}
export default Home