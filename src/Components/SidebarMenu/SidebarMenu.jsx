import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationMenu,ApiMenu } from "./MenuData";

import {
  HomeFilled,
  AppstoreFilled,
  PieChartFilled,
  AccountBookFilled,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import "./SidebarMenu.css";
const { Sider } = Layout;

// const menu1 = [
//   getItem("Dashboard", "1", <HomeFilled />),
//   getItem("Rate Limiting Policies", "sub1", null, [
//     getItem("Gateways", "3", <AppstoreFilled />),
//     getItem("API Categories", "4", <PieChartFilled />),
//     getItem("Key Managers", "5", <AccountBookFilled />),
//   ]),
//   getItem("Gateways", "6", <AppstoreFilled />),
//   getItem("API Categories", "7", <PieChartFilled />),
//   getItem("Key Managers", "8", <AccountBookFilled />),
//   getItem("Tasks", "sub2", null, [
//     getItem("User Creation", "9", <AppstoreFilled />),
//     getItem("Application Creation", "10", <PieChartFilled />),
//     getItem("Subscription Creation", "11", <AccountBookFilled />),
//     getItem("Subscription Update", "12", <AccountBookFilled />),
//     getItem("Application Registration", "13", <AccountBookFilled />),
//     getItem("API State Change", "14", <AccountBookFilled />),
//     getItem("Api Product State Change", "15", <AccountBookFilled />),
//   ]),
//   getItem("Settings", "sub3", null, [
//     getItem("Application", "17", <AppstoreFilled />),
//     getItem("Scope Arrangements", "18", <PieChartFilled />),
//     getItem("Advanced", "19", <AccountBookFilled />),
//   ]),
// ];

const SidebarMenu = ({
  ChangeComponent,
  selectedComponent,
  handleChangeMenu,
  changeMenu,
}) => {
  const navigate = useNavigate();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const [menu, setMenu] = useState(ApiMenu);
  const getIcon = (key) => (selectedComponent === key ? true : false);
  const menuItems = menu.map(({ key, label, icon, activeIcon, children }) => (
    <Menu.Item key={key} icon={getIcon(key) ? activeIcon : icon}>
      {label}
    </Menu.Item>
  ));


  const onClick = (e) => {
    navigate(e.key);
    ChangeComponent(e.key);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="80">
      <div
        style={{
          padding: "1rem 0",
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
        }}
      >
        Logo
      </div>
      <div>
        <div className="button-div">
          <Button
            size="small"
            className={changeMenu === "api" ? "api-btn active" : "api-btn"}
            onClick={(e) => {
              e.preventDefault();
              handleChangeMenu("api");
              ChangeComponent("");
              setMenu(ApiMenu);
              navigate("/api");
            }}
          >
            Api's
          </Button>
          <Button
            size="small"
            className={
              changeMenu === "application" ? "api-btn active" : "api-btn"
            }
            onClick={(e) => {
              e.preventDefault();
              handleChangeMenu("application");
              setMenu(ApplicationMenu);
              ChangeComponent("");
              navigate("/application");
            }}
          >
            Applications
          </Button>
        </div>
      </div>
      <Menu
        theme="dark"
        onClick={onClick}
        selectedKeys={[selectedComponent]}
        mode="inline"
      >
        {menuItems}
      </Menu>
    </Sider>
  );
};

export default SidebarMenu;
