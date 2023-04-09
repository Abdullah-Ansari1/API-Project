import {SDK1,SDK2,SDK3,SDK4,ApiSetting} from '../assets/index';
  import {
    StarFilled
  } from '@ant-design/icons';

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