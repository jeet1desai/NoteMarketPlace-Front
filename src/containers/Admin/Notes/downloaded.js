import React from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";

import AdminHeader from "../../../hoc/admin/header";
import AdminFooter from "../../../hoc/admin/footer";

import "../../../assets/css/downloaded-notes.css";

export default function Downloaded() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>View More Details</Menu.Item>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}
        >
          Download Note
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
    {
      title: "",
      key: "buyer",
      render: (text, record) => (
        <Space size="middle">
          <Link to={"/search-notes"}>
            <VisibilityOutlinedIcon color="disabled" />
          </Link>
        </Space>
      ),
    },
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
      type: "Paid",
      price: 120,
      buyer: "Pritesh Gandhi",
      seller: "Pritesh Panshal",
      time: "27 Nov 2020, 11:20:30",
    },
  ];

  return (
    <>
      <AdminHeader />
      <div className="downloaded-notes">
        <div className="container">
          <div className="downloaded-table">
            <div className="downloaded-header">
              <div className="page-title">
                <p>Downloaded Notes</p>
              </div>
              <div className="filter-search">
                <div className="filter">
                  <div className="form-group">
                    <label>Note</label>
                    <select className="form-control">
                      <option className="muted">Select Note</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Seller</label>
                    <select className="form-control">
                      <option className="muted">Select Seller</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Buyer</label>
                    <select className="form-control">
                      <option className="muted">Select Buyer</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                      <option value="">abc</option>
                    </select>
                  </div>
                </div>
                <div className="search">
                  <div className="form-group has-search">
                    <span className="fa fa-search search-icon"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <button type="button" className="btn search-btn btn-purple">
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
      <AdminFooter />
    </>
  );
}
