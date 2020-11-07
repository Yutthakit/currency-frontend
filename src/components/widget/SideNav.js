import React, { useState, useEffect, memo } from 'react'
import Axios from 'axios';
import { div } from 'react-router-dom';
import './sideNav.css'
const SideNav = (props) => {
  const [visible, setVisible] = useState(false);
  const [name, nameSet] = useState(null);
  const [balance, nameBalance] = useState(null);
  const [token, settoken] = useState(localStorage.getItem('ACCESS_TOKEN'))
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if(token) {
      callService()
      settoken(localStorage.getItem('ACCESS_TOKEN'))
    } else {
      this.props.history.push("/login")
    }
  })

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
      props.props.history.push("/");
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
            <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/99439973_1580999265386599_6972214934960603136_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGD1S0HzZYcFLKWrOiMB_T4Dx7BbTRnZgcPHsFtNGdmBxyMfaU-8LGo_7hqtqHBZTeQigWwYBO7SjCBwUGIdDjo&_nc_ohc=fj-qCSncjzYAX_rEo0Z&_nc_ht=scontent.fbkk9-2.fna&oh=fac976ef61a25b2771e76ab4a5158811&oe=5FCA3B0C" alt="profile" className="img-profile" />
          </div>
          <div className="nav-side">
            Name : {name}
          </div>
          <div className="nav-side">
            Balance : {balance ? balance : 0}
          </div>
          <div className="nav-side">
          <div
          className="curser"
          onClick={() => redireact(1)}
          role="button"
          >
            deshboard
          </div>
          </div>
          <div className="nav-side">
          <div 
          className="curser"
          onClick={() => redireact(2)}
          role="button"
          >
            Profile
          </div>
          </div>
          <div className="nav-side">
          <div 
          className="curser"
          onClick={() => redireact(3)}
          role="button"
          >
            Deposit
          </div>
          </div>
          <div className="nav-side">
          <div
          className="curser"
          onClick={() => redireact(4)}
          role="button"
          >
          Withdrawal
          </div>
          </div>
          <div className="nav-side">
          <div 
          className="curser"
          onClick={() => redireact(5)}
          role="button"
          >
            History Payment
          </div>
          </div>
          <div className="nav-side">
          <div
          className="curser"
          onClick={() => redireact(6)}
          role="button"
          >
            History Set
          </div>
          </div>
          <div className="nav-side">
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
