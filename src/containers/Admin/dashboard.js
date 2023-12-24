import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../assets/css/admin-dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchAdminPublishedNoteAction, fetchDashboardStats, updateNoteUnpublishAction } from "../../store/AdminNotes/adminNoteActions";
import { userDownloadNoteAction } from "../../store/UserNotes/userNoteActions";
import { NOTE_STATUS } from "../../utils/enum";
import { rejectNoteSchema } from "../../utils/schema";
import ErrorText, { inputError } from "../../components/Error";
import { Form, Formik } from "formik";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import moment from "moment";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading: note_loading, published_notes, stats } = useSelector((state) => state.adminNoteReducer);
  const { loading: user_note_loading } = useSelector((state) => state.userNoteReducer);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [month, setMonth] = useState(1);

  const [note, setNote] = useState(null);
  const [isDialogOpen, setDialog] = useState(false);

  const [formValue] = useState({
    remark: "",
  });

  const [dashboardStat, setDashboardStat] = useState({
    new_member: 0,
    note_downloaded: 0,
    note_under_review: 0,
  });

  useEffect(() => {
    dispatch(fetchAdminPublishedNoteAction(search, "", month));
    dispatch(fetchDashboardStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month]);

  useEffect(() => {
    if (stats) {
      setDashboardStat({
        new_member: stats.new_member,
        note_downloaded: stats.note_downloaded,
        note_under_review: stats.note_under_review,
      });
    }
  }, [stats]);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item onClick={() => history.push(`/admin/note/${record.id}`)}>View More Details</Menu.Item>
        <Menu.Item onClick={() => dispatch(userDownloadNoteAction({ note_id: record.id }))}>Download Note</Menu.Item>
        <Menu.Item
          onClick={() => {
            setNote(record);
            setDialog(true);
          }}>
          Unpublish
        </Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    {
      title: "NOTE TITLE",
      key: "title",
      dataIndex: "title",
      render: (_, record) => <Link to={`/admin/note/${record.id}`}>{record.title}</Link>,
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "CATEGORY",
      dataIndex: "category",
      render: (_, record) => record.category.name,
      sorter: (a, b) => a.category.name.localeCompare(b.category.name),
    },
    {
      title: "ATTACHMENT SIZE",
      dataIndex: "file_size",
      render: (_, record) => record.file_size,
      sorter: (a, b) => a.file_size - b.file_size,
    },
    {
      title: "SELL TYPE",
      dataIndex: "is_paid",
      render: (_, record) => (record.is_paid ? "Paid" : "Free"),
      sorter: (a, b) => a.status - b.status,
    },
    {
      title: "PRICE",
      dataIndex: "selling_price",
      render: (_, record) => `$ ${record.selling_price}`,
      sorter: (a, b) => a.selling_price - b.selling_price,
    },
    {
      title: "PUBLISHER",
      dataIndex: "publisher",
      render: (_, record) => `${record.actioned_by.first_name} ${record.actioned_by.last_name}`,
      sorter: (a, b) =>
        `${a.actioned_by.first_name} ${a.actioned_by.last_name}`.localeCompare(`${b.actioned_by.first_name} ${b.actioned_by.last_name}`),
    },
    {
      title: "PUBLISHED DATE",
      dataIndex: "published_date",
      render: (published_date) => (published_date ? moment(published_date).format("DD-MM-YYYY, hh:mm") : ""),
      sorter: (a, b) => moment(a.published_date).unix() - moment(b.published_date).unix(),
    },
    {
      title: "NO Of DOWNLOADS	",
      dataIndex: "total_downloaded_notes",
      render: (_, record) => <Link to={`/admin/downloaded-notes?seller=${record.id}`}>{record.total_downloaded_notes}</Link>,
      sorter: (a, b) => a.total_downloaded_notes - b.total_downloaded_notes,
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
    <div className="admin-dashboard">
      <div className="container">
        <div className="stats">
          <div className="stats-heading">
            <div className="page-title">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="stats-box">
            <div className="row">
              <div className="col">
                <Link to="/admin/note-under-review">
                  <div className="review">
                    <h5>{dashboardStat.note_under_review}</h5>
                    <p>No of Notes in Review for Public</p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/admin/downloaded-notes">
                  <div className="download">
                    <h5>{dashboardStat.note_downloaded}</h5>
                    <p>No of new Notes Downloaded</p>
                    <p>(Last 7 days)</p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <div className="registration">
                  <h5>{dashboardStat.new_member}</h5>
                  <p>Number of new Registrations</p>
                  <p>(Last 7 days)</p>
                </div>
              </div>
            </div>
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
                <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
              </div>
              <button type="button" className="btn btn-purple" onClick={() => dispatch(fetchAdminPublishedNoteAction(search, "", month))}>
                Search
              </button>
              <div className="form-group">
                <select className="form-control" value={month} onChange={(e) => setMonth(e.target.value)}>
                  <option value={1}>Last 1 Month</option>
                  <option value={2}>Last 2 Month</option>
                  <option value={3}>Last 3 Month</option>
                  <option value={4}>Last 4 Month</option>
                  <option value={5}>Last 5 Month</option>
                  <option value={6}>Last 6 Month</option>
                </select>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={note_loading || user_note_loading}
              columns={columns}
              dataSource={published_notes}
              pagination={{
                current: page,
                pageSize: 10,
                total: published_notes.length,
                position: ["bottomCenter"],
                onChange: (val) => setPage(val),
              }}
              showSorterTooltip={false}
            />
          </div>
        </div>
      </div>

      <Modal centered={true} isOpen={isDialogOpen} toggle={() => setDialog(false)} className="reject-note-modal">
        <ModalHeader toggle={() => setDialog(false)}>
          {note?.title} - {note?.category?.name}
        </ModalHeader>
        <ModalBody>
          <Formik
            enableReinitialize={true}
            initialValues={formValue}
            validationSchema={rejectNoteSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(updateNoteUnpublishAction({ note_id: note.id, status: NOTE_STATUS.REMOVED, remark: values.remark }));
              setNote(null);
              setDialog(false);
            }}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="description">Remark *</label>
                    <textarea
                      id="description"
                      placeholder="write remark..."
                      className={inputError(errors.remark, touched.remark)}
                      value={values.remark}
                      name="remark"
                      onChange={handleChange}
                      onBlur={handleBlur}></textarea>
                    <ErrorText error={errors.remark} touched={touched.remark} />
                  </div>
                  <div className="modal-review-btn">
                    <button type="submit" className="btn reject-btn">
                      Unpublish
                    </button>
                    <button type="button" className="btn close-btn" onClick={() => setDialog(false)}>
                      Close
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Dashboard;
