import React, { useState } from "react";
import { Table ,Menu,Checkbox,Dropdown,FlexBox} from "antd";
import { ListViewColumns, ListViewData } from "../../../constants/dummyData";
// import { CodeIcon } from "../../../assets";
import "./ListView.css";
const ListView = () => {
  const [indexing,setIndexing]=useState()
  const [colListViewColumns,setListViewColumns]=useState(ListViewColumns)
const showCols=["Name","Version","Context","Provider/Business Owner","Type","Rating"]
const onChange = (e,index) => {
 

  if (!e.target.checked) {
   let cpycolListViewColumns= [...colListViewColumns]
   let cpyindexcolListViewColumns= [...colListViewColumns]

   cpycolListViewColumns.splice(index,1)
    setListViewColumns(cpycolListViewColumns)
  }
  // else{
  //   colListViewColumns.splice(index,0,ListViewColumns[index])
  //   setListViewColumns(colListViewColumns)
  // }
};
const menu = (
  <Menu>
  { ListViewColumns.map((col,index)=>{
   return(
    <Menu.Item onChange={(e)=>onChange(e,index)}>
    <Checkbox defaultValue={true}>{col?.key}</Checkbox>
  </Menu.Item>
   )
})} 
  </Menu>
);
  return (
    <>
      <div className="Table">
     
      <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
   
        <Table
          columns={colListViewColumns}
          dataSource={ListViewData}
          className="listview-table"
          pagination={false}
        />
      </div>
      {/* When there is no Api then we run the following code currently its commented */}

      {/* <div className="noApi-content">
        <img src={Code} alt="code" />
        <p className="noApi-title">No APIs Available</p>
        <p className="noApi-des">There is no API to Display right now</p>
      </div> */}
    </>
  );
};

export default ListView;
