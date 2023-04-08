import React from "react";
import HeaderTitle from "../../Components/APIComponents/HeaderTitle";
import NoDataCard from '../../Components/NoDataCard/NoDataCard';
const Documentation = () => {
  return (
    <div>
      <HeaderTitle title={"Documents"} api={"AWSS3Control"} />
      <p className="comments-count">API Documentation</p>
      <NoDataCard title="No Documentation Available" description="No Documentation available for this API yet"/>
    </div>
  );
};

export default Documentation;
