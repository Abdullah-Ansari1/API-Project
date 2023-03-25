import React from 'react'
import HeaderTitle from "./HeaderTitle";
import {InfoCircleFilled } from '@ant-design/icons';
const Subscription = () => {
  return (
    <div>
            <HeaderTitle />
      <div className="productionkey-title">
        <div style={{display:"flex",gap:"2rem", alignItems:"center"}}>
        <h3>Sandbox OAuth2 Key</h3> 
        <span>
        Subscribe APIs 
        </span>
        </div>
      </div>
      <div className="noComment-main">
        <div>
          <InfoCircleFilled style={{ color: "#34adf4" }} />
          <span>No Key Manager</span>
        </div>
        <span>No Key Manager active to generate keys</span>
      </div>
    </div>
  )
}

export default Subscription
