import React from "react";
import Edit from "../../assets/icons/edit.svg";
import Trash from "../../assets/icons/trash.svg";
const HeaderTitle = ({ apikey }) => {
  return (
    <div>
      <div className="header-title-application">
        <div>
          <p style={{ color: "#16375a" }} className="applicationheader-title">Test Application</p>
          <p className="subscription-total">0 Subscription</p>
        </div>
        {!apikey && <div className="headerapplication-icons">
        <img src={Edit} alt="Edit" className="headerapplication-icon"/>
        <img src={Trash} alt="Trash" className="headerapplication-icon"/>
        </div>}
      </div>
      <hr />
    </div>
  );
};

export default HeaderTitle;
