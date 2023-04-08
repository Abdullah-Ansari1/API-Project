import React from 'react'
import {
  CaretDownOutlined
} from '@ant-design/icons';
import DocumentDownload from '../../../assets/icons/document-download.svg'
import Printer from '../../../assets/icons/printer.svg'
import TaskSquare from '../../../assets/icons/task-square.svg'
import Grid from '../../../assets/icons/grid.svg'
import List from '../../../assets/icons/list.svg'
import Code from '../../../assets/icons/code.svg'

import { Select } from 'antd';
import './MenuHeader.css'
const MenuHeader = ({ handleView, view }) => {
  return (
    <div className="Menu-Header-Container">
      <div className="Menu-Header-Inner">
        <img src={Code} alt="Code"/>
        <div className='total-api'>
          <h3 className='h3-medium'>APIs</h3>
          <span className='totalapi-span'>Total:32</span>
        </div>
      </div>

      <div className="Menu-Header-Inner">
        {view === "ListView" && <>
          <img src={DocumentDownload} alt="DocumentDownload" className="ListViewIcons"/>
          <img src={Printer} alt="Printer" className="ListViewIcons"/>
          <img src={TaskSquare} alt="TaskSquare" className="ListViewIcons"/>
        <div>
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="All"
            style={{
              width: 134,
            }}
            className="main-header"
            options={[
              {
                value: 'All',
                label: 'All',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
            ]}
          />
        </div>
        </>
        }
        
        
        <img src={List} alt="List" className='ViewChangeIcon' onClick={(e) => { e.preventDefault(); handleView("ListView") }}/>
        <img src={Grid} alt="Grid" className='ViewChangeIcon' onClick={(e) => { e.preventDefault(); handleView("GridView") }}/>
      </div>
    </div>
  )
}

export default MenuHeader
