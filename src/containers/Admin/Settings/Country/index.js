import React from "react";
import { Table, Space } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import "../../../../assets/css/manage-countries.css";

export default function Country() {
  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    { title: "COUNTRY NAME", dataIndex: "name", sorter: true },
    { title: "COUNTRY CODE", dataIndex: "code", sorter: true },
    { title: "DATE ADDED", dataIndex: "time" },
    { title: "ADDED BY", dataIndex: "adder" },
    { title: "ACTIVE", dataIndex: "active" },
    {
      title: "ACTION",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to={"/search-notes"}>
            <EditIcon color="disabled" />
          </Link>
          <DeleteIcon color="disabled" />
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      name: "India",
      code: "+91",
      time: "27 Nov 2020, 11:20:30",
      adder: "Pritesh Gandhi",
      active: "No",
    },
  ];

  return (
    <div className="manage-countries">
      <div className="container">
        <div className="manage-country-table">
          <div className="country-header">
            <div className="page-title">
              <p>Manage Countries</p>
            </div>
            <div className="add-and-search">
              <Link
                to="/admin/manage-country/add-country"
                type="button"
                className="btn btn-purple"
              >
                Add Country
              </Link>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <button type="button" className="btn btn-purple">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              columns={columns}
              dataSource={data}
              // scroll={{ x: true }}
              pagination={{
                current: 1,
                pageSize: 1,
                total: 2,
                position: ["bottomCenter"],
              }}
              showSorterTooltip={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
