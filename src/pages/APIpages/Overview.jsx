import React from "react";
import { ApiHeaderTitle } from "../../Components";
import { Tags } from "../../constants/dummyData";
import { Input } from "antd";
import {
  PrinterLight,
  AddOverviewCommentIcon,
  DownloadSwaggerIcon,
  HE
} from "../../assets";
const Overview = () => {
  return (
    <div>
      <ApiHeaderTitle title={"Overview"} api={"HealthCare-API"} />
      <div className="overview-main">
        <div className="overview-left">
          <div className="overview-head">
            <div className="img-span"><HE/></div>
            <div className="overview-content">
              <h2 className="overview-main-title">HealthCare-API</h2>
              <p className="overview-content-sub-title">
                GetBucket UpdateBucket{" "}
              </p>
              <span className="overview-version-main">
                <p>Version 1</p>
                <p>By admi</p>
              </span>
            </div>
          </div>
          <div className="overview-content-url">
            <p>Url</p>
            <Input
              suffix={<PrinterLight />}
              placeholder="https://zerocodeapi.com:8243/awss3control/2018-08-20"
              className="overview-url-input"
              style={{
                border:"1px solid #d9d9d9"
              }}
            />
            <button className="overview-try-btn">Try It Out</button>
          </div>
          <div className="overview-plan">
            <h2 className="overview-main-title">Business Plans</h2>
            <div className="overview-plancard">
              <p className="plan-light">Unlimited</p>
              <p className="plan-bold">Unlimited</p>
              <p className="plan-light">Requests/ms</p>
            </div>
          </div>
          <div className="overview-comment">
            <h2 className="overview-main-title">Comments</h2>
            <div className="write-comment-main">
                <AddOverviewCommentIcon />
              <span>Write a New Comment</span>
            </div>
          </div>
        </div>
        <div className="overview-right">
          <div className="overview-tagCard">
            <h2 className="overview-main-title">Tags</h2>
            <div className="tags-main">
            {Tags.map((item,index)=>{
              return(
                <span className="tag-item" key={index}>{item.title}</span>
              )
            })}
            </div>
            <span className="tag-divider"/>
            <h2 className="overview-main-title">Source</h2>
            <div className="tag-download">
              <span>
                <DownloadSwaggerIcon />
              </span>
              <p>Download Swagger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
