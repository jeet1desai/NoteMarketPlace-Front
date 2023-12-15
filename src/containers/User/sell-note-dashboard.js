import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "../../assets/css/sell-note-dashboard.css";
import EarningIcon from "../../assets/images/earning-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { deleteNoteAction, getInProgressNoteAction, getPublishNoteAction } from "../../store/UserNotes/userNoteActions";
import moment from "moment";
import { NOTE_STATUS } from "../../utils/enum";
import AlertDialog from "../../components/AlertDialog";

const SellNoteDashboard = () => {
  const dispatch = useDispatch();

  const [inProgressPage, setInProgressPage] = useState(1);
  const [inProgressSearch, setInProgressSearch] = useState("");
  const [publishedPage, setPublishedPage] = useState(1);
  const [publishedSearch, setPublishedSearch] = useState("");

  const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState(null);

  const { loading: note_loading, in_progress_note, published_note } = useSelector((state) => state.userNoteReducer);

  const inProgressColumns = [
    {
      title: "ADDED DATE",
      dataIndex: "created_date",
      render: (date) => moment(date).format("DD-MM-YYYY"),
      sorter: (a, b) => moment(a.created_date).unix() - moment(b.created_date).unix(),
    },
    { title: "TITLE", dataIndex: "title", sorter: (a, b) => a.title.localeCompare(b.title) },
    {
      title: "CATEGORY",
      dataIndex: "category",
      render: (category) => category.name,
      sorter: (a, b) => a.category.name.localeCompare(b.category.name),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (status) => {
        if (status === NOTE_STATUS.DRAFT) {
          return "Draft";
        } else if (status === NOTE_STATUS.SUBMITTED) {
          return "Submitted";
        } else {
          return "In Review";
        }
      },
      sorter: (a, b) => (a.status > b.status ? 1 : -1),
    },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            {record.status === NOTE_STATUS.DRAFT ? (
              <>
                <Link to={`/sell-note/edit-note/${record.id}`}>
                  <EditIcon color="disabled" />
                </Link>
                <DeleteIcon
                  color="disabled"
                  onClick={() => {
                    setDeleteNoteId(record.id);
                    setDeleteDialog(true);
                  }}
                />
              </>
            ) : (
              <Link to={`/search-notes/note/${record.id}`}>
                <VisibilityOutlinedIcon color="disabled" />
              </Link>
            )}
          </Space>
        );
      },
    },
  ];

  const publishColumns = [
    {
      title: "ADDED DATE",
      dataIndex: "created_date",
      render: (date) => moment(date).format("DD-MM-YYYY"),
      sorter: (a, b) => moment(a.created_date).unix() - moment(b.created_date).unix(),
    },
    { title: "TITLE", dataIndex: "title", sorter: (a, b) => a.title.localeCompare(b.title) },
    {
      title: "CATEGORY",
      dataIndex: "category",
      render: (category) => category.name,
      sorter: (a, b) => a.category.name.localeCompare(b.category.name),
    },
    {
      title: "SELL TYPE",
      dataIndex: "is_paid",
      render: (is_paid) => {
        if (is_paid) {
          return "Paid";
        } else {
          return "Free";
        }
      },
      sorter: (a, b) => (a.status > b.status ? 1 : -1),
    },
    { title: "PRICE", dataIndex: "selling_price", render: (selling_price) => `$${selling_price}` },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/search-notes/note/${record.id}`}>
            <VisibilityOutlinedIcon color="disabled" />
          </Link>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getInProgressNoteAction(""));
    dispatch(getPublishNoteAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sell-note">
      <Loader loading={note_loading} />

      <div className="content-box">
        <div className="container">
          <div className="stats">
            <div className="stats-heading">
              <div className="page-title">
                <p>Dashboard</p>
              </div>
              <Link to="/sell-note/add-note">
                <button type="button" className="btn btn-purple">
                  Add Note
                </button>
              </Link>
            </div>
            <div className="stats-box">
              <div className="earning">
                <img src={EarningIcon} alt="" />
                <h4>My Earning</h4>
              </div>
              <div className="sold-note">
                <h4>100</h4>
                <p>Number Notes Sold</p>
              </div>
              <div className="earned">
                <h4>$10,00,000</h4>
                <p>Money earned</p>
              </div>
              <div className="download">
                <h4>38</h4>
                <p>My Downloads</p>
              </div>
              <div className="rejected-note">
                <h4>12</h4>
                <p>My Rejected Notes</p>
              </div>
              <div className="buyer-requests">
                <h4>102</h4>
                <p>Buyer Requests</p>
              </div>
            </div>
          </div>

          <div className="in-progress-table">
            <div className="stats-heading">
              <div className="page-title">
                <p>In Progress Notes</p>
              </div>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setInProgressSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(getInProgressNoteAction(inProgressSearch))}>
                  Search
                </button>
              </div>
            </div>

            <div className="antd-table">
              <Table
                columns={inProgressColumns}
                dataSource={in_progress_note}
                pagination={{
                  current: inProgressPage,
                  pageSize: 5,
                  total: in_progress_note.length,
                  position: ["bottomCenter"],
                  onChange: (val) => setInProgressPage(val),
                }}
                showSorterTooltip={false}
              />
            </div>
          </div>

          <div className="published-table">
            <div className="stats-heading">
              <div className="page-title">
                <p>Published Notes</p>
              </div>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setPublishedSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(getPublishNoteAction(publishedSearch))}>
                  Search
                </button>
              </div>
            </div>

            <div className="antd-table">
              <Table
                columns={publishColumns}
                dataSource={published_note}
                pagination={{
                  current: publishedPage,
                  pageSize: 5,
                  total: published_note.length,
                  position: ["bottomCenter"],
                  onChange: (val) => setPublishedPage(val),
                }}
                showSorterTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>

      <AlertDialog
        isOpen={isDeleteDialogOpen}
        handleClose={() => setDeleteDialog(false)}
        handleSubmit={() => {
          dispatch(deleteNoteAction(deleteNoteId));
          setDeleteDialog(false);
          setDeleteNoteId(null);
        }}
        title="Delete Note"
        content="Are you sure, you want to delete this note?"
      />
    </div>
  );
};

export default SellNoteDashboard;
