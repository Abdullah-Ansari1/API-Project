import React, { useState } from "react";
import { GridView, ListView, MenuHeader } from "../../Components/index";
const API = () => {
  const [view, setView] = useState("ListView");

  const handleView = (value) => {
    setView(value);
  };
  return (
    <div>
      <MenuHeader handleView={handleView} view={view} />
      {view === "ListView" ? (
        <ListView />
      ) : view === "GridView" ? (
        <GridView />
      ) : null}
    </div>
  );
};

export default API;
