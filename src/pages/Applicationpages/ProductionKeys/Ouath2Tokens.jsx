import React from 'react'
import HeaderTitle from '../../../Components/ApplicationComponents/HeaderTitle'
import NoDataCard from '../../../Components/NoDataCard/NoDataCard'

const Ouath2Tokens = () => {
  return (
    <div>
            <HeaderTitle />
      <div className="productionkey-title">
        <h3>Production OAuth2 Keys</h3>
      </div>
      <NoDataCard title="No Key Manager" description="No Key Manager active to generate keys"/>
    </div>
  )
}

export default Ouath2Tokens
