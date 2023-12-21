import React, { useEffect } from "react";
import { Table, Space, Dropdown, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "../../../assets/css/rejected-notes.css";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAction } from "../../../store/Profile/profileActions";

const Rejected = () => {
  const dispatch = useDispatch();

  const { loading: profile_loading, seller_list } = useSelector((state) => state.profileReducer);

  useEffect(() => {
    dispatch(getSellerAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>Approve</Menu.Item>
        <Menu.Item>Download Note</Menu.Item>
        <Menu.Item>View More Details</Menu.Item>
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
    { title: "DATE EDITED", dataIndex: "time" },
    { title: "REJECT BY", dataIndex: "rejecter" },
    {
      title: "REMARK",
      dataIndex: "remark",
      ellipsis: "true",
      render: (remark) => (
        <Tooltip placement="topLeft" title={remark}>
          {remark}
        </Tooltip>
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

  return (
    <div className="rejected-notes">
      <div className="container">
        <div className="rejected-table">
          <div className="rejected-header">
            <div className="page-title">
              <p>Rejected Notes</p>
            </div>
            <p>Seller</p>
            <div className="rejected-header-input">
              <div className="form-group">
                <select className="form-control">
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
              dataSource={[]}
              pagination={{
                current: 2,
                pageSize: 1,
                total: 2,
                position: ["bottomCenter"],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rejected;
