import React from 'react'
import {
  UnorderedListOutlined,
  SlackOutlined,
  PrinterFilled,
  FileFilled,
  ControlFilled,
} from '@ant-design/icons';
import { Select } from 'antd';
import './MenuHeader.css'
const MenuHeader = ({ handleView, view }) => {
  return (
    <div className="Menu-Header-Container">
      <div className="Menu-Header-Inner">
        <ControlFilled className="API-icon"/>
        <div className='total-api'>
          <span className='api-title'>APIs</span>
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>Total:32</span>
        </div>
      </div>

      <div className="Menu-Header-Inner">
        {view === "ListView" && <>
          <FileFilled className="ListViewIcons" />
          <PrinterFilled className="ListViewIcons" />
          <FileFilled className="ListViewIcons" />
        </>
        }
        <div>
          <Select
            defaultValue="All"
            style={{
              width: 120,
            }}
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
        <UnorderedListOutlined className={view !== "ListView" ? "ViewChangeIcon viewChangeInactive" : "ViewChangeIcon"} onClick={(e) => { e.preventDefault(); handleView("ListView") }} />
        <SlackOutlined className={view !== "GridView" ? "ViewChangeIcon viewChangeInactive" : "ViewChangeIcon"} onClick={(e) => { e.preventDefault(); handleView("GridView") }} />
      </div>
    </div>
  )
}

export default MenuHeader
