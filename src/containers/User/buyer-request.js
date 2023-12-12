import React from "react";
import { Link } from "react-router-dom";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "../../assets/css/buyer-request.css";

export default function BuyerRequest() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}>
          Yes, I Received
        </Menu.Item>
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
    { title: "BUYER", dataIndex: "buyer" },
    { title: "PHONE NO", dataIndex: "phone" },
    { title: "SELL TYPE", dataIndex: "type" },
    {
      title: "PRICE",
      dataIndex: "price",
      render: (price) => `₹ ${price}`,
      sorter: (a, b) => a.price - b.price,
    },
    { title: "DOWNLOADED DATE/TIME", dataIndex: "time" },
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
      buyer: "abc@gmail.com	",
      phone: "+91 1234567890",
      type: "Paid",
      price: 120,
      time: "27 Nov 2020, 11:20:30",
    },
    {
      id: "2",
      title: "Kohn Drown",
      category: "Bcience",
      buyer: "abcd@gmail.com	",
      phone: "+91 1234567891",
      type: "Free",
      price: 150,
      time: "28 Nov 2020, 11:20:30",
    },
  ];

  return (
    <div className="buyer-request">
      <div className="content-box">
        <div className="container">
          <div className="buyer-request-table">
            <div className="stats-heading">
              <div className="page-title">
                <p>Buyer Request</p>
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
    </div>
  );
}
