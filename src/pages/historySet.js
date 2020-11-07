import React, { Component } from 'react'
import { Input,Table, Tag, Space, Layout } from "antd";
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment'
import Axios from 'axios';
import SideNav from '../components/widget/SideNav'
const { Header, Content, Footer, Sider } = Layout;

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
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
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

class HistorySet extends Component {

  constructor(props) {
    super(props)
    this.state = {}
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

    Axios.get('/profile', {
      user: this.token
    })
      .then((result) => {
        this.getData(result.data)
      }).catch((err) => {
        console.log(err)
      });
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
                <Table columns={columns} dataSource={data} pagination={false} />
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

export default HistorySet