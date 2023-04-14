import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { CaretDownOutlined } from "@ant-design/icons";
import {
  CodeIcon,
  TaskSquareIcon,
  DocumentDownloadIcon,
  PrinterIcon,
  ListViewIcon,
  GridViewIcon,
  GridViewActiveIcon,
  ListViewActiveIcon,
} from "../../../assets/index";

import { Select } from "antd";
import "./MenuHeader.css";
import { csvData } from "../../../constants/dummyData";
const MenuHeader = ({ handleView, view }) => {
 
  return (
    <div className="Menu-Header-Container">
      <div className="Menu-Header-Inner">
        <CodeIcon />
        <div className="total-api">
          <h3 className="h3-medium">APIs</h3>
          <span className="totalapi-span">Total:32</span>
        </div>
      </div>

      <div className="Menu-Header-Inner">
        {view === "ListView" && (
          <>
          <CSVLink  data={csvData} target="_blank" className={"download-csv"}> <DocumentDownloadIcon className="ListViewIcons" /></CSVLink >
           
            <PrinterIcon className="ListViewIcons" />
            <TaskSquareIcon className="ListViewIcons" />
            <div>
              <Select
                suffixIcon={
                  <CaretDownOutlined className="ant-select-suffix downarrow-select" />
                }
                defaultValue="All"
                style={{
                  width: 134,
                }}
                className="main-header"
                options={[
                  {
                    value: "All",
                    label: "All",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </div>
          </>
        )}

        {view === "ListView" ? (
          <ListViewActiveIcon
            className="ViewChangeIcon"
            onClick={(e) => {
              e.preventDefault();
              handleView("ListView");
            }}
          />
        ) : (
          <ListViewIcon
            className="ViewChangeIcon"
            onClick={(e) => {
              e.preventDefault();
              handleView("ListView");
            }}
          />
        )}
        {view === "ListView" ? (
          <GridViewIcon
            className="ViewChangeIcon"
            onClick={(e) => {
              e.preventDefault();
              handleView("GridView");
            }}
          />
        ) : (
          <GridViewActiveIcon
            className="ViewChangeIcon"
            onClick={(e) => {
              e.preventDefault();
              handleView("GridView");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MenuHeader;
