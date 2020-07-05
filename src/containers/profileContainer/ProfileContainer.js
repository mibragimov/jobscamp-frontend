import React from "react";
import { connect } from "react-redux";
import { uploadAvatar } from "../../actions/profileActions";

import Profile from "../../components/profile/Profile";
import NavContainer from "../NavContainer/NavContainer";

function ProfileContainer({ onUploadLogo, _id }) {
  return (
    <div>
      <NavContainer />
      <Profile onUploadLogo={onUploadLogo} _id={_id} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    _id: state.auth._id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUploadLogo: (file) => dispatch(uploadAvatar(file)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
