import React, { useState } from 'react'
import { Layout, theme } from 'antd';
import ListView from '../Components/APIComponents/ListView/ListView';
import MainNav from '../Components/MainNav/MainNav';
import MenuHeader from '../Components/MenuHeader/MenuHeader';
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import GridView from '../Components/APIComponents/GridView/GridView';
import Subscriptions from '../Components/APIComponents/Subscriptions';
const { Content } = Layout;
const Home = () => {
  const [view, setView] = useState("ListView");
  const [selectedComponent, setSelectedComponent] = useState("subscription");
  const handleView = (value) => {
    setView(value);
  }
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const ChangeComponent=(item)=>{
setSelectedComponent(item);
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>

      {/* SideBar Menu */}
      <SidebarMenu ChangeComponent={ChangeComponent}/>
      <Layout>
        {/* Main Nav Component*/}
        <MainNav />
        <Content
          style={{
            // margin: '0px 16px',
            padding: 24,
            minHeight: 280,
            background: "white",
          }}
        >
          {
            selectedComponent==="overview"&&
            <div>
              {/* Second Header*/}
              <MenuHeader handleView={handleView} view={view} />
              {/* Grid and List Component */}
              {view === "ListView" ?
                <ListView /> : view === "GridView" ?
                  <GridView /> : null
              }
            </div>
          }
          {
            selectedComponent==="subscription"&&
            <div>
              {/* Second Header*/}
            <Subscriptions/>
            </div>
          }

        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
