import React from "react";
import { Table } from "antd";
import { columns, data } from "./TableData";
import Code from "../../../assets/icons/code.svg";
import "./ListView.css";
const ListView = () => {
  return (
    <>
      <div className="Table">
        <Table
          columns={columns}
          dataSource={data}
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
