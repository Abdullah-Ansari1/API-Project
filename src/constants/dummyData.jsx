import {SDK1,SDK2,SDK3,SDK4,ApiSetting, Edit, Trash} from '../assets/index';
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
        index:0,
        key: 'name',
        render: (text) => <a className='list-link'>{text}</a>,
       active:true
      },
      {
        title: 'Version',
        index:1,
        dataIndex: 'version',
        key: 'version',
        active:true
      },
      {
        title: 'Context',
        index:2,
        dataIndex: 'context',
        key: 'context',
        active:true
      },
      {
        title: 'Provider/Business Owner',
        index:3,
        dataIndex: 'provider',
        key: 'provider',
        active:true
      },
      {
        title: 'Type',
        index:4,
        dataIndex: 'type',
        key: 'type',
        active:true
      },
      {
        title: 'Rating',
        index:5,
        dataIndex: 'rating',
        key: 'rating',
        active:true
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

  // API Overview tags
  export const Tags=[
    {
      title:"Tags 1"
    },
    {
      title:"Tags 2"
    },
    {
      title:"Tags 3"
    },
    {
      title:"Tags 4"
    },
    {
      title:"Tags 5"
    },
    {
      title:"Tags 6"
    },
    {
      title:"Tags 7"
    },
  ]

<<<<<<< Updated upstream
  // API ApiCategories
  export const ApiCategoriesTableHead = [
    {
      title: 'Category Name',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Number of APIs',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
    },
  ];

  // export const ApiCategoriesTableBody=[
  //   {
  //     key:"1",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"2",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"3",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"4",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"5",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"6",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"7",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"8",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"9",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  //   {
  //     key:"10",
  //     category:"Rest",
  //     description:"Rest",
  //     number:"1",
  //     actions:(
  //       <div className="main-api-Category">
  //         <Edit className='edit-apiCategory'/>
  //         <Trash className='trash-apiCategory'/>
  //       </div>
  //     ),
  //   },
  // ]
=======

export  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];
>>>>>>> Stashed changes
