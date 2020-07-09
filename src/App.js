import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// App imports
import SignUp from "./containers/sign-up/SignUp";
import Login from "./containers/login/Login";
import Landing from "./components/landing/Landing";
import JobList from "./containers/job-list/JobList";
import JobNew from "./containers/job-new/JobNew";
import ProfileContainer from "./containers/profileContainer/ProfileContainer";
import Logout from "./containers/logout/Logout";
import MyJobs from "./containers/my-jobs/MyJobs";
import JobEdit from "./containers/job-edit/JobEdit";

function App({ isAuthenticated }) {
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
        <Route exact path="/my-jobs" component={MyJobs} />
        <Route path="/my-jobs/:id" component={JobEdit} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className="container">
      {routes}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(App);
