import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/changePassword";
import Profile from "./pages/profile";
import ResetPassword from "./pages/ResetPassword"
import ShowStatus from "./pages/showStatus";
import Home from "./pages/home";
import Status from "./pages/status";
import { Layout } from "antd";
import Navbar from './pages/navbar'
const { Header } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header  style={{backgroundColor:'black'}}>
          <Navbar />
        </Header>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/ForgotPassword" component={ForgotPassword} />
          <Route exact path="/ChangePassword" component={ChangePassword} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/resetPassword/:prams" component={ResetPassword} />
          <Route exact path="/ShowStatus" component={ShowStatus} />
          <Route exact path="/status/:params" component={Status} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
