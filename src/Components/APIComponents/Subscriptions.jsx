import React from 'react'
import HeaderTitle from './HeaderTitle'
import { Select, Table } from 'antd';
import {
  SettingFilled,
  StarFilled
} from '@ant-design/icons';
const columns = [
  {
    title: 'Application Name',
    dataIndex: 'applicationname',
    key: 'applicationname',
  },
  {
    title: 'Throtting Teir',
    dataIndex: 'tier',
    key: 'tier',
  },
  {
    title: 'Application Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];
const data = [
  {
    key: '1',
    applicationname:"Default Application",
    tier: "Bronze",
    status: 'UNBLOCKED',
    actions: <div style={{display:"flex", gap:"1rem"}}>
      <span>
      <StarFilled/>  SANDBOX KEYS
      </span>
      <span>
      <StarFilled/>  PROD KEYS
      </span>
      <span>
      <StarFilled/>
        UNSUBSCRIBE</span>
      <span>
      <StarFilled/>
        MANAGE APP</span>
    </div>,
  },
  {
    key: '2',
    applicationname:"Test Application",
    tier: "Bronze",
    status: 'UNBLOCKED',
    actions: <div style={{display:"flex",gap:"1rem"}}>
    <span>
    <StarFilled/>  SANDBOX KEYS
    </span>
    <span>
    <StarFilled/>  PROD KEYS
    </span>
    <span>
    <StarFilled/>
      UNSUBSCRIBE</span>
    <span>
    <StarFilled/>
      MANAGE APP</span>
  </div>,
  },
];
const Subscriptions = () => {
  return (
    <div>
      <HeaderTitle title={"Subscriptions"} api={"AWSS3Control"} />
      <div>
        <p className='subscription-title'>Subscription & Key Generation Wizard</p>
      </div>
      <p className='subscription-info'>An application is primarily used to decouple the consumer from the APIs. it allow you to generate and use a single Key for multiple APIs and subscribe multiple times to a single API with different SLA levels.</p>
      <h2 style={{ color: "#253d55" }}>Subscribe</h2>
      <div className='subscription-select'>
        <p>Application</p>

        <div className='select-main'>
          {/* <p>Bussiness Plan</p> */}
          <label htmlFor="select-menu">Bussiness Plan</label>
          <Select
            defaultValue="Menu Label"
            id='select-menu'
            style={{
              width: "13rem"
            }}
            options={[
              {
                value: 'Label1',
                label: 'Label1',
              },
              {
                value: 'Label2',
                label: 'Label2',
              },
              {
                value: 'Label3',
                label: 'Label3',
              },
              {
                value: 'Label4',
                label: 'Label4',
              },
            ]}
          />
        </div>
      </div>
      <button className='subscribe-btn'>Subscribe</button>
      <h2 style={{ color: "#253d55" }}>Subscriptions</h2>
    <Table columns={columns} dataSource={data} pagination={false} className="subscription-table"/>
    </div>
  )
}

export default Subscriptions
