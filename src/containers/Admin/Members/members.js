import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../../assets/css/members.css";
import { useDispatch, useSelector } from "react-redux";
import { getMembersAction } from "../../../store/Profile/profileActions";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";

const Members = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, members_list } = useSelector((state) => state.profileReducer);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getMembersAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item onClick={() => history.push(`/admin/members/${record.id}`)}>View More Details</Menu.Item>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}>
          Deactivate
        </Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    { title: "FIRST NAME", dataIndex: "first_name", sorter: (a, b) => a.first_name.localeCompare(b.first_name) },
    { title: "LAST NAME", dataIndex: "last_name", sorter: (a, b) => a.last_name.localeCompare(b.last_name) },
    { title: "EMAIL", dataIndex: "email", sorter: (a, b) => a.email.localeCompare(b.email) },
    {
      title: "JOINING DATE",
      dataIndex: "created_date",
      render: (date) => moment(date).format("DD-MM-YYYY, hh:mm"),
      sorter: (a, b) => moment(a.created_date).unix() - moment(b.created_date).unix(),
    },
    {
      title: "UNDER REVIEW NOTES",
      dataIndex: "notes_under_review",
      render: (_, record) => <Link to={`/admin/note-under-review?seller=${record.id}`}>{record.notes_under_review}</Link>,
      sorter: (a, b) => a.notes_under_review - b.notes_under_review,
    },
    {
      title: "PUBLISHED NOTES",
      dataIndex: "notes_published_notes",
      render: (_, record) => <Link to={`/admin/published-notes?seller=${record.id}`}>{record.notes_published_notes}</Link>,
      sorter: (a, b) => a.notes_published_notes - b.notes_published_notes,
    },
    {
      title: "DOWNLOADED NOTES",
      dataIndex: "total_downloaded_notes",
      render: (_, record) => <Link to={`/admin/downloaded-notes?seller=${record.id}`}>{record.total_downloaded_notes}</Link>,
      sorter: (a, b) => a.total_downloaded_notes - b.total_downloaded_notes,
    },
    {
      title: "TOTAL EXPENSES",
      dataIndex: "total_selling_price",
      render: (_, record) => <Link to={`/admin/downloaded-notes?seller=${record.id}`}>$ {record.total_selling_price}</Link>,

      sorter: (a, b) => a.total_selling_price - b.total_selling_price,
    },
    {
      title: "TOTAL EARNING",
      dataIndex: "total_earnings",
      render: (price) => `$ ${price}`,
      sorter: (a, b) => a.total_earnings - b.total_earnings,
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Dropdown overlay={menu(record)}>
            <MoreVertIcon color="disabled" />
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div className="members">
      <div className="container">
        <div className="members-table">
          <div className="member-table-header">
            <div className="page-title">
              <p>Members</p>
            </div>
            <div className="search">
              <div className="form-group has-search">
                <span className="fa fa-search search-icon"></span>
                <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
              </div>
              <button type="button" className="btn btn-purple" onClick={() => dispatch(getMembersAction(search))}>
                Search
              </button>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={loading}
              columns={columns}
              dataSource={members_list}
              pagination={{
                current: page,
                pageSize: 10,
                total: members_list.length,
                position: ["bottomCenter"],
                onChange: (val) => setPage(val),
              }}
              showSorterTooltip={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
