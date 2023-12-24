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
import {
  deleteNoteAction,
  fetchUserDashboardStats,
  getInProgressNoteAction,
  getPublishNoteAction,
} from "../../store/UserNotes/userNoteActions";
import moment from "moment";
import { NOTE_STATUS, handleStatus } from "../../utils/enum";
import AlertDialog from "../../components/AlertDialog";

const SellNoteDashboard = () => {
  const dispatch = useDispatch();

  const [inProgressPage, setInProgressPage] = useState(1);
  const [inProgressSearch, setInProgressSearch] = useState("");
  const [publishedPage, setPublishedPage] = useState(1);
  const [publishedSearch, setPublishedSearch] = useState("");

  const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState(null);

  const [dashboardStat, setDashboardStat] = useState({
    buyer_request: 0,
    download_notes: 0,
    rejected_notes: 0,
    sold_notes: 0,
    total_earnings: 0,
  });

  const { loading: note_loading, in_progress_note, published_note, stats } = useSelector((state) => state.userNoteReducer);

  useEffect(() => {
    dispatch(getInProgressNoteAction(""));
    dispatch(getPublishNoteAction(""));
    dispatch(fetchUserDashboardStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (stats) {
      setDashboardStat({
        buyer_request: stats.buyer_request,
        download_notes: stats.download_notes,
        rejected_notes: stats.rejected_notes,
        sold_notes: stats.sold_notes,
        total_earnings: stats.total_earnings,
      });
    }
  }, [stats]);

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
      render: (status) => handleStatus(status),
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
      render: (is_paid) => (is_paid ? "Paid" : "Free"),
      sorter: (a, b) => a.status - b.status,
    },
    { title: "PRICE", dataIndex: "selling_price", render: (selling_price) => `$ ${selling_price}` },
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
              <Link to="/sell-note/my-sold-note">
                <div className="sold-note">
                  <h4>{dashboardStat.sold_notes}</h4>
                  <p>Number Notes Sold</p>
                </div>
              </Link>
              <div className="earned">
                <h4>${dashboardStat.total_earnings}</h4>
                <p>Money earned</p>
              </div>
              <Link to="/sell-note/my-download">
                <div className="download">
                  <h4>{dashboardStat.download_notes}</h4>
                  <p>My Downloads</p>
                </div>
              </Link>
              <Link to="/sell-note/my-rejected-note">
                <div className="rejected-note">
                  <h4>{dashboardStat.rejected_notes}</h4>
                  <p>My Rejected Notes</p>
                </div>
              </Link>
              <Link to="/sell-note/buyer-request">
                <div className="buyer-requests">
                  <h4>{dashboardStat.buyer_request}</h4>
                  <p>Buyer Requests</p>
                </div>
              </Link>
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
