import React from "react";
import HeaderTitle from "./HeaderTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import SDK1 from "../../assets/Sdk1.png";
import SDK2 from "../../assets/Sdk2.png";
import SDK3 from "../../assets/Sdk3.png";
import SDK4 from "../../assets/Sdk4.png";

const SDKS = [
  {
    title: "Android",
    img: SDK1,
  },
  {
    title: "Java",
    img: SDK2,
  },
  {
    title: "JavaScript",
    img: SDK3,
  },
  {
    title: "JMeter",
    img: SDK4,
  },
];
const SDKs = () => {
  return (
    <div>
      <HeaderTitle title={"SDKs"} api={"AWSS3Control"} />
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
                  <FontAwesomeIcon
                    icon={faFileArrowDown}
                    style={{ fontSize: "1.2rem" }}
                  />
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
