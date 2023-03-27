import React from 'react'
import HeaderTitle from './HeaderTitle'
import {PlusCircleFilled,InfoCircleFilled } from '@ant-design/icons';

const Comments = () => {
  return (
    <div>
<HeaderTitle title={"Comment"} api={"AWSS3Control"} />
      <p className='comments-count'>0 Comments</p>
      <div className='add-main'><PlusCircleFilled className='add-icon'/><span>Write a comment</span></div>
      <div className='noComment-main'>
        <div><InfoCircleFilled className='info-icon'/><span>No Comment Yet</span></div>
        <span>No Comment available for this API yet</span>
      </div>
    </div>
  )
}

export default Comments
