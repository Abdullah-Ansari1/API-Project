import React, { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import { Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
const SandboxApikey = ({handleGenearteKeyModal}) => {
    const [radioCheck, setRadioCheck] = useState("None");
  return (
    <div>
    <HeaderTitle IpAddress={true} />
    <div className="productionkey-title">
        <h3>Production API Key</h3>
      </div>
      <div className="main-apikey">
        <div className="keys-div">
          <p>Key Restriction</p>
          <div className="key-manage">
            <div className="radio-div">
              <div
                className="key-restriction-radio"
                onClick={(e) => {
                  setRadioCheck("None");
                }}
              >
                <input
                  name="None"
                  type="radio"
                  className="None radio-btn"
                  value={radioCheck}
                  checked={radioCheck === "None"}
                  onChange={(e) => {
                    setRadioCheck("None");
                  }}
                />
                <label
                  htmlFor="None"
                  className="radio-label-res"
                  style={
                    radioCheck === "None"
                      ? { color: "#14142A" }
                      : { color: "#6E7191" }
                  }
                >
                  None
                </label>
              </div>
              <div
                className="key-restriction-radio"
                onClick={(e) => {
                  setRadioCheck("IpAddress");
                }}
              >
                <input
                  name="IpAddress"
                  type="radio"
                  className="IpAddress radio-btn"
                  value={radioCheck}
                  checked={radioCheck === "IpAddress"}
                  onChange={(e) => {
                    setRadioCheck("IpAddress");
                  }}
                />
                <label
                  htmlFor="IpAddress"
                  className="radio-label-res"
                  style={
                    radioCheck === "IpAddress"
                      ? { color: "#14142A" }
                      : { color: "#6E7191" }
                  }
                >
                  IP Address
                </label>
              </div>
              <div
                className="key-restriction-radio"
                onClick={(e) => {
                  setRadioCheck("Referrers");
                }}
              >
                <input
                  name="Referrers"
                  type="radio"
                  className="Referrers radio-btn"
                  value={radioCheck}
                  checked={radioCheck === "Referrers"}
                  onChange={(e) => {
                    setRadioCheck("Referrers");
                  }}
                />
                <label
                  htmlFor="Referrers"
                  className="radio-label-res"
                  style={
                    radioCheck === "Referrers"
                      ? { color: "#14142A" }
                      : { color: "#6E7191" }
                  }
                >
                  HTTP Referrers(Web Sites)
                </label>
              </div>
            </div>
          </div>
        </div>

        {radioCheck === "IpAddress" ? (
          <div className="restrictionDescription">
            <div className="IpaddressExample">
              <p className="head">Example of IP Address allowed</p>
              <p>
                Specify one IPV4 or IPV6 or a subnet using CIDR notation
              </p>
              <div className="exampleip-div">
                <p>Example:<span>{" "}192.168.1.2,{" "}  152.12 .0.0/13{" "}   2002: eb8:2 <span className="or-2">or</span></span>{" "} {" "}
                <span>1001: ab8::/44</span> </p>{" "}

              </div>
            </div>
          </div>
        ) : radioCheck === "Referrers" ? (
          <div className="restrictionDescription">
            {" "}
            <div className="IpaddressExample">
              <p className="head">Example of URLs allowed to restrict websites</p>
              <div className="exampleip-div">
                <p>A specify URL with an exact path: <span>www.example.com/path </span></p>{" "}
                
              </div>
              <div className="exampleip-div">
                <p>
                  Any URL in a Single Subdomain, Using a wildcard asterisk:{" "}
                  <span>sub.example.com </span>
                </p>{" "}
                
              </div>
              <div className="exampleip-div-2">
                <p>
                  Any Subdomain or path URLs in a single domain , Using wildcard
                  Asterisk:<span>example.com </span>{" "}
                </p>
                
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {radioCheck === "IpAddress" ? (
        <div className="apikey-input inputkeys-handle">
          <Input placeholder="IP Address" className="apikey-addinput" />
          <span>
            <PlusCircleFilled className="apikey-icon" />
          </span>
        </div>
      ) : radioCheck === "Referrers" ? (
        <div className="apikey-input refer-input inputkeys-handle">
          <Input placeholder="Refer" className="apikey-addinput" />

          <span>
            <PlusCircleFilled className="apikey-icon" />
          </span>
        </div>
      ) : null}
      <div className="apikeyGenerate">
        <button className="apikeyGenerate-btn" onClick={()=>handleGenearteKeyModal(true)}>Generate Key</button>
        <p>
          Use the generate key button to generate a self contained JWT token
        </p>
      </div>
</div>
  )
}

export default SandboxApikey
