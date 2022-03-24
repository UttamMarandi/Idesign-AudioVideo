import React from "react";
import Header from "../SingleComponents/Header";
import "../css/ProfileEdit.css";
import HeaderBold from "../SingleComponents/HeaderBold";

const ProfileEdit = () => {
  return (
    <div className="profile_edit_page">
      <Header />
      <div className="body">
        <div className="inner_body">
          <div className="left_div">Hello</div>
          <div className="right_div">
            <HeaderBold startText="Hello" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
