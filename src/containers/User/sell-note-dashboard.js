import React from "react";
import { Link } from "react-router-dom";
import { Table, Space } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "../../assets/css/sell-note-dashboard.css";
import EarningIcon from "../../assets/images/earning-icon.svg";

export default function SellNoteDashboard() {
  const inProgressColumns = [
    { title: "ADDED DATE", dataIndex: "addedDate" },
    { title: "TITLE", dataIndex: "title" },
    { title: "CATEGORY", dataIndex: "category" },
    { title: "STATUS", dataIndex: "status" },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to="/sell-note/edit-note/1">
            <EditIcon color="disabled" />
          </Link>
          <DeleteIcon color="disabled" />
        </Space>
      ),
    },
  ];

  const publishColumns = [
    { title: "ADDED DATE", dataIndex: "addedDate" },
    { title: "TITLE", dataIndex: "title" },
    { title: "CATEGORY", dataIndex: "category" },
    { title: "SELL TYPE", dataIndex: "type" },
    { title: "PRICE", dataIndex: "price" },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to="/search-notes">
            <VisibilityOutlinedIcon color="disabled" />
          </Link>
        </Space>
      ),
    },
  ];

  const inProgressData = [
    {
      addedDate: "09-10-2020	",
      title: "John Brown",
      category: "Science",
      status: "Draft",
    },
    {
      addedDate: "09-10-2020	",
      title: "John Brown",
      category: "Science",
      status: "In Review",
    },
    {
      addedDate: "09-10-2020	",
      title: "John Brown",
      category: "Science",
      status: "Submitted",
    },
  ];

  const publishData = [
    {
      addedDate: "09-10-2020",
      title: "John Brown",
      category: "Science",
      type: "Draft",
      price: 120,
    },
    {
      addedDate: "09-10-2020",
      title: "John Brown",
      category: "Science",
      type: "Draft",
      price: 120,
    },
    {
      addedDate: "09-10-2020",
      title: "John Brown",
      category: "Science",
      type: "Draft",
      price: 120,
    },
  ];

  return (
    <div className="sell-note">
      <div class="content-box">
        <div class="container">
          <div className="stats">
            <div class="stats-heading">
              <div className="page-title">
                <p>Dashboard</p>
              </div>
              <Link to="/sell-note/add-note">
                <button type="button" class="btn btn-purple">
                  Add Note
                </button>
              </Link>
            </div>
            <div class="stats-box">
              <div class="earning">
                <img src={EarningIcon} alt="" />
                <h4>My Earning</h4>
              </div>
              <div class="sold-note">
                <h4>100</h4>
                <p>Number Notes Sold</p>
              </div>
              <div class="earned">
                <h4>$10,00,000</h4>
                <p>Money earned</p>
              </div>
              <div class="download">
                <h4>38</h4>
                <p>My Downloads</p>
              </div>
              <div class="rejected-note">
                <h4>12</h4>
                <p>My Rejected Notes</p>
              </div>
              <div class="buyer-requests">
                <h4>102</h4>
                <p>Buyer Requests</p>
              </div>
            </div>
          </div>

          <div className="in-progress-table">
            <div class="stats-heading">
              <div className="page-title">
                <p>In Progress Notes</p>
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
                columns={inProgressColumns}
                dataSource={inProgressData}
                pagination={{
                  current: 1,
                  pageSize: 5,
                  total: 3,
                  position: ["bottomCenter"],
                }}
                showSorterTooltip={false}
              />
            </div>
          </div>

          <div className="published-table">
            <div class="stats-heading">
              <div className="page-title">
                <p>Published Notes</p>
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
                columns={publishColumns}
                dataSource={publishData}
                pagination={{
                  current: 1,
                  pageSize: 5,
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
