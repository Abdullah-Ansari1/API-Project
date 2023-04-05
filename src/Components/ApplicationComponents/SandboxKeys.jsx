import React from 'react'
import HeaderTitle from "./HeaderTitle";
import NoDataCard from '.././NoDataCard/NoDataCard';
const SandboxKeys = () => {
  return (
    <div>
            <HeaderTitle />
      <div className="productionkey-title">
        <h3>Sandbox OAuth2 Key</h3>
      </div>
      <NoDataCard title="No Key Manager" description="No Key Manager active to generate keys"/>
    </div>
  )
}

export default SandboxKeys
