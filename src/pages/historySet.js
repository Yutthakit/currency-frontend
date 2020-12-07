import React, { Component } from 'react'
import { Table, Tag, Space, Layout } from "antd";
import moment from 'moment'
import Axios from 'axios';
import SideNav from '../components/widget/SideNav'
const { Header, Content, Sider } = Layout;

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // eslint-disable-next-line
    render: text => <a>{text}</a>,
  },
  {
    title: 'Value Invest',
    dataIndex: 'value_invest',
    key: 'value_invest',
  },
  {
    title: 'Actual value',
    dataIndex: 'actual_value',
    key: 'actual_value',
  },
  {
    title: 'Market Value',
    dataIndex: 'market_value',
    key: 'market_value'
  },
  {
    title: 'Tags',
    key: 'percent',
    dataIndex: 'percent',
    render: percent => (
      <>
        {percent > 0 ?
            <Tag color="green">
              {percent}
            </Tag>
        :
        <Tag color="red">
              {percent}
            </Tag>
        }
      </>
    ),
  },
  {
    title: 'value per unit',
    dataIndex: 'value_per_unit',
    key: 'value_per_unit'
  },
  
];

class HistorySet extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.data = data
    this.state.Avatar = 'name'
    this.state.name = 'name'
    this.state.surname = 'name'
    this.state.email = 'name'
    this.state.tel = 'name'
    this.state.birth_date = 'name'
    this.state.gender = 'name'
    this.state.disabled = true
    this.token = localStorage.getItem('ACCESS_TOKEN')
  }
  componentDidMount() {
    if (this.token) {
      this.callService()
    } else (
      this.props.history.push("/login")
    )
  }

  callService = () => {

    Axios.get('/profitloss/profile', {
      user: this.token
    })
      .then((result) => {
        this.getData(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }

  getData = (value) => {
    const filter = value.filter(item => item.percent !== "NaN" )
    if (filter) {
      this.setState({
        data: filter
      })
    }
  }


  onFinish = values => {
    console.log(values)
    Axios.put('/profile', {
      user: this.token,
      name: values.firstname,
      surname: values.surname,
      tel: values.tel
    })
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err);
      })
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  changeDisabled = () => {
    this.setState({
      disabled: false
    })
  }

  render() {
    const { name } = this.state


    // if (name !== 'name') {
      return (
        <div>
          <Layout>
          <Sider>            
            <SideNav props={this.props} />
          </Sider>
            <Layout>
            <Header>
                <h2 className="color-white">
                History
                </h2>
              </Header>
              <Content>
                <Table columns={columns} dataSource={this.state.data} pagination={false} />
              </Content>
            </Layout>
          </Layout>
        </div>
        
      )
    // } else {
    //   return 'name'
    // }
  }
}

export default HistorySet