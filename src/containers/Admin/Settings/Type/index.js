import React from "react";
import { Table, Space, Tooltip } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import "../../../../assets/css/manage-type.css";

export default function Type() {
  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    { title: "TYPE", dataIndex: "type", sorter: true },
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      ellipsis: "true",
      render: (desc) => (
        <Tooltip placement="topLeft" title={desc}>
          {desc}
        </Tooltip>
      ),
    },
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
      type: "Type 1",
      description: "John Brown John Brown John Brown John Brown John Brown",
      time: "27 Nov 2020, 11:20:30",
      adder: "Pritesh Gandhi",
      active: "No",
    },
  ];

  return (
    <div className="manage-type">
      <div className="container">
        <div className="manage-type-table">
          <div className="type-header">
            <div className="page-title">
              <p>Manage Type</p>
            </div>
            <div className="add-and-search">
              <Link
                to="/admin/manage-type/add-type"
                type="button"
                className="btn btn-purple"
              >
                Add Type
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
