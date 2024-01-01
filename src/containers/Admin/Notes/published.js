import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAction } from "../../../store/Profile/profileActions";
import { Link, useLocation, useHistory } from "react-router-dom";
import { userDownloadNoteAction } from "../../../store/UserNotes/userNoteActions";
import { fetchAdminPublishedNoteAction, updateNoteUnpublishAction } from "../../../store/AdminNotes/adminNoteActions";
import moment from "moment";
import ErrorText, { inputError } from "../../../components/Error";
import { rejectNoteSchema } from "../../../utils/schema";
import { Form, Formik } from "formik";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { NOTE_STATUS } from "../../../utils/enum";

const Published = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const queryParams = new URLSearchParams(location.search);

  const { loading: profile_loading, seller_list } = useSelector((state) => state.profileReducer);
  const { loading: note_loading, published_notes } = useSelector((state) => state.adminNoteReducer);
  const { loading: user_note_loading } = useSelector((state) => state.userNoteReducer);

  const [seller, setSeller] = useState("");

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [formValue] = useState({
    remark: "",
  });

  const [note, setNote] = useState(null);
  const [isDialogOpen, setDialog] = useState(false);

  useEffect(() => {
    dispatch(getSellerAction());

    const sellerFilter = queryParams.get("seller");
    if (sellerFilter) {
      setSeller(sellerFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchAdminPublishedNoteAction(search, seller));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seller]);

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
      title: "PUBLISHED DATE",
      dataIndex: "published_date",
      render: (published_date) => (published_date ? moment(published_date).format("DD-MM-YYYY, hh:mm") : ""),
      sorter: (a, b) => moment(a.published_date).unix() - moment(b.published_date).unix(),
    },
    {
      title: "APPROVED BY",
      dataIndex: "approver",
      render: (_, record) => `${record.actioned_by.first_name} ${record.actioned_by.last_name}`,
      sorter: (a, b) =>
        `${a.actioned_by.first_name} ${a.actioned_by.last_name}`.localeCompare(`${b.actioned_by.first_name} ${b.actioned_by.last_name}`),
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
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(fetchAdminPublishedNoteAction(search, seller))}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={profile_loading || note_loading || user_note_loading}
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

export default Published;
