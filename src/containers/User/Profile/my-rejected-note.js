import React from "react";
import { Link } from "react-router-dom";
import { Table, Space, Dropdown, Menu, Tooltip } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "../../../assets/css/my-rejected-note.css";

export default function MyRejectedNote() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>Download Note</Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    {
      title: "NOTE TITLE",
      key: "title",
      dataIndex: "title",
      render: (title) => <span>{title}</span>,
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    { title: "CATEGORY", dataIndex: "category", sorter: true },
    {
      title: "REMARK",
      dataIndex: "remark",
      ellipsis: "true",
      render: (remark) => (
        <Tooltip placement="topLeft" title={remark}>
          {remark}
        </Tooltip>
      ),
    },
    {
      title: "CLONE",
      dataIndex: "",
      render: () => <span>Clone</span>,
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to="/search-notes">
            <VisibilityOutlinedIcon color="disabled" />
          </Link>
          <Dropdown overlay={menu(record)}>
            <MoreVertIcon color="disabled" />
          </Dropdown>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      title: "John Brown",
      category: "Science",
      remark: "Lorem ipsum dolor sit amen",
    },
    {
      id: "2",
      title: "Kohn Drown",
      category: "Bcience",
      remark: "Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen",
    },
  ];

  return (
    <div className="my-rejected-note">
      <div class="content-box">
        <div class="container">
          <div className="my-rejected-note-table">
            <div class="stats-heading">
              <div className="page-title">
                <p>My Rejected Notes</p>
              </div>
              <div className="search">
                <div class="form-group has-search">
                  <span class="fa fa-search search-icon"></span>
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
                <button type="button" class="btn btn-purple">
                  Search
                </button>
              </div>
            </div>

            <div className="antd-table">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{
                  current: 1,
                  pageSize: 2,
                  total: 2,
                  position: ["bottomCenter"],
                }}
                showSorterTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
