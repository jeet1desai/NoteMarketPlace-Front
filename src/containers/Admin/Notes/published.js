import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "../../../assets/css/published-notes.css";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAction } from "../../../store/Profile/profileActions";
import { useLocation } from "react-router-dom";

const Published = () => {
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
    { title: "SELL TYPE", dataIndex: "type" },
    {
      title: "PRICE",
      dataIndex: "price",
      render: (price) => `₹ ${price}`,
      sorter: (a, b) => a.price - b.price,
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
    { title: "PUBLISHED DATE", dataIndex: "time" },
    { title: "APPROVED BY", dataIndex: "approver" },
    { title: "NO Of DOWNLOADS	", dataIndex: "downloads" },
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
      seller: "Pritesh Panshal",
      approver: "Pritesh Gandhi",
      time: "27 Nov 2020, 11:20:30",
      downloads: 2,
    },
  ];

  return (
    <div className="published-notes">
      <div className="container">
        <div className="published-table">
          <div className="published-header">
            <div className="page-title">
              <p>Published Notes</p>
            </div>
            <p>Seller</p>
            <div className="published-header-input">
              <div className="form-group">
                <select value={seller} onChange={(e) => setSeller(e.target.value)} className="form-control">
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
};

export default Published;
