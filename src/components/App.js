import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import ChangePassword from "../pages/changePassword";
import Profile from "../pages/profile";
import ResetPassword from "../pages/ResetPassword"
import History from "../pages/history"
import HistorySet from "../pages/historySet"
import Deposit from "../pages/Deposit";
import Home from "../pages/home";
import Status from "../pages/status";
import Withdraw from "../pages/withdraw"
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/ForgotPassword" component={ForgotPassword} />
          <Route exact path="/ChangePassword" component={ChangePassword} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/History" component={History} />
          <Route exact path="/historySet" component={HistorySet} />
          <Route exact path="/resetPassword/:params" component={ResetPassword} />
          <Route exact path="/Deposit" component={Deposit} />
          <Route exact path="/withdraw/:value" component={Withdraw} />
          <Route exact path="/status/:params" component={Status} />
          <Route exact path="/:params" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
