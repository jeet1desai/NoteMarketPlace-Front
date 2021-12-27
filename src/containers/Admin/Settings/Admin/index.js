import React from "react";
import { Link } from "react-router-dom";
import { Table, Space } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "../../../../assets/css/manage-admin.css";

export default function Admin() {
  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    { title: "FIRST NAME", dataIndex: "first" },
    { title: "LAST NAME", dataIndex: "last" },
    { title: "EMAIL", dataIndex: "email", sorter: true },
    { title: "PHONE NO", dataIndex: "phone" },
    { title: "DATE ADDED", dataIndex: "time" },
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
      first: "John",
      last: "Brown",
      active: "Yes",
      email: "kh123@gmail.com	",
      phone: "+91 7896541230",
      time: "27 Nov 2020, 11:20:30",
    },
  ];

  return (
    <div className="manage-admin">
      <div className="container">
        <div className="manage-admin-table">
          <div className="admin-header">
            <div className="page-title">
              <p>Manage Administrator</p>
            </div>
            <div className="add-and-search">
              <Link
                to="/admin/manage-admin/add-admin"
                type="button"
                className="btn btn-purple"
              >
                Add Administrator
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
