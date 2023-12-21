import React from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../../assets/css/admin-dashboard.css";

export default function Dashboard() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}>
          Download Note
        </Menu.Item>
        <Menu.Item>View More Details</Menu.Item>
        <Menu.Item>Unpublish</Menu.Item>
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
    { title: "ATTACHMENT SIZE", dataIndex: "size" },
    { title: "SELL TYPE", dataIndex: "type" },
    {
      title: "PRICE",
      dataIndex: "price",
      render: (price) => `₹ ${price}`,
      sorter: (a, b) => a.price - b.price,
    },
    { title: "PUBLISHER", dataIndex: "publisher" },
    { title: "PUBLISHED DATE", dataIndex: "time" },
    { title: "NO OF DOWNLOADS	", dataIndex: "downloads" },
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
      title: "John Brown",
      category: "Science",
      size: "10 KB",
      type: "Paid",
      price: 120,
      publisher: "Pritesh Panshal",
      time: "27 Nov 2020, 11:20:30",
      downloads: 2,
    },
    {
      id: "2",
      title: "John Brown",
      category: "Science",
      size: "10 KB",
      type: "Paid",
      price: 120,
      publisher: "Pritesh Panshal",
      time: "27 Nov 2020, 11:20:30",
      downloads: 2,
    },
  ];

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="stats">
          <div className="stats-heading">
            <div className="page-title">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="stats-box">
            <div className="row">
              <div className="col">
                <div className="review">
                  <h5>100</h5>
                  <p>No of Notes in Review for Public</p>
                </div>
              </div>
              <div className="col">
                <div className="download">
                  <h5>100</h5>
                  <p>No of new Notes Downloaded</p>
                  <p>(Last 7 days)</p>
                </div>
              </div>
              <div className="col">
                <div className="registration">
                  <h5>$10,00,000</h5>
                  <p>Number of new Registrations</p>
                  <p>(Last 7 days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="published-table">
          <div className="stats-heading">
            <div className="page-title">
              <p>Published Notes</p>
            </div>
            <div className="search">
              <div className="form-group has-search">
                <span className="fa fa-search search-icon"></span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="button" className="btn btn-purple">
                Search
              </button>
              <div className="form-group">
                <select className="form-control">
                  <option>Last 1 Month</option>
                  <option>Last 2 Month</option>
                  <option>Last 3 Month</option>
                  <option>Last 4 Month</option>
                  <option>Last 5 Month</option>
                  <option>Last 6 Month</option>
                </select>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              columns={columns}
              dataSource={data}
              // scroll={{ x: true }}
              pagination={{
                current: 2,
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
