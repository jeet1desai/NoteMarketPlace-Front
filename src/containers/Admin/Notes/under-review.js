import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Table, Space, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAction } from "../../../store/Profile/profileActions";
import { useLocation, useHistory } from "react-router-dom";
import {
  fetchAdminNoteUnderReviewAction,
  updateNoteApproveAction,
  updateNoteInReviewAction,
  updateNoteRejectAction,
} from "../../../store/AdminNotes/adminNoteActions";
import moment from "moment";
import { NOTE_STATUS, handleStatus } from "../../../utils/enum";
import { userDownloadNoteAction } from "../../../store/UserNotes/userNoteActions";
import AlertDialog from "../../../components/AlertDialog";
import { Form, Formik } from "formik";
import ErrorText, { inputError } from "../../../components/Error";
import { rejectNoteSchema } from "../../../utils/schema";

const UnderReview = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const queryParams = new URLSearchParams(location.search);

  const { loading: profile_loading, seller_list } = useSelector((state) => state.profileReducer);
  const { loading: note_loading, under_review_notes } = useSelector((state) => state.adminNoteReducer);
  const { loading: user_note_loading } = useSelector((state) => state.userNoteReducer);

  const [seller, setSeller] = useState("");

  const [isReviewDialogOpen, setReviewDialog] = useState(false);
  const [isApproveDialogOpen, setApproveDialog] = useState(false);
  const [isRejectDialogOpen, setRejectDialog] = useState(false);

  const [note, setNote] = useState(null);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [formValue] = useState({
    remark: "",
  });

  useEffect(() => {
    dispatch(getSellerAction());

    const sellerFilter = queryParams.get("seller");
    if (sellerFilter) {
      setSeller(sellerFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchAdminNoteUnderReviewAction(search, seller));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seller]);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item onClick={() => history.push(`/admin/note/${record.id}`)}>View More Details</Menu.Item>
        <Menu.Item onClick={() => dispatch(userDownloadNoteAction({ note_id: record.id }))}>Download Note</Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    {
      title: "NOTE TITLE",
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
      title: "SELLER",
      dataIndex: "seller",
      render: (_, record) => `${record.seller.first_name} ${record.seller.last_name}`,
      sorter: (a, b) => `${a.seller.first_name} ${a.seller.last_name}`.localeCompare(`${b.seller.first_name} ${b.seller.last_name}`),
    },
    {
      title: "",
      key: "seller",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/members/${record.seller.id}`}>
            <VisibilityOutlinedIcon color="disabled" />
          </Link>
        </Space>
      ),
    },
    {
      title: "DATE ADDED",
      dataIndex: "created_date",
      render: (created_date) => moment(created_date).format("DD-MM-YYYY, hh:mm"),
      sorter: (a, b) => moment(a.created_date).unix() - moment(b.created_date).unix(),
    },
    { title: "STATUS", dataIndex: "status", render: (status) => handleStatus(status), sorter: (a, b) => (a.status > b.status ? 1 : -1) },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setNote(record);
              setApproveDialog(true);
            }}>
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setNote(record);
              setRejectDialog(true);
            }}>
            Reject
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={record.status === NOTE_STATUS.IN_REVIEW}
            onClick={() => {
              setNote(record);
              setReviewDialog(true);
            }}>
            In Review
          </Button>
        </Space>
      ),
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
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(fetchAdminNoteUnderReviewAction(search, seller))}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={profile_loading || note_loading || user_note_loading}
              columns={columns}
              dataSource={under_review_notes}
              pagination={{
                current: page,
                pageSize: 10,
                total: under_review_notes.length,
                position: ["bottomCenter"],
                onChange: (val) => setPage(val),
              }}
              showSorterTooltip={false}
            />
          </div>
        </div>
      </div>

      <Modal centered={true} isOpen={isRejectDialogOpen} toggle={() => setRejectDialog(false)} className="reject-note-modal">
        <ModalHeader toggle={() => setRejectDialog(false)}>
          {note?.title} - {note?.category?.name}
        </ModalHeader>
        <ModalBody>
          <Formik
            enableReinitialize={true}
            initialValues={formValue}
            validationSchema={rejectNoteSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(updateNoteRejectAction({ note_id: note.id, status: NOTE_STATUS.REJECTED, remark: values.remark }));
              setNote(null);
              setRejectDialog(false);
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
                      Reject
                    </button>
                    <button type="button" className="btn close-btn" onClick={() => setRejectDialog(false)}>
                      Close
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </Modal>

      <AlertDialog
        isOpen={isReviewDialogOpen}
        handleClose={() => setReviewDialog(false)}
        handleSubmit={() => {
          dispatch(updateNoteInReviewAction({ note_id: note.id, status: NOTE_STATUS.IN_REVIEW }));
          setNote(null);
          setReviewDialog(false);
        }}
        title="In Review note"
        content="Via marking the note In Review – System will let user know that review process has been initiated. "
      />

      <AlertDialog
        isOpen={isApproveDialogOpen}
        handleClose={() => setApproveDialog(false)}
        handleSubmit={() => {
          dispatch(updateNoteApproveAction({ note_id: note.id, status: NOTE_STATUS.APPROVED }));
          setNote(null);
          setApproveDialog(false);
        }}
        title="Approve note"
        content="If you approve the notes – System will publish the notes over portal."
      />
    </div>
  );
};

export default UnderReview;
