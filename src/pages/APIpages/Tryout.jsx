import React, { useState } from "react";
import {ApiHeaderTitle} from '../../Components/index';
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import Lock from '../../assets/icons/lock.svg'
import { Input, Select,Radio } from "antd";
const TryOut = () => {
  const [radioCheck, setRadioCheck] = useState("OAuth");
  const handleSecurityType=(e)=>{
    setRadioCheck(e.target.value);
  }
  return (
    <div>
      <ApiHeaderTitle title={"Try Out"} api={"AWSS3Control"} />
      <div className="tryout-header">
        <div className="tryout-left-header">
          <h3 className="tryout-activeTile">Security</h3>
          <p className="tryout-type">Security Type</p>
          <div className="security-keys">
    <Radio.Group onChange={handleSecurityType} value={radioCheck} buttonStyle={"solid"}>
      <Radio value={"OAuth"}>OAuth</Radio>
      <Radio value={"APIKey"}>API Key</Radio>
      <Radio value={"Basic"}>Basic</Radio>
    </Radio.Group>
          </div>
        </div>
        <div className="tryout-right-header">
          <div>
            <label htmlFor="AccessToken" className="access-tokenlabel">
              Access Token
            </label>
            <Input.Password
              placeholder="Authorized Bearer"
              name="AccessToken"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <p className="access-tokenhint">Enter Access Token</p>
          </div>
          <button className="GetKey-btn">Get Test Key</button>
        </div>
      </div>
      <div>
        <h5 className="gateway-title">Gateway</h5>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div className="select-main">
            <label htmlFor="select-menu" className="gateway-selectlabel">
              Environment
            </label>
            <div className="gateway-select">
              <Select
                suffixIcon={
                  <CaretDownOutlined className="ant-select-suffix downarrow-select" />
                }
                defaultValue="Default"
                id="select-menu-default"
                className="tryout-select"
                // style={{
                //     width: "20rem",
                // }}
                options={[
                  {
                    value: "Label1",
                    label: "Label1",
                  },
                  {
                    value: "Label2",
                    label: "Label2",
                  },
                  {
                    value: "Label3",
                    label: "Label3",
                  },
                  {
                    value: "Label4",
                    label: "Label4",
                  },
                ]}
              />
            </div>
            <p className="access-tokenhint">Please Enter an Environment</p>
          </div>
          <p style={{ fontWeight: "500" }}>Postman Collection</p>
          <p style={{ fontWeight: "500" }}>OpenAI</p>
        </div>
      </div>
      <hr />
      <div className="select-main">
        <h5 className="server-title">Server</h5>
        <div className="server-select">
          <Select
            suffixIcon={
              <CaretDownOutlined className="ant-select-suffix downarrow-select" />
            }
            defaultValue="https"
            id="select-menu-default"
            className="tryout-select"
            // style={{
            //     width: "18rem",
            // }}
            options={[
              {
                value: "Get",
                label: "Get",
              },
              {
                value: "Put",
                label: "Put",
              },
              {
                value: "Post",
                label: "Post",
              },
              {
                value: "Delete",
                label: "Delete",
              },
              {
                value: "Patch",
                label: "Patch",
              },
            ]}
          />
        </div>
      </div>

      <div className="default-main">
        <h2 className="default-heading">Default</h2>
        <div className="bars get">
          <span>
            <button className="btn-server-calls">Get</button>{"/*"}
          </span>
         <img src={Lock} alt="Lock" />
        </div>
        <div className="bars put">
          <span>
            <button className="btn-server-calls">Put</button>{"/*"}
          </span>
         <img src={Lock} alt="Lock" />
        </div>
        <div className="bars post">
          <span>
            <button className="btn-server-calls">Post</button>{"/*"}
          </span>
         <img src={Lock} alt="Lock" />
        </div>
        <div className="bars delete">
          <span>
            <button className="btn-server-calls">Delete</button>{"/*"}
          </span>
          <img src={Lock} alt="Lock" />
        </div>
        <div className="bars patch">
          <span>
            <button className="btn-server-calls">Patch</button>{"/*"}
          </span>
         <img src={Lock} alt="Lock" />
        </div>
      </div>
    </div>
  );
};

export default TryOut;
