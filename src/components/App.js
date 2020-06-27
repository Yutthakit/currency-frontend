import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/changePassword";
import Profile from "./pages/profile";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Route exact path="/ChangePassword" component={ChangePassword} />
        <Route exact path="/Profile" component={Profile} />
        
        <Route exact path="/">
          <Feed />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
