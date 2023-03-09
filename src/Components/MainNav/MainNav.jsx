import React from 'react'
import {
  SearchOutlined,
} from '@ant-design/icons';
import { Input, Select, theme } from 'antd';
import './MainNav.css'

const MainNav = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <div className="Main-Nav-Header">
        <span>
          <Input size="large" placeholder="Search anything..." prefix={<SearchOutlined style={{ opacity: "0.2" }} />} id="searchInput" allowClear={true} style={{ backgroundColor: "aliceblue" }} />
        </span>
        <div style={{ display: "flex" }}>
          <img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" alt="user" height={50} width={50} className="userImage"/>
          <Select
            defaultValue="lucy"
            bordered={false}
            style={{
              width: 120,
              top: "8px"
            }}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default MainNav
