import React from "react";
import { Table } from "antd";
import { ListViewColumns, ListViewData } from "../../../constants/dummyData";
// import { CodeIcon } from "../../../assets";
import "./ListView.css";
const ListView = () => {
  return (
    <>
      <div className="Table">
        <Table
          columns={ListViewColumns}
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
