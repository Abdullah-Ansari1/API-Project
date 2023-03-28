import React from "react";
import {
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { RiEdit2Fill } from 'react-icons/ri';
import { ImBin } from 'react-icons/im';
const HeaderTitle = ({ apikey }) => {
  return (
    <div>
      <div className="header-title-application">
        <div>
          <p style={{ color: "#16375a" }} className="applicationheader-title">Test Application</p>
          <p className="subscription-total">0 Subscription</p>
        </div>
        {!apikey && <div className="headerapplication-icons">
        <RiEdit2Fill className="headerapplication-icon"/>
        <ImBin className="headerapplication-icon"/>
        </div>}
      </div>
      <hr />
    </div>
  );
};

export default HeaderTitle;
