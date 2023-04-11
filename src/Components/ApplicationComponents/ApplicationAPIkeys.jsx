import React, { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import { Input,Radio } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {handleGenerateKeyModal, handleSubscriptionUpdateModal} from '../../redux/reducers/handleModalsReducers';
const ApplicationAPIkeys = ({title}) => {
    const [radioCheck, setRadioCheck] = useState("None");
const dispatch = useDispatch();
const handleKeyRestriction=(e)=>{
  setRadioCheck(e.target.value);
}
  return (
    <div>
      <HeaderTitle IpAddress={true} />
      <div className="productionkey-title">
        <h3>{title} API Key</h3>
      </div>
      <div className="main-apikey">
        <div className="keys-div">
          <p>Key Restriction</p>
          <div className="key-manage">
      <Radio.Group onChange={handleKeyRestriction} value={radioCheck} buttonStyle={"solid"}>
      <Radio value={"None"}>None</Radio>
      <Radio value={"IpAddress"}>IP Address</Radio>
      <Radio value={"Referrers"}>HTTP Referrers(Web Sites)</Radio>
    </Radio.Group>
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
        <button className="apikeyGenerate-btn" onClick={()=>{dispatch(handleGenerateKeyModal(true))}}>Generate Key</button>
        <p>
          Use the generate key button to generate a self contained JWT token
        </p>
      </div>
    </div>
  )
}

export default ApplicationAPIkeys
