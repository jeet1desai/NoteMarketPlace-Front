import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { Table, Space, Dropdown, Menu } from "antd";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "../../../assets/css/my-download.css";
import { useDispatch, useSelector } from "react-redux";
import { userAddReviewAction, userDownloadNoteAction, userMyDownloadNoteAction } from "../../../store/UserNotes/userNoteActions";
import moment from "moment";
import { reviewSchema } from "../../../utils/schema";
import { Formik, Form } from "formik";
import ErrorText, { inputError } from "../../../components/Error";
import AlertDialog from "../../../components/AlertDialog";

const MyDownload = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const [downloadId, setDownloadId] = useState(null);

  const [isReportIssueDialogOpen, setReportIssueDialogOpen] = useState(false);

  const [formValue] = useState({
    rating: 0,
    comment: "",
  });

  const { loading: note_loading, my_download_note } = useSelector((state) => state.userNoteReducer);

  useEffect(() => {
    dispatch(userMyDownloadNoteAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item onClick={() => dispatch(userDownloadNoteAction({ note_id: record.note.id }))}>Download Note</Menu.Item>
        <Menu.Item
          onClick={() => {
            setDownloadId(record.id);
            setModalOpen(true);
          }}>
          Add Review/Feedback
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            setReportIssueDialogOpen(true);
          }}>
          Report as Inappropriate
        </Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    {
      title: "NOTE TITLE",
      dataIndex: "title",
      render: (_, record) => <Link to={`/search-notes/note/${record.note.id}`}>{record.note.title}</Link>,
      sorter: (a, b) => a.note.title.localeCompare(b.note.title),
    },
    {
      title: "CATEGORY",
      dataIndex: "category",
      render: (_, record) => record.note.category.name,
      sorter: (a, b) => a.note.category.name.localeCompare(b.note.category.name),
    },
    {
      title: "BUYER",
      dataIndex: "buyer",
      render: (_, record) => record.downloader.email,
      sorter: (a, b) => a.downloader.email.localeCompare(b.downloader.email),
    },
    {
      title: "SELL TYPE",
      dataIndex: "is_paid",
      render: (_, record) => (record.note.is_paid ? "Paid" : "Free"),
      sorter: (a, b) => a.note.status - b.note.status,
    },
    {
      title: "PRICE",
      dataIndex: "selling_price",
      render: (_, record) => `$ ${record.note.selling_price}`,
      sorter: (a, b) => a.note.selling_price - b.note.selling_price,
    },
    {
      title: "DOWNLOADED DATE/TIME",
      dataIndex: "attachment_downloaded_date",
      render: (date) => moment(date).format("DD-MM-YYYY, hh:mm"),
      sorter: (a, b) => moment(a.attachment_downloaded_date).unix() - moment(b.attachment_downloaded_date).unix(),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/search-notes/note/${record.note.id}`}>
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
      <div className="content-box">
        <div className="container">
          <div className="my-download-table">
            <div className="stats-heading">
              <div className="page-title">
                <p>My Downloads</p>
              </div>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(userMyDownloadNoteAction(search))}>
                  Search
                </button>
              </div>
            </div>

            <div className="antd-table">
              <Table
                loading={note_loading}
                columns={columns}
                dataSource={my_download_note}
                pagination={{
                  current: page,
                  pageSize: 10,
                  total: my_download_note.length,
                  position: ["bottomCenter"],
                  onChange: (val) => setPage(val),
                }}
                showSorterTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>

      <AlertDialog
        isOpen={isReportIssueDialogOpen}
        handleClose={() => setReportIssueDialogOpen(false)}
        handleSubmit={() => {
          setReportIssueDialogOpen(false);
        }}
        title="Report an issue"
        content="Are you sure you want to mark this report as spam?"
      />

      <Modal centered={true} isOpen={isModalOpen} toggle={() => setModalOpen(false)}>
        <ModalHeader toggle={() => setModalOpen(false)}>Add Review</ModalHeader>
        <ModalBody>
          <Formik
            enableReinitialize={true}
            initialValues={formValue}
            validationSchema={reviewSchema}
            onSubmit={(values, { resetForm }) => {
              if (downloadId) {
                values["download_id"] = downloadId;

                dispatch(userAddReviewAction(values));

                resetForm();
                setDownloadId(null);
                setModalOpen(false);
              }
            }}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div>
                    <Rating defaultValue={values.rating} name="rating" size="large" onChange={handleChange} onBlur={handleBlur} />
                  </div>
                  <ErrorText error={errors.rating} touched={touched.rating} />
                  <div className="form-group">
                    <label htmlFor="description">Comments *</label>
                    <textarea
                      id="description"
                      placeholder="Comments..."
                      className={inputError(errors.comment, touched.comment)}
                      value={values.comment}
                      name="comment"
                      onChange={handleChange}
                      onBlur={handleBlur}></textarea>
                    <ErrorText error={errors.comment} touched={touched.comment} />
                  </div>
                  <div className="modal-review-btn">
                    <button type="submit" className="btn submit-btn btn-purple">
                      Submit
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

export default MyDownload;
