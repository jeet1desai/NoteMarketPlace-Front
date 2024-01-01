import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAction } from "../../../store/Profile/profileActions";
import { fetchAdminRejectedNoteAction, updateNoteApproveAction } from "../../../store/AdminNotes/adminNoteActions";
import { userDownloadNoteAction } from "../../../store/UserNotes/userNoteActions";
import { useHistory } from "react-router-dom";
import moment from "moment";
import AlertDialog from "../../../components/AlertDialog";
import { NOTE_STATUS } from "../../../utils/enum";

const Rejected = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading: profile_loading, seller_list } = useSelector((state) => state.profileReducer);
  const { loading: note_loading, rejected_notes } = useSelector((state) => state.adminNoteReducer);
  const { loading: user_note_loading } = useSelector((state) => state.userNoteReducer);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [seller, setSeller] = useState("");

  const [note, setNote] = useState(null);
  const [isDialogOpen, setDialog] = useState(false);

  useEffect(() => {
    dispatch(getSellerAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchAdminRejectedNoteAction(search, seller));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seller]);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            setNote(record);
            setDialog(true);
          }}>
          Approve
        </Menu.Item>
        <Menu.Item onClick={() => dispatch(userDownloadNoteAction({ note_id: record.id }))}>Download Note</Menu.Item>
        <Menu.Item onClick={() => history.push(`/admin/note/${record.id}`)}>View More Details</Menu.Item>
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
    {
      title: "REJECT BY",
      dataIndex: "actioned_by",
      render: (_, record) => `${record.actioned_by.first_name} ${record.actioned_by.last_name}`,
      sorter: (a, b) =>
        `${a.actioned_by.first_name} ${a.actioned_by.last_name}`.localeCompare(`${b.actioned_by.first_name} ${b.actioned_by.last_name}`),
    },
    {
      title: "REMARK",
      dataIndex: "admin_remark",
      ellipsis: "true",
      render: (admin_remark) => (
        <Tooltip placement="topLeft" title={admin_remark}>
          {admin_remark}
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
                <button type="button" className="btn btn-purple" onClick={() => dispatch(fetchAdminRejectedNoteAction(search, seller))}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={profile_loading || note_loading || user_note_loading}
              columns={columns}
              dataSource={rejected_notes}
              pagination={{
                current: page,
                pageSize: 10,
                total: rejected_notes.length,
                position: ["bottomCenter"],
                onChange: (val) => setPage(val),
              }}
            />
          </div>
        </div>
      </div>

      <AlertDialog
        isOpen={isDialogOpen}
        handleClose={() => setDialog(false)}
        handleSubmit={() => {
          dispatch(updateNoteApproveAction({ note_id: note.id, status: NOTE_STATUS.APPROVED }));
          setNote(null);
          setDialog(false);
        }}
        title="Approve note"
        content="If you approve the notes – System will publish the notes over portal."
      />
    </div>
  );
};

export default Rejected;
