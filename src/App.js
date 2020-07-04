import React, { useEffect } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthState } from "./actions/authActions";

// App imports
import SignUp from "./containers/sign-up/SignUp";
import Login from "./containers/login/Login";
import Landing from "./components/landing/Landing";
import JobList from "./containers/job-list/JobList";
import JobNew from "./containers/job-new/JobNew";
import ProfileContainer from "./containers/profileContainer/ProfileContainer";
import Logout from "./containers/logout/Logout";

function App({ onAuth, isAuthenticated }) {
  const history = useHistory();

  console.log(isAuthenticated);

  useEffect(() => {
    onAuth(history);
  }, [onAuth, history]);

  let routes = (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route exact path="/jobs" component={JobList} />
        <Route exact path="/jobs/new" component={JobNew} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return <div className="container">{routes}</div>;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (history) => dispatch(checkAuthState(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
