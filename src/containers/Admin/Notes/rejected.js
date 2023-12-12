import React from "react";
import { Table, Space, Dropdown, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "../../../assets/css/rejected-notes.css";

export default function Rejected() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>Approve</Menu.Item>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}>
          Download Note
        </Menu.Item>
        <Menu.Item>View More Details</Menu.Item>
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
    { title: "SELLER", dataIndex: "seller" },
    {
      title: "",
      key: "seller",
      render: (text, record) => (
        <Space size="middle">
          <Link to={"/search-notes"}>
            <VisibilityOutlinedIcon color="disabled" />
          </Link>
        </Space>
      ),
    },
    { title: "DATE EDITED", dataIndex: "time" },
    { title: "REJECT BY", dataIndex: "rejecter" },
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
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
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
      title: "John Brown sdfgh sdfgh sdfgh fdsfdsggfg  dfsdf ddfs fdf",
      category: "Science",
      seller: "Pritesh Panshal",
      rejecter: "Pritesh Panshal",
      remark: "sdnksjfkdf fsdfsldfkndf fosdnfsf fosfnskjdfns ",
      time: "27 Nov 2020, 11:20:30",
    },
  ];

  return (
    <div className="rejected-notes">
      <div className="container">
        <div className="rejected-table">
          <div className="rejected-header">
            <div className="page-title">
              <p>Rejected Notes</p>
            </div>
            <p>Seller</p>
            <div className="rejected-header-input">
              <div class="form-group">
                <select class="form-control">
                  <option>Select Month</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
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
          </div>

          <div className="antd-table">
            <Table
              columns={columns}
              dataSource={data}
              pagination={{
                current: 2,
                pageSize: 1,
                total: 2,
                position: ["bottomCenter"],
              }}
              // showSorterTooltip={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
