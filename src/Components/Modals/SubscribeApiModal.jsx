import React, { useState } from "react";
import { Table, Modal, Input} from "antd";
import { SearchIcon } from "../../assets";
import {handleSubscribeApiModal} from '../../redux/reducers/handleModalsReducers';
import { useSelector,useDispatch } from 'react-redux';
import {SubscriptionModalApidata} from '../../constants/dummyData';
const SubscribeApiModal = () => {
  const [searchedText, setSearchedText] = useState("");

  const Modals = useSelector(state=>state.modal);
  const {openSubscribeApiModal} = Modals;
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(handleSubscribeApiModal(false));
  };

  //  Column Data
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.version).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Version",
      dataIndex: "version",
    },
    {
      title: "Subscription Status",
      dataIndex: "status",
    },
  ];


  return (
    <div>
      <Modal
      title={<div className="subscribeapi-title">
        <p>Subscribe Api</p>
        <div>
          {" "}
          <Input
            placeholder="Search"
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
            prefix={<SearchIcon style={{opacity:"0.5"}}/>}
            id="searchSubscriptionApi"
            allowClear={true}
            style={{ backgroundColor: "aliceblue", minWidth: "22vw",height:"2.5rem" }}
          />
        </div>
      </div>}
        className="subscripeApi-Modal"
        open={openSubscribeApiModal}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="subscribetable-main">
        <Table
          columns={columns}
          dataSource={SubscriptionModalApidata}
          pagination={{
            pageSize: 3,
          }}
          className="subscribeApis-table"
        />
        </div>
      </Modal>
    </div>
  );
};

export default SubscribeApiModal;

