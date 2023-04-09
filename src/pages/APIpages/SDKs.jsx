import React from "react";
import {ApiHeaderTitle} from '../../Components/index';
import DownloadFile from '../../assets/icons/document-downloadSDK.svg'
import {SDKS} from '../../constants/dummyData';
const SDKs = () => {
  return (
    <div>
      <ApiHeaderTitle title={"SDKs"} api={"AWSS3Control"} />
      <p className="sdk-title">Software Development Kits (SDKs)</p>
      <div className="Skds">
        {SDKS.map(({ title, img }, index) => {
          return (
            <div className="card-sdks" key={index}>
              <div className="imgsection">
                <img alt={title} src={img} width={"100%"} />
              </div>
              <div className="sdks-content">
                <h2>{title}</h2>
                <div className="download-sdks">
                  <img src={DownloadFile} alt="DownloadFile" />
                  <span>Download</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SDKs;
