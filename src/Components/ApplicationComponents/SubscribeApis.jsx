import React, { useState } from "react";
import { Table, Modal, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  CaretDownOutlined
} from '@ant-design/icons';
const SubscribeApis = ({ openSubscribeModal, handleSubscribeApi }) => {
  const handleCancel = () => {
    handleSubscribeApi(false);
  };
  const [searchedText, setSearchedText] = useState("");

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

  //   Row Data
  const data = [
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
            prefix={<SearchOutlined style={{ opacity: "0.2",fontSize:"1.3rem"}} />}
            id="searchSubscriptionApi"
            allowClear={true}
            style={{ backgroundColor: "aliceblue", minWidth: "22vw",height:"2.5rem" }}
          />
        </div>
      </div>}
        className="subscripeApi-Modal"
        open={openSubscribeModal}
        onCancel={handleCancel}
        footer={null}
      >

        <div className="subscribetable-main">
        <Table
          columns={columns}
          dataSource={data}
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

export default SubscribeApis;
