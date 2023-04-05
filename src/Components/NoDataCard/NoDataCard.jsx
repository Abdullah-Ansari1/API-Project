import React from 'react'
import INFO from '../../assets/icons/info.svg'
const NoDataCard = ({title,description}) => {
  return (
    <div className="noComment-main">
    <div>
      <img src={INFO} alt="INFO" />
      <span>{title}</span>
    </div>
    <span>{description}</span>
  </div>
  )
}

export default NoDataCard
