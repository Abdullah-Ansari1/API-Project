import React from "react";
import { Table } from "antd";
import { columns, data } from "./TableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
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

      {/* <div className='noApi-content'>        
<FontAwesomeIcon icon={faCode} className="API-icon"/>
<p className='noApi-title'>No APIs Available</p>
<p className='noApi-des'>There is no API to Display right now</p>
</div> */}
    </>
  );
};

export default ListView;
