import React from "react";
import { Input, Select, theme } from "antd";
import {SelectDownArrowIcon,SearchIcon,ChangePasswordIcon,LogoutIcon} from '../../assets/index';
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
            prefix={<SearchIcon/>}
            id="searchInput"
            allowClear={true}
            className="mainnav-Search"
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
          suffixIcon={<SelectDownArrowIcon className="ant-select-suffix downarrow-select"/>}
            value={"admin"}
            bordered={false}
            placement={"bottomRight"}
            dropdownMatchSelectWidth={200}
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
                value: "changePassword",
                label: <div className="changePassword-Select"><ChangePasswordIcon/>Change password</div>,
              },
              {
                value: "logout",
                label: <div className="logout-Select"><LogoutIcon/>Logout</div>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
