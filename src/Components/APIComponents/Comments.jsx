import React from "react";
import HeaderTitle from "./HeaderTitle";
import { PlusCircleFilled } from "@ant-design/icons";
import NoDataCard from '.././NoDataCard/NoDataCard';
const Comments = () => {
  return (
    <div>
      <HeaderTitle title={"Comment"} api={"AWSS3Control"} />
      <p className="comments-count">0 Comments</p>
      <div className="add-main">
        <PlusCircleFilled className="add-icon" />
        <span>Write a comment</span>
      </div>
      <NoDataCard title="No Comment Yet" description="No Comment available for this API yet"/>
    </div>
  );
};

export default Comments;
