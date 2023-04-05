import React from "react";
import { Input, Select, theme } from "antd";
import Search from '../../assets/icons/Search.svg'
import SelectDownArrow from '../../assets/icons/selectdown-arrow.svg'
import "./MainNav.css";

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
          <Input
            size="large"
            placeholder="Search anything..."
            prefix={<img src={Search} alt="Search"/>}
            id="searchInput"
            allowClear={true}
            style={{ backgroundColor: "#D9E7EF" }}
          />
        </span>
        <div style={{ display: "flex" }}>
          <img
            src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0="
            alt="user"
            height={50}
            width={50}
            className="userImage"
          />
          <Select
          suffixIcon={<img src={SelectDownArrow} alt="SelectDownArrow" className="ant-select-suffix downarrow-select"/>}
            defaultValue="admin"
            bordered={false}
            className="user-select"
            style={{
              width: 100,
            }}
            options={[
              {
                value: "admin",
                label: "Admin",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
