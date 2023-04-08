import React from "react";
import HeaderTitle from "../../Components/ApplicationComponents/HeaderTitle";
import { Table } from "antd";
import SubscribeApis from "../../Components/ApplicationComponents/SubscribeApis";
import Edit from "../../assets/icons/edit.svg";
import Trash from "../../assets/icons/trash.svg";
const Subscription = ({
  handleSubscribeApi,
  openSubscribeModal,
  handleDeleteModal,
  handleUpdateSubscriptionModal,
}) => {
  const columns = [
    {
      title: "API",
      dataIndex: "api",
    },
    {
      title: "Lifecycle state",
      dataIndex: "lifecycleState",
    },
    {
      title: "business plan",
      dataIndex: "businessplan",
    },
    {
      title: "Subscription status",
      dataIndex: "subscriptionstatus",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  //   Row Data
  const data = [
    {
      key: "1",
      api: "Test Application",
      lifecycleState: "Admin",
      businessplan: "20 Per Min",
      subscriptionstatus: "Active",
      action: (
        <div className="edit-delete-application">
          <img
            src={Edit}
            alt="Edit"
            className="myapplication-edit-icon"
            onClick={() => {
              handleUpdateSubscriptionModal(true);
            }}
          />
          <img
            src={Trash}
            alt="Delete"
            className="myapplication-delete-icon"
            onClick={() => {
              handleDeleteModal(true);
            }}
          />
        </div>
      ),
    },
    {
      key: "2",
      api: "Test User",
      lifecycleState: "Admin",
      businessplan: "20 Per Min",
      subscriptionstatus: "Active",
      action: (
        <div className="edit-delete-application">
          <img
            src={Edit}
            alt="Edit"
            className="myapplication-edit-icon"
            onClick={() => {
              handleUpdateSubscriptionModal(true);
            }}
          />
          <img
            src={Trash}
            alt="Delete"
            className="myapplication-delete-icon"
            onClick={() => {
              handleDeleteModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <SubscribeApis
        openSubscribeModal={openSubscribeModal}
        handleSubscribeApi={handleSubscribeApi}
      />
      <HeaderTitle />
      <div style={{ margin: "1rem 0" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <h3>Subscription Management</h3>
          <span
            onClick={() => handleSubscribeApi(true)}
            className="link-subscribe"
          >
            Subscribe APIs
          </span>
        </div>
      </div>
      <div className="tset-data">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="subscriptionapi-table"
          //   scroll={{
          //     x: '100vw',
          //   }}
        />
      </div>
    </div>
  );
};

export default Subscription;
