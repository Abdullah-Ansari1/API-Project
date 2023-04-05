import React from "react";
import HeaderTitle from "./HeaderTitle";
import DescIcon from '../../assets/icons/Description-icon.svg';
import Bar from '../../assets/icons/doublebar.svg';
import Checkbox from '../../assets/icons/checkbox.svg';
import User from '../../assets/icons/user.svg';
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
      icon: <img src={Bar} alt="Bar" />,
      textContent: "20 Per Min",
    },
    {
      key:3,
      title: "Workflow status",
      icon: <img src={Checkbox} alt="Checkbox" style={{outline:"1px solid",outlineOffset:"2px", borderRadius:"2px"}}/>,
      textContent: "Approved",
    },
    {
      key:4,
      title: "Application owner",
      icon: <img src={User} alt="User" />,
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
