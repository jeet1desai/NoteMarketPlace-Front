import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../../assets/css/member-details.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileAction } from "../../../store/Profile/profileActions";
import Loader from "../../../components/Loader";
import moment from "moment";
import { fetchUserNoteAction } from "../../../store/AdminNotes/adminNoteActions";
import { Link } from "react-router-dom";
import { NOTE_STATUS } from "../../../utils/enum";

const MemberDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading: profile_loading, user } = useSelector((state) => state.profileReducer);
  const { loading: admin_note_loading, member_notes } = useSelector((state) => state.adminNoteReducer);

  const [page, setPage] = useState(1);

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    phone_number: "",
    university: "",
    address_one: "",
    address_two: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getProfileAction(id));
      dispatch(fetchUserNoteAction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setUserData({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        date_of_birth: user.date_of_birth ? moment(user.date_of_birth).format("DD-MM-YYYY") : "",
        phone_number: `+${user.phone_country_code?.code || ""} ${user.phone_number || ""}`,
        university: user.university,
        address_one: user.address_line_one,
        address_two: user.address_line_two,
        city: user.city,
        state: user.state,
        country: user.country?.name || "",
        zip_code: user.zip_code,
        image: user.profile_picture,
      });
    }
  }, [user]);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item onClick={() => {}}>Download Note</Menu.Item>
      </Menu>
    );
  };

  const handleStatus = (status) => {
    switch (status) {
      case NOTE_STATUS.APPROVED:
        return "Approved";
      case NOTE_STATUS.IN_REVIEW:
        return "In Review";
      case NOTE_STATUS.REJECTED:
        return "Rejected";
      case NOTE_STATUS.REMOVED:
        return "Removed";
      case NOTE_STATUS.SUBMITTED:
        return "Submitted";
      default:
        return "";
    }
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    {
      title: "NOTE TITLE",
      dataIndex: "title",
      render: (_, record) => <Link to={`/admin/note/${record.id}`}>{record.title}</Link>,
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    { title: "CATEGORY", dataIndex: "category", render: (_, record) => record.category.name },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (_, record) => handleStatus(record.status),
    },
    { title: "DOWNLOADED NOTES", dataIndex: "total_downloaded_notes" },
    {
      title: "TOTAL EARNING",
      dataIndex: "total_earnings",
      render: (price) => `$ ${price}`,
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "DATE ADDED",
      dataIndex: "created_date",
      render: (date) => moment(date).format("DD-MM-YYYY, hh:mm"),
      sorter: (a, b) => moment(a.created_date).unix() - moment(b.created_date).unix(),
    },
    {
      title: "PUBLISHED DATE",
      dataIndex: "published_date",
      render: (date) => (date ? moment(date).format("DD-MM-YYYY, hh:mm") : ""),
      sorter: (a, b) => moment(a.published_date).unix() - moment(b.published_date).unix(),
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
    <div className="member-details">
      <Loader loading={profile_loading || admin_note_loading} />
      <div className="container">
        <div className="member-detail">
          <div className="page-title">
            <p>Member Details</p>
          </div>
          <div className="member-top">
            <img alt="" src={userData.image} className="member-image" />
            <div className="row w-100">
              <div className="col-6">
                <div className="row">
                  <p className="col-6">First Name:</p>
                  <span className="col-6">{userData.first_name}</span>
                  <p className="col-6">Last Name:</p>
                  <span className="col-6">{userData.last_name}</span>
                  <p className="col-6">Email:</p>
                  <span className="col-6">{userData.email}</span>
                  <p className="col-6">DOB:</p>
                  <span className="col-6">{userData.date_of_birth}</span>
                  <p className="col-6">Phone No:</p>
                  <span className="col-6">{userData.phone_number}</span>
                  <p className="col-6">Collage / University:</p>
                  <span className="col-6">{userData.university}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <p className="col-6">Address 1:</p>
                  <span className="col-6">{userData.address_one}</span>
                  <p className="col-6">Address 2:</p>
                  <span className="col-6">{userData.address_two}</span>
                  <p className="col-6">City:</p>
                  <span className="col-6">{userData.city}</span>
                  <p className="col-6">State:</p>
                  <span className="col-6">{userData.state}</span>
                  <p className="col-6">Country:</p>
                  <span className="col-6">{userData.country}</span>
                  <p className="col-6">Zip Code:</p>
                  <span className="col-6">{userData.zip_code}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="member-table">
          <div className="page-title">
            <p>Notes</p>
          </div>
          <div className="antd-table">
            <Table
              columns={columns}
              dataSource={member_notes}
              pagination={{
                current: page,
                pageSize: 5,
                total: member_notes.length,
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

export default MemberDetail;
