import React,{useState} from "react";
import SidebarMenu from "../Components/SidebarMenu/SidebarMenu";
import { Layout } from "antd";
import MainNav from "../Components/MainNav/MainNav";
import { Outlet } from "react-router-dom";
const { Content, Footer } = Layout;
const RootLayout = () => {
  const [changeMenu, setChangeMenu] = useState("api");
  const [selectedComponent, setSelectedComponent] = useState(
    changeMenu === "api" ? "overview" : ""
  );
  const ChangeComponent = (item) => {
    setSelectedComponent(item);
  };
  const handleChangeMenu = (value) => {
    setChangeMenu(value);
  };
  return (
    <>
      <SidebarMenu
        ChangeComponent={ChangeComponent}
        selectedComponent={selectedComponent}
        changeMenu={changeMenu}
        handleChangeMenu={handleChangeMenu}
      />
      <Layout>
        <MainNav />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: "white",
          }}
        >
          <Outlet />
        </Content>
        <Footer className="Footer">
          © 2023 ZeroCodeAPI Admin Panel | Powered by API Swagger
        </Footer>
      </Layout>
    </>
  );
};

export default RootLayout;
