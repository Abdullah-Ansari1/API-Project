import React from "react";
import HeaderTitle from "./HeaderTitle";
import { FileTextFilled } from "@ant-design/icons";
import DescIcon from '../../assets/icons/Description-icon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faUser,
  faSquareCheck
} from "@fortawesome/free-solid-svg-icons";
const OverviewApplication = () => {
  const Data = [
    {
      key:1,
      title: "Description",
      icon: <img src={DescIcon} alt="desc" />,
      textContent: "My Mobile Application",
    },
    {
      key:2,
      title: "Business Plan",
      icon: <FontAwesomeIcon icon={faBarsProgress} className="icon-overview"/>,
      textContent: "20 Per Min",
    },
    {
      key:3,
      title: "Workflow status",
      icon: <FontAwesomeIcon icon={faSquareCheck}  className="icon-overview"/>,
      textContent: "Approved",
    },
    {
      key:4,
      title: "Application owner",
      icon: <FontAwesomeIcon icon={faUser} className="icon-overview"/>,
      textContent: "Admin",
    },
  ];
  return (
    <div>
      <HeaderTitle />
      <div className="overviewContent">
        {Data.map((item) => {
          return (
            <div key={item.key}>
              <div className="content-item" style={item.key==1?{ marginTop: "10px" }:null}>
                <div className="icon-item">
                  {item.icon}
                  <p className="overview-title">{item.title}</p>
                </div>
                <div className="textcontent">{item.textContent}</div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewApplication;
