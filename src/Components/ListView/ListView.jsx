import React from 'react'
import { Table} from 'antd';
import {columns, data} from './TableData';
import './ListView.css'
const ListView = () => {
  return (
    <div className="Table">
    <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ListView
