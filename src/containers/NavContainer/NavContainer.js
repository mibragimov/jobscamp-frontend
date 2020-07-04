import React from "react";
import { connect } from "react-redux";
import Navigation from "../../components/navigation/Navigation";

function NavContainer({ isAuthenticated }) {
  return (
    <div>
      <Navigation isAuth={isAuthenticated} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(NavContainer);
