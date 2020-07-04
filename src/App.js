import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "./containers/sign-up/SignUp";
import Login from "./containers/login/Login";
import Landing from "./components/landing/Landing";
import JobList from "./containers/job-list/JobList";
import JobNew from "./containers/job-new/JobNew";
import ProfileContainer from "./containers/profileContainer/ProfileContainer";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/jobs" component={JobList} />
        <Route path="/jobs/new" component={JobNew} />
        <Route path="/profile" component={ProfileContainer} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
