import React from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../../../assets/css/member-details.css";
import AvatarImage from "../../../assets/images/avatar.png";

export default function MemberDetail() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}>
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
    { title: "STATUS", dataIndex: "status" },
    { title: "DOWNLOADED NOTES", dataIndex: "downloaded" },
    {
      title: "TOTAL EARNING",
      dataIndex: "earning",
      render: (price) => `₹ ${price}`,
      sorter: (a, b) => a.price - b.price,
    },
    { title: "DATE ADDED", dataIndex: "time" },
    { title: "PUBLISHED DATE", dataIndex: "time" },
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
      status: "Published",
      downloaded: 10,
      earning: 225,
      time: "27 Nov 2020, 11:20:30",
    },
  ];

  return (
    <div className="member-details">
      <div className="container">
        <div className="member-detail">
          <div class="page-title">
            <p>Member Details</p>
          </div>
          <div className="member-top">
            <img alt="" src={AvatarImage} className="member-image" />
            <div className="row w-100">
              <div className="col-6">
                <div className="row">
                  <p className="col-6">First Name:</p>
                  <span className="col-6">Richard</span>
                  <p className="col-6">Last Name:</p>
                  <span className="col-6">Brown</span>
                  <p className="col-6">Email:</p>
                  <span className="col-6">abc@gmail.com</span>
                  <p className="col-6">DOB:</p>
                  <span className="col-6">01-01-2021</span>
                  <p className="col-6">Phone No:</p>
                  <span className="col-6">7894561230</span>
                  <p className="col-6">Collage / University:</p>
                  <span className="col-6">University Of California</span>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <p className="col-6">Address 1:</p>
                  <span className="col-6">144 Gandhi Road</span>
                  <p className="col-6">Address 2:</p>
                  <span className="col-6">Star Colony</span>
                  <p className="col-6">City:</p>
                  <span className="col-6">New York</span>
                  <p className="col-6">State:</p>
                  <span className="col-6">New York</span>
                  <p className="col-6">Country:</p>
                  <span className="col-6">US</span>
                  <p className="col-6">Zip Code:</p>
                  <span className="col-6">123456</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="member-table">
          <div class="page-title">
            <p>Notes</p>
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
