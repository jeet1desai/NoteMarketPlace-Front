import React from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../../../assets/css/members.css";

export default function Members() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>View More Details</Menu.Item>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}>
          Deactivate
        </Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    { title: "FIRST NAME", dataIndex: "first" },
    { title: "LAST NAME", dataIndex: "last" },
    { title: "EMAIL", dataIndex: "email" },
    { title: "JOINING DATE", dataIndex: "time" },
    { title: "UNDER REVIEW NOTES", dataIndex: "underReview" },
    { title: "PUBLISHED NOTES", dataIndex: "published" },
    { title: "DOWNLOADED NOTES", dataIndex: "downloaded" },
    {
      title: "TOTAL EXPENSES",
      dataIndex: "expenses",
      render: (price) => `₹ ${price}`,
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "TOTAL EARNING",
      dataIndex: "earning",
      render: (price) => `₹ ${price}`,
      sorter: (a, b) => a.price - b.price,
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
      first: "Khyati",
      last: "Patel",
      email: "kh123@gmail.com",
      time: "27 Nov 2020, 11:20:30",
      underReview: 19,
      published: 10,
      downloaded: 22,
      expenses: 220,
      earning: 177,
    },
  ];

  return (
    <div className="members">
      <div className="container">
        <div className="members-table">
          <div className="member-table-header">
            <div className="page-title">
              <p>Members</p>
            </div>
            <div className="search">
              <div className="form-group has-search">
                <span className="fa fa-search search-icon"></span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="button" className="btn btn-purple">
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
