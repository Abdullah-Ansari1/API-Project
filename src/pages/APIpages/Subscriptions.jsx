import React from "react";
import {ApiHeaderTitle} from '../../Components/index';
import { Select, Table } from "antd";
import KeySquare from "../../assets/icons/key-square.svg";
import SecurityKey from "../../assets/icons/security-key.svg";
import Unsubscribe from "../../assets/icons/unsubscribe.svg";
import SelectDownArrow from "../../assets/icons/selectdown-arrow.svg";
const columns = [
  {
    title: "Application Name",
    dataIndex: "applicationname",
    key: "applicationname",
  },
  {
    title: "Throtting Teir",
    dataIndex: "tier",
    key: "tier",
  },
  {
    title: "Application Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];
const data = [
  {
    key: "1",
    applicationname: "Default Application",
    tier: "Bronze",
    status: "UNBLOCKED",
    actions: (
      <div style={{ display: "flex", gap: "1rem" }}>
        <span>
          <img src={KeySquare} alt="KeySquare" style={{ marginRight: "4px" }} />
          SANDBOX KEYS
        </span>
        <span>
          <img src={SecurityKey} alt="SecurityKey" style={{ marginRight: "4px" }} />
          PROD KEYS
        </span>
        <span>
          <img
            src={Unsubscribe}
            alt="Unsubscribe"
            style={{ marginRight: "4px" }}
          />
          UNSUBSCRIBE
        </span>
        <span>
          <img
            src={Unsubscribe}
            alt="Unsubscribe"
            style={{ marginRight: "4px" }}
          />
          MANAGE APP
        </span>
      </div>
    ),
  },
  {
    key: "2",
    applicationname: "Test Application",
    tier: "Bronze",
    status: "UNBLOCKED",
    actions: (
      <div style={{ display: "flex", gap: "1rem" }}>
        <span>
          <img src={KeySquare} alt="KeySquare" style={{ marginRight: "4px" }} />
          SANDBOX KEYS
        </span>
        <span>
          <img src={SecurityKey} alt="SecurityKey" style={{ marginRight: "4px" }} />
          PROD KEYS
        </span>
        <span>
          <img
            src={Unsubscribe}
            alt="Unsubscribe"
            style={{ marginRight: "4px" }}
          />
          UNSUBSCRIBE
        </span>
        <span>
          <img
            src={Unsubscribe}
            alt="Unsubscribe"
            style={{ marginRight: "4px" }}
          />
          MANAGE APP
        </span>
      </div>
    ),
  },
];
const Subscriptions = () => {
  return (
    <div>
      <ApiHeaderTitle title={"Subscriptions"} api={"AWSS3Control"} />
      <div style={{ marginTop: "2rem" }}>
        <p className="subscription-title">
          Subscription & Key Generation Wizard
        </p>
      </div>
      <p className="subscription-info">
        An application is primarily used to decouple the consumer from the APIs.
        it allow you to generate and use a single Key for multiple APIs and
        subscribe multiple times to a single API with different SLA levels.
      </p>
      <h3 className="main-title">Subscribe</h3>
      <div className="subscription-select">
        <p className="subscription-smalltext">Application</p>

        <div className="select-main selctbusiness-main">
          {/* <p>Bussiness Plan</p> */}
          <label htmlFor="select-menu" className="subscription-smalltext">
            Bussiness Plan
          </label>
          <div className="businessplan-select">
            <Select
              suffixIcon={
                <img src={SelectDownArrow} alt={SelectDownArrow}  className="ant-select-suffix downarrow-select"/>
              }
              defaultValue="Bronze"
              name="select-menu"
              style={{ width: "100%" }}
              options={[
                {
                  value: "Bronze",
                  label: "Bronze",
                },
                {
                  value: "Label2",
                  label: "Label2",
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
          </div>
        </div>
      </div>
      {/* <button className='subscribe-btn'>Subscribe</button> */}
      <button className="button-primary mb-bottom-3">Subscribe</button>
      <h2 style={{ color: "#253d55" }}>Subscriptions</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="subscription-table mb-bottom-3"
      />
    </div>
  );
};

export default Subscriptions;
