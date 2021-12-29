import React from "react";
import { Link } from "react-router-dom";
import { Table, Space, Tooltip } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "../../../../assets/css/manage-category.css";

export default function Category() {
  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    { title: "CATEGORY", dataIndex: "category", sorter: true },
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
      category: "Science",
      description: "John Brown John Brown John Brown John Brown John Brown",
      time: "27 Nov 2020, 11:20:30",
      adder: "Pritesh Gandhi",
      active: "No",
    },
  ];

  return (
    <div className="manage-category">
      <div className="container">
        <div className="manage-category-table">
          <div className="category-header">
            <div className="page-title">
              <p>Manage Category</p>
            </div>
            <div className="add-and-search">
              <Link
                to="/admin/manage-category/add-category"
                type="button"
                className="btn btn-purple"
              >
                Add Category
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
