import React, { Component } from 'react'
import { Input,Table, Tag, Space, Layout } from "antd";
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment'
import Axios from 'axios';
import SideNav from '../components/widget/SideNav'
const { Header, Content, Sider } = Layout;

const columns = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: action => (
      <>
        {action.map(tag => {
          let color = 'green';
          if (tag === 'Deposit') {
            color = 'geekblue';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];

class History extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.data = []
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
      this.callHistory()
    } else (
      this.props.history.push("/login")
    )
  }

  callService = () => {
    Axios.get('/profile', {
      user: this.token
    })
      .then((result) => {
        this.getData(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }

  callHistory = () => {
    Axios.get('/history-transaction', {
      user: this.token
    })
      .then((result) => {
        this.getDataHistory(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }

  getDataHistory = (value) => {
    if (value) {
      this.setState({
        data: value
      })
    }
  }
  
  getData = (dataUser) => {
    if (dataUser) {
      this.setState({
        name: dataUser.name,
        surname: dataUser.surname,
        email: dataUser.email,
        tel: dataUser.tel,
        gender: dataUser.gender,
        birth_date: moment(dataUser.birth_date).format("MM-DD-YYYY"),
      })
    }
  }


  onFinish = values => {
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
    const { name, surname, email, tel, gender, birth_date } = this.state


    if (name !== 'name') {
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
    } else {
      return 'name'
    }
  }
}

export default History