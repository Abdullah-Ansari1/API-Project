import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  OverViewIcon,
  OverViewActiveIcon,
  SubscriptionIcon,
  SubActiveIcon,
  ApiKeyIcon,
  ApiKeyActiveIcon,
  OuathTokenIcon,
  OuathTokenActiveIcon,
  SandboxKeyIcon,
  SandboxKeyActiveIcon,
  ProductionKeysIcon,
  ProductionKeysActiveIcon,
  CommentIcon,
  CommentActiveIcon,
  SdkIcon,
  SdkActiveIcon,
  DocumentIcon,
  DocumentActiveIcon,
} from "../../assets/index";

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
  // const ApiMenu = [
  //     getItem(
  //       "Overview",
  //       "/api/overview",
  //       <img src={activeIcon} alt="Overview" />
  //     ),
  //     getItem(
  //       "Subscriptions",
  //       "/api/subscription",
  //       <img src={subscriptionIcon} alt="subscriptionIcon" />
  //     ),
  //     getItem(
  //       "Try Out",
  //       "/api/tryout",
  //       <img src={SandboxKeyIcon} alt="SandboxKeyIcon" />
  //     ),
  //     getItem(
  //       "Comments",
  //       "/api/comments",
  //       <img src={commentsIcon} alt="commentsicon" />
  //     ),
  //     getItem(
  //       "Documentation",
  //       "/api/documentation",
  //       <img src={documentIcon} alt="documentIcon" />
  //     ),
  //     getItem("SDKs", "/api/sdks", <img src={SdkIcon} alt="sdk" />),
  //   ];
  const ApiMenu = [
    {
      key: "/api/overview",
      label: "Overview",
      icon: <OverViewIcon />,
      activeIcon: <OverViewActiveIcon />,
      children: null,
    },
    {
      key: "/api/subscription",
      label: "Subscriptions",
      icon: <SubscriptionIcon />,
      activeIcon: <SubActiveIcon />,
      children: null,
    },
    {
      key: "/api/tryout",
      label: "Try Out",
      icon: <SandboxKeyIcon />,
      activeIcon: <SandboxKeyActiveIcon />,
      children: null,
    },
    {
      key: "/api/comments",
      label: "Comments",
      icon: <CommentIcon />,
      activeIcon: <CommentActiveIcon />,
      children: null,
    },
    {
      key: "/api/documentation",
      label: "Documentation",
      icon: <DocumentIcon />,
      activeIcon: <DocumentActiveIcon />,
      children: null,
    },
    {
      key: "/api/sdks",
      label: "SDKs",
      icon: <SdkIcon />,
      activeIcon: <SdkActiveIcon />,
      children: null,
    },
  ];

  const ApplicationMenu = [
    {
      key: "/application/overview",
      label: "Overview",
      icon: <OverViewIcon />,
      activeIcon: <OverViewActiveIcon />,
      children: null,
    },
    {
      key: "/application/productionkeys",
      label: "Production Keys",
      icon: <ProductionKeysIcon />,
      activeIcon: <ProductionKeysActiveIcon />,
      children: null,
    },
    {
      key: "/application/productionOauth2tokens",
      label: "OAuth2 Tokens",
      icon: <OuathTokenIcon />,
      activeIcon: <OuathTokenActiveIcon />,
      children: null,
    },
    {
      key: "/application/productionapikeys",
      label: "API Keys",
      icon: <ApiKeyIcon />,
      activeIcon: <ApiKeyActiveIcon />,
      children: null,
    },
    {
      key: "/application/sandboxkeys",
      label: "Sandbox Keys",
      icon: <SandboxKeyIcon />,
      activeIcon: <SandboxKeyActiveIcon />,
      children: null,
    },
    {
      key: "/application/sandboxOauth2tokens",
      label: "Oauth2 Tokens",
      icon: <OuathTokenIcon />,
      activeIcon: <OuathTokenActiveIcon />,
      children: null,
    },
    {
      key: "/application/sandboxapikeys",
      label: "API Keys",
      icon: <ApiKeyIcon />,
      activeIcon: <ApiKeyActiveIcon />,
      children: null,
    },
    {
      key: "/application/subscription",
      label: "Subscription",
      icon: <SubscriptionIcon />,
      activeIcon: <SubActiveIcon />,
      children: null,
    },
  ];

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
