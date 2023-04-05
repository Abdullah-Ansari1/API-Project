import React from "react";
import HeaderTitle from "./HeaderTitle";
import NoDataCard from "../NoDataCard/NoDataCard";

const ProductionOAuth = () => {
  return (
    <div>
      <HeaderTitle />
      <div className="productionkey-title">
        <h3>Production OAuth2 Keys</h3>
      </div>
      <NoDataCard title="No Key Manager" description="No Key Manager active to generate keys"/>
    </div>
  );
};

export default ProductionOAuth;
