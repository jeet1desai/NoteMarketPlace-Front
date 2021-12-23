import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Table, Space, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import AdminHeader from "../../../hoc/admin/header";
import AdminFooter from "../../../hoc/admin/footer";

import "../../../assets/css/note-under-review.css";
import DotIcon from "../../../assets/images/3dot.png";
import EyeIcon from "../../../assets/images/eye.png";

export default function UnderReview() {
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
    { title: "SELLER", dataIndex: "seller" },
    {
      title: "",
      key: "seller",
      render: (text, record) => (
        <Space size="middle">
          <Link to={"/search-notes"}>
            <img alt="" src={EyeIcon} />
          </Link>
        </Space>
      ),
    },
    { title: "DATE ADDED", dataIndex: "time" },
    { title: "STATUS", dataIndex: "status" },
    {
      title: "ACTION",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button variant="contained" color="success">
            Approve
          </Button>
          <Button variant="contained" color="error">
            Reject
          </Button>
          <Button variant="contained" color="primary">
            In Review
          </Button>
        </Space>
      ),
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Dropdown overlay={menu(record)}>
            <img alt="" src={DotIcon} />
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
      status: "In Review",
      seller: "Pritesh Panshal",
      sellerID: "2",
      time: "27 Nov 2020, 11:20:30",
    },
  ];

  return (
    <>
      <AdminHeader />
      <div className="note-under-review">
        <div className="container">
          <div className="nur-table">
            <div className="nur-header">
              <div className="page-title">
                <p>Note Under Review</p>
              </div>
              <p>Seller</p>
              <div className="nur-header-input">
                <div className="form-group">
                  <select className="form-control">
                    <option>Select Month</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
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

        <Modal
          centered={true}
          isOpen={false}
          toggle={() => {}}
          className="reject-note-modal"
        >
          <ModalHeader toggle={() => {}}>Human Body - Science</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label for="description">Remark *</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                placeholder="write remark..."
                required
              ></textarea>
            </div>
            <div className="modal-review-btn">
              <button type="button" className="btn reject-btn">
                Reject
              </button>
              <button type="button" className="btn close-btn">
                Close
              </button>
            </div>
          </ModalBody>
        </Modal>
      </div>
      <AdminFooter />
    </>
  );
}
