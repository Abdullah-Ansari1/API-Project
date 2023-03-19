import React from 'react'
import {RightOutlined} from '@ant-design/icons';
const HeaderTitle = ({title,api}) => {
  return (
    <div>
      <div className='header-title'>
        <h2>{title}</h2>
        <hr style={{ margin:"auto 1rem",height:"2rem"}}/>
        <h2 className='title-item-api'>{api}</h2>
        <RightOutlined style={{margin:"auto 1rem"}} size="2rem"/>
        <h2 className='title-item'>{title}</h2>
      </div>
        <hr />
    </div>
  )
}

export default HeaderTitle
