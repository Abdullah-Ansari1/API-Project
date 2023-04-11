import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationMenu,ApiMenu } from "./MenuData";
import { Layout, Menu, Button } from "antd";
import "./SidebarMenu.css";
const { Sider } = Layout;

const SidebarMenu = ({
  ChangeComponent,
  selectedComponent,
  handleChangeMenu,
  changeMenu,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
let pathName = window.location.pathname;
if (pathName.includes("/api")) {
  handleChangeMenu("api");
  setMenu(ApiMenu);
  ChangeComponent(pathName);
}
if (pathName.includes("/application")) {
  handleChangeMenu("application");
  setMenu(ApplicationMenu);
  ChangeComponent(pathName);
}
else{
  handleChangeMenu("api");
  setMenu(ApiMenu);
}
  }, []);


  const navigate = useNavigate();  
  const [menu, setMenu] = useState('');

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
            {windowWidth>991?"Applications":"App.."}
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
