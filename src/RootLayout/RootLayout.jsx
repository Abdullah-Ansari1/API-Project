import React,{useState} from "react";
import {DeleteModal,GenerateKeyModal,SidebarMenu,SubscribeApiModal,SubscriptionUpdateModal,MainNav} from '../Components/index';
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content, Footer } = Layout;


const RootLayout = () => {
  const [changeMenu, setChangeMenu] = useState("api");
  const [selectedComponent, setSelectedComponent] = useState("");
  const ChangeComponent = (item) => {
    setSelectedComponent(item);
  };
  const handleChangeMenu = (value) => {
    setChangeMenu(value);
  };
  return (
    <>
    <DeleteModal/>
    <GenerateKeyModal/>
    <SubscriptionUpdateModal/>
    <SubscribeApiModal/>
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
