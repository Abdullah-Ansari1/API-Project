import React from 'react'
import {NoDataCard,ApplicationHeaderTitle} from '../../../Components/index';

const Ouath2Tokens = () => {
  return (
    <div>
            <ApplicationHeaderTitle />
      <div className="productionkey-title">
        <h3>Production OAuth2 Keys</h3>
      </div>
      <NoDataCard title="No Key Manager" description="No Key Manager active to generate keys"/>
    </div>
  )
}

export default Ouath2Tokens
