import React from "react";
import {ApplicationHeaderTitle} from '../../Components/index';
import { Table } from "antd";
import Edit from "../../assets/icons/edit.svg";
import Trash from "../../assets/icons/trash.svg";
import {handleSubscriptionUpdateModal,handleDeleteModal,handleSubscribeApiModal} from '../../redux/reducers/handleModalsReducers';
import { useDispatch } from "react-redux";
const Subscription = () => {
const dispatch = useDispatch();

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
              dispatch(handleSubscriptionUpdateModal(true));
            }}
          />
          <img
            src={Trash}
            alt="Delete"
            className="myapplication-delete-icon"
            onClick={() => {
              dispatch(handleDeleteModal(true));
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
              dispatch(handleSubscriptionUpdateModal(true));
            }}
          />
          <img
            src={Trash}
            alt="Delete"
            className="myapplication-delete-icon"
            onClick={() => {
              dispatch(handleDeleteModal(true));
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <ApplicationHeaderTitle />
      <div style={{ margin: "1rem 0" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <h3>Subscription Management</h3>
          <span
            onClick={() => dispatch(handleSubscribeApiModal(true))}
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
