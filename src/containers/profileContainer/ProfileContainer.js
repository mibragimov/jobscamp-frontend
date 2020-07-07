import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  uploadAvatar,
  getProfile,
  deleteAccount,
} from "../../actions/profileActions";

import Profile from "../../components/profile/Profile";
import NavContainer from "../NavContainer/NavContainer";

function ProfileContainer({
  onUploadLogo,
  _id,
  onGetProfile,
  profile,
  isLoading,
  onDeleteAccount,
  uploading,
}) {
  const [file, setFile] = useState(undefined);
  const [imgHash, setImgHash] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    onGetProfile();
  }, [onGetProfile]);

  const handleUploadFile = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("logo", file);
      await onUploadLogo(formData);
      setImgHash(Date.now());
    } else {
      toast.warn("Please, upload a file");
    }
  };
  const handleSelectFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <NavContainer />
      <Profile
        onUploadLogo={handleUploadFile}
        _id={_id}
        profile={profile}
        isLoading={isLoading}
        onDeleteAccount={onDeleteAccount}
        onSelectFile={handleSelectFile}
        file={file}
        showModal={showModal}
        onShowModal={setShowModal}
        imgHash={imgHash}
        uploading={uploading}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    _id: state.auth._id,
    profile: state.profile.profileInfo,
    isLoading: state.profile.loading,
    uploading: state.profile.uploading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUploadLogo: (file) => dispatch(uploadAvatar(file)),
    onGetProfile: () => dispatch(getProfile()),
    onDeleteAccount: (history) => dispatch(deleteAccount(history)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
