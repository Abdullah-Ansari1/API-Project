import React, { useState } from "react";
import {
  HomeFilled,
  AppstoreFilled,
  PieChartFilled,
  AccountBookFilled,
} from "@ant-design/icons";
import OverViewIcon from '../../assets/icons/overview-icon.svg'
import OverViewActiveIcon from '../../assets/icons/overview-icon.svg'

import subscriptionIcon from '../../assets/icons/subscription-icon.svg'
import apiKeyIcon from '../../assets/icons/apikey-icon.svg'
import OuathTokenIcon from '../../assets/icons/OuathToken-icon.svg'
import SandboxKeyIcon from '../../assets/icons/sandboxkey-icon.svg'
import ProductionKeysIcon from '../../assets/icons/productionKeys-icon.svg'
import commentsIcon from '../../assets/icons/comments.svg'
import SdkIcon from '../../assets/icons/sdk.svg'
import documentIcon from '../../assets/icons/document.svg'
import { Layout, Menu, Button } from "antd";
import "./SidebarMenu.css";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const menu1 = [
  getItem("Dashboard", "1", <HomeFilled />),
  getItem("Rate Limiting Policies", "sub1", null, [
    getItem("Gateways", "3", <AppstoreFilled />),
    getItem("API Categories", "4", <PieChartFilled />),
    getItem("Key Managers", "5", <AccountBookFilled />),
  ]),
  getItem("Gateways", "6", <AppstoreFilled />),
  getItem("API Categories", "7", <PieChartFilled />),
  getItem("Key Managers", "8", <AccountBookFilled />),
  getItem("Tasks", "sub2", null, [
    getItem("User Creation", "9", <AppstoreFilled />),
    getItem("Application Creation", "10", <PieChartFilled />),
    getItem("Subscription Creation", "11", <AccountBookFilled />),
    getItem("Subscription Update", "12", <AccountBookFilled />),
    getItem("Application Registration", "13", <AccountBookFilled />),
    getItem("API State Change", "14", <AccountBookFilled />),
    getItem("Api Product State Change", "15", <AccountBookFilled />),
  ]),
  getItem("Settings", "sub3", null, [
    getItem("Application", "17", <AppstoreFilled />),
    getItem("Scope Arrangements", "18", <PieChartFilled />),
    getItem("Advanced", "19", <AccountBookFilled />),
  ]),
];

const menu2 = [
  getItem("Overview", "overview",<img src={OverViewIcon} alt="Overview"/>),
  getItem("Subscriptions", "subscription",  <img src={subscriptionIcon} alt="subscriptionIcon"/>),
  getItem("Try Out", "tryout", <img src={SandboxKeyIcon} alt="SandboxKeyIcon"/>),
  getItem("Comments", "comments", <img src={commentsIcon} alt="commentsicon"/>),
  getItem("Documentation", "documentation",<img src={documentIcon} alt="documentIcon"/>),
  getItem("SDKs", "sdks", <img src={SdkIcon} alt="sdk"/>),
];
const menu3 = [
  getItem("Overview", "overview",<img src={OverViewIcon} alt="Overview"/>),
  getItem("Production Keys", "productionkeys", <img src={ProductionKeysIcon} alt="ProductionKeysIcon"/>),
  getItem("OAuth2 Tokens", "productionOauth2tokens", <img src={OuathTokenIcon} alt="OuathTokenIcon"/>),
  getItem("API Keys", "productionapikeys", <img src={apiKeyIcon} alt="apiKeyIcon"/>),
  getItem("Sandbox Keys", "sandboxkeys", <img src={SandboxKeyIcon} alt="SandboxKeyIcon"/>),
  getItem("Oauth2 Tokens", "sandboxOauth2tokens", <img src={OuathTokenIcon} alt="OuathTokenIcon"/>),
  getItem("API Keys", "sandboxapikeys", <img src={apiKeyIcon} alt="apiKeyIcon"/>),
  getItem("Subscription", "subscription", <img src={subscriptionIcon} alt="subscriptionIcon"/>),
];
const SidebarMenu = ({
  ChangeComponent,
  selectedComponent,
  handleChangeMenu,
  changeMenu,
}) => {
  const [menu, setMenu] = useState(menu2);
  const onClick = (e) => {
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
              ChangeComponent("overview");
              setMenu(menu2);
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
              ChangeComponent("");
              setMenu(menu3);
            }}
          >
            {" "}
            Applications
          </Button>
        </div>
      </div>
      <Menu
        theme="dark"
        onClick={onClick}
        selectedKeys={[selectedComponent]}
        mode="inline"
        items={menu}
      />
    </Sider>
  );
};

export default SidebarMenu;
