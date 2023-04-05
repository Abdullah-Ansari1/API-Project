import React from "react";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { data } from "./CardData";
import Code from "../../../assets/icons/code.svg";
import "./GridView.css";
const GridView = () => {
  return (
    <div>
      <div className="GridViewCards">
        {data.map((item, index) => {
          return (
            <Card
              key={item.key}
              className="Grid-Card"
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <div className="Card-Content">
                <div className="Card_content_header">
                  <span>
                    <h2 className="Card-Title">{item.name}</h2>
                    <p className="Card-subheading">Subhead</p>
                  </span>
                  <span>
                    <p className="card-api-context">{item.context}</p>
                    <p className="Card-subheading">Context</p>
                  </span>
                </div>
                <span>
                  <p className="card-version">{item.version}</p>
                  <p className="Card-subheading">Version</p>
                </span>
                <hr />
                <div>
                  <div className="Grid-Card-rating">
                    <span className="Card-subheading">0/5.0(0users)</span>
                    <span>
                      <StarFilled style={{ color: "#d1d1d1" }} />
                      <StarFilled style={{ color: "#d1d1d1" }} />
                      <StarFilled style={{ color: "#d1d1d1" }} />
                      <StarFilled style={{ color: "#d1d1d1" }} />
                      <StarFilled style={{ color: "#d1d1d1" }} />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      {/* When there is no Api then we run the following code currently its commented */}

      {/* <div className="noApi-content">
        <img src={Code} alt="code" />
        <p className="noApi-title">No APIs Available</p>
        <p className="noApi-des">There is no API to Display right now</p>
      </div> */}
    </div>
  );
};
export default GridView;
