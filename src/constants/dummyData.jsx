import {SDK1,SDK2,SDK3,SDK4,ApiSetting} from '../assets/index';
  import {
    StarFilled,
    CaretDownOutlined
  } from '@ant-design/icons';
import { Select } from 'antd';


// Grid Data
export const GridViewData = [
    {
      key: '1',
      name: "AWSS3Control",
      version: "2018-8-20",
      context: '/awss3control',
      provider: "admin((Provider)",
      type:"HTTP",
      rating: 0,
    },
    {
      key: '2',
      name: "HealthCare-API",
      version: "1",
      context: '/HC',
      provider: "admin((Provider)",
      type:"HTTP",
      rating: 0,
    },
    {
      key: '3',
      name: "PizzaShackAPI",
      version: "1.0.0",
      context: '/pizzashack',
      provider: "admin((Provider)",
      type:"HTTP",
      rating: 0,    
    },
    {
      key: '4',
      name: "PizzaShackAPI",
      version: "1.0.0",
      context: '/pizzashack',
      provider: "admin((Provider)",
      type:"HTTP",
      rating: 0,    
    },
  ];

// List Data
  export const ListViewColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a className='list-link'>{text}</a>,
    
      },
      {
        title: 'Version',
        dataIndex: 'version',
        key: 'version',
      },
      {
        title: 'Context',
        dataIndex: 'context',
        key: 'context',
      },
      {
        title: 'Provider/Business Owner',
        dataIndex: 'provider',
        key: 'provider',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
      },
    ];
  
   export const ListViewData = [
      {
        key: '1',
        name: <div style={{display:"flex",flexWrap:"wrap",alignItems:"center"}}><img src={ApiSetting} alt="ApiSetting" style={{marginRight:"20px"}}/>AWSS3Control</div>,
        version: "2018-8-20",
        context: '/awss3control',
        provider: "admin((Provider)",
        type:"HTTP",
        rating: <div>
          <div>
          <StarFilled style={{color:"#d1d1d1"}} />
          <StarFilled style={{color:"#d1d1d1"}} />
          <StarFilled style={{color:"#d1d1d1"}} />
          <StarFilled style={{color:"#d1d1d1"}} />
          <StarFilled style={{color:"#d1d1d1"}} />
        </div>
        <span className='rating-text'>0/5.0(0users)</span>
        </div>,
      },
      {
        key: '2',
        name: <div style={{display:"flex",flexWrap:"wrap",alignItems:"center"}}><img src={ApiSetting} alt="ApiSetting" style={{marginRight:"20px"}}/>HealthCare-API</div>,
        version: "1",
        context: '/HC',
        provider: "admin((Provider)",
        type:"HTTP",
        rating: <div>
        <div>
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
      </div>
      <span className='rating-text'>0/5.0(0users)</span>
      </div>,
      },
      {
        key: '3',
        name: <div style={{display:"flex",flexWrap:"wrap",alignItems:"center"}}><img src={ApiSetting} alt="ApiSetting" style={{marginRight:"20px"}}/>PizzaShackAPI</div>,
        version: "1.0.0",
        context: '/pizzashack',
        provider: "admin((Provider)",
        type:"HTTP",
        rating: <div>
        <div>
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
      </div>
      <span className='rating-text'>0/5.0(0users)</span>
      </div>,    
      },
    ];

// SubscriptionAPI Modal Data
export const SubscriptionModalApidata = [
    {
      key: "1",
      name: "AWSS3Control",
      version: "2018-08-20",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Bronze"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
    {
      key: "2",
      name: "AWSS3Control",
      version: "1",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Unlimited"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
    {
      key: "3",
      name: "AWSS3Control",
      version: "1",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Unlimited"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
    {
      key: "4",
      name: "AWSS3Control",
      version: "1",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Bronze"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
    {
      key: "5",
      name: "AWSS3Control 5",
      version: "1",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Unlimited"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
    {
      key: "6",
      name: "AWSS3Control 6",
      version: "1",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Unlimited"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
    {
      key: "7",
      name: "AWSS3Control 7",
      version: "1",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Bronze"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
    {
      key: "8",
      name: "AWSS3Control 8",
      version: "1",
      status: (
        <div className="subscripeapi-status">
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="Bronze"
            className="subscribeApi-select"
            options={[
              {
                value: "Bronze",
                label: "Bronze",
              },
              {
                value: "Unlimited",
                label: "Unlimited",
              },
              {
                value: "Label3",
                label: "Label3",
              },
              {
                value: "Label4",
                label: "Label4",
              },
            ]}
          />
          <button className="subscribeApis-btn">Subscribe</button>
        </div>
      ),
    },
  ];

// SDKS Data
export const SDKS = [
    {
      title: "Android",
      img: SDK1,
    },
    {
      title: "Java",
      img: SDK2,
    },
    {
      title: "JavaScript",
      img: SDK3,
    },
    {
      title: "JMeter",
      img: SDK4,
    },
  ];