import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './sideNav.css'
import avatar from '../widget/image/avatars.jpg'
const SideNav = (props) => {
  const [name, nameSet] = useState(null);
  const [balance, nameBalance] = useState(null);
  const [token, settoken] = useState(localStorage.getItem('ACCESS_TOKEN'))
  // eslint-disable-next-line
  useEffect(() => {
    if(token) {
      callService()
      settoken(localStorage.getItem('ACCESS_TOKEN'))
    } else {
      this.props.history.push("/login")
    }
  }, [balance])


  const callService = () => {
    Axios.get('/profile', {
      user: token
    })
      .then((result) => {
        getData(result.data)
      }).catch((err) => {
        settoken(localStorage.removeItem('ACCESS_TOKEN'))
      window.location="/login"
      });
  }

  const getData = (dataUser) => {
    if (dataUser.name) {
      nameSet(dataUser.name)
      nameBalance(dataUser.Balance)
    } else {
      settoken(localStorage.removeItem('ACCESS_TOKEN'))
      window.location="/login"
    }
  }

  const logOut = () => {
    settoken(localStorage.removeItem('ACCESS_TOKEN'))
    window.location="/login"
  }

  const redireact = (value) => {
    if (value === 1) {
      props.props.history.push(`/${balance}`)
    } else if (value === 2) {
      props.props.history.push("/Profile");
    } else if (value === 3) {
      props.props.history.push("/Deposit");
    } else if (value === 4) {
      props.props.history.push(`/withdraw/${balance}`);
    } else if (value === 5) {
      props.props.history.push("/History");
    } else if (value === 6) {
      props.props.history.push("/historySet");
    }
  }

  return (
    <div>
      <div>
        <div className="margin-space">
          <div>
            <img src={avatar} alt="profile" className="img-profile" />
          </div>
          <div className="nav-side">
            Name : {name}
          </div>
          <div className="nav-side">
            Balance : {balance ? balance.toLocaleString() : 0} THB
          </div>
          <div className="nav-side border-nav">
          <div
          className="curser"
          onClick={() => redireact(1)}
          role="button"
          >
            deshboard
          </div>
          </div>
          <div className="nav-side border-nav">
          <div 
          className="curser"
          onClick={() => redireact(2)}
          role="button"
          >
            Profile
          </div>
          </div>
          <div className="nav-side border-nav">
          <div 
          className="curser"
          onClick={() => redireact(3)}
          role="button"
          >
            Deposit
          </div>
          </div>
          <div className="nav-side border-nav">
          <div
          className="curser"
          onClick={() => redireact(4)}
          role="button"
          >
          Withdrawal
          </div>
          </div>
          <div className="nav-side border-nav">
          <div 
          className="curser"
          onClick={() => redireact(5)}
          role="button"
          >
            History Payment
          </div>
          </div>
          <div className="nav-side border-nav">
          <div
          className="curser"
          onClick={() => redireact(6)}
          role="button"
          >
            History Set
          </div>
          </div>
          <div className="nav-side border-nav">
          <div 
          className="curser"
          onClick={logOut}
          role="button"
          >
            Log out
          </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default React.memo(SideNav)
