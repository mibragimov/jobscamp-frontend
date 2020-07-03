import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./containers/sign-up/SignUp";
import Login from "./containers/login/Login";

const Landing = () => <h1>Landing</h1>;

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={Landing} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
