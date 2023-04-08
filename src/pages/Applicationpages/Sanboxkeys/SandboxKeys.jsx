import React from 'react'
import {NoDataCard,ApplicationHeaderTitle} from '../../../Components/index';

const SandboxKeys = () => {
  return (
    <div>
            <ApplicationHeaderTitle />
      <div className="productionkey-title">
        <h3>Sandbox OAuth2 Key</h3>
      </div>
      <NoDataCard title="No Key Manager" description="No Key Manager active to generate keys"/>
    </div>
  )
}

export default SandboxKeys
