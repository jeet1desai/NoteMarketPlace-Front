import React, { useState } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { Table, Space, Dropdown, Menu } from "antd";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "../../../assets/css/my-download.css";

export default function MyDownload() {
  const [isModalOpen, setModalOpen] = useState(false);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>Yes, I Received</Menu.Item>
        <Menu.Item onClick={() => setModalOpen(true)}>
          Add Review/Feedback
        </Menu.Item>
        <Menu.Item>Report as Inappropriate</Menu.Item>
      </Menu>
    );
  };

  const data = [
    {
      id: "1",
      title: "John Brown",
      category: "Science",
      buyer: "abc@gmail.com	",
      type: "Paid",
      price: 120,
      time: "27 Nov 2020, 11:20:30",
    },
    {
      id: "2",
      title: "Kohn Drown",
      category: "Bcience",
      buyer: "abcd@gmail.com	",
      type: "Free",
      price: 150,
      time: "28 Nov 2020, 11:20:30",
    },
  ];

  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    {
      title: "NOTE TITLE",
      dataIndex: "title",
      render: (title) => <span>{title}</span>,
    },
    { title: "CATEGORY", dataIndex: "category" },
    { title: "BUYER", dataIndex: "buyer" },
    { title: "SELL TYPE", dataIndex: "type" },
    { title: "PRICE", dataIndex: "price", render: (price) => `₹ ${price}` },
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

  return (
    <div className="my-downloads">
      <div class="content-box">
        <div class="container">
          <div className="my-download-table">
            <div class="stats-heading">
              <div className="page-title">
                <p>My Downloads</p>
              </div>
              <div className="search">
                <div class="form-group has-search">
                  <span class="fa fa-search search-icon"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
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

      <Modal
        centered={true}
        isOpen={isModalOpen}
        toggle={() => setModalOpen(false)}
      >
        <ModalHeader toggle={() => setModalOpen(false)}>Add Review</ModalHeader>
        <ModalBody>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            size="large"
          />
          <div class="form-group">
            <label for="description">Comments *</label>
            <textarea
              id="description"
              name="description"
              class="form-control"
              placeholder="Comments..."
              required
            ></textarea>
          </div>
          <div className="modal-review-btn">
            <button type="button" class="btn submit-btn btn-purple">
              Submit
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
