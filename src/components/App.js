import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/changePassword";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Route exact path="/ChangePassword" component={ChangePassword} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
