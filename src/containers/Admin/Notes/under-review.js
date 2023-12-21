import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Table, Space, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Button from "@mui/material/Button";
import "../../../assets/css/note-under-review.css";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAction } from "../../../store/Profile/profileActions";
import { useLocation } from "react-router-dom";

const UnderReview = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const { loading: profile_loading, seller_list } = useSelector((state) => state.profileReducer);

  const [seller, setSeller] = useState("");

  useEffect(() => {
    const sellerFilter = queryParams.get("seller");
    if (sellerFilter) {
      setSeller(sellerFilter);
    }
    dispatch(getSellerAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(seller);
  }, [seller]);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>View More Details</Menu.Item>
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
      status: "In Review",
      seller: "Pritesh Panshal",
      sellerID: "2",
      time: "27 Nov 2020, 11:20:30",
    },
  ];

  return (
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
                <select className="form-control" value={seller} onChange={(e) => setSeller(e.target.value)}>
                  <option value="">Select Seller</option>
                  {seller_list.map((seller) => (
                    <option value={seller.id} key={seller.id}>
                      {seller.first_name} {seller.last_name}
                    </option>
                  ))}
                </select>
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
          </div>

          <div className="antd-table">
            <Table
              loading={profile_loading}
              columns={columns}
              dataSource={data}
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

      <Modal centered={true} isOpen={false} toggle={() => {}} className="reject-note-modal">
        <ModalHeader toggle={() => {}}>Human Body - Science</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="description">Remark *</label>
            <textarea id="description" name="description" className="form-control" placeholder="write remark..." required></textarea>
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
  );
};

export default UnderReview;
