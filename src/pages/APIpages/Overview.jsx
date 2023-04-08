import React,{useState} from "react";
import MenuHeader from "../../Components/MenuHeader/MenuHeader";
import ListView from "../../Components/APIComponents/ListView/ListView";
import GridView from "../../Components/APIComponents/GridView/GridView";

const Overview = () => {
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

export default Overview;
