import React from "react";
import {ApiHeaderTitle,NoDataCard} from '../../Components/index';

const Documentation = () => {
  return (
    <div>
      <ApiHeaderTitle title={"Documents"} api={"AWSS3Control"} />
      <p className="comments-count">API Documentation</p>
      <NoDataCard title="No Documentation Available" description="No Documentation available for this API yet"/>
    </div>
  );
};

export default Documentation;
