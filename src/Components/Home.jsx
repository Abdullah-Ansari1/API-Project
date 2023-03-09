import React, { useState } from 'react'
import { Layout, theme } from 'antd';
import ListView from './ListView/ListView';
import MainNav from './MainNav/MainNav';
import MenuHeader from './MenuHeader/MenuHeader';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import GridView from './GridView/GridView';
const { Content } = Layout;
const Home = () => {
  const [view, setView] = useState("ListView");

const handleView=(value)=>{
  setView(value);
}
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>

      {/* SideBar Menu */}
      <SidebarMenu />
      <Layout>
        {/* Main Nav Component*/}
        <MainNav />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* Second Header*/}
          <MenuHeader handleView={handleView} view={view}/>
          {/* Grid and List Component */}
          {view === "ListView" ?
            <ListView /> : view === "GridView" ?
              <GridView /> : null
          }
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
