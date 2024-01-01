import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space, Dropdown, Menu, Tooltip } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch, useSelector } from "react-redux";
import { userCloneNoteAction, userDownloadNoteAction, userMyRejectedNoteAction } from "../../../store/UserNotes/userNoteActions";

const MyRejectedNote = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { loading: note_loading, my_rejected_note } = useSelector((state) => state.userNoteReducer);

  useEffect(() => {
    dispatch(userMyRejectedNoteAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item onClick={() => dispatch(userDownloadNoteAction({ note_id: record.id }))}>Download Note</Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    {
      title: "NOTE TITLE",
      dataIndex: "title",
      render: (_, record) => <Link to={`/search-notes/note/${record.id}`}>{record.title}</Link>,
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "CATEGORY",
      dataIndex: "category",
      render: (_, record) => record.category.name,
      sorter: (a, b) => a.category.name.localeCompare(b.category.name),
    },
    {
      title: "REMARK",
      dataIndex: "admin_remark",
      ellipsis: "true",
      render: (remark) => (
        <Tooltip placement="topLeft" title={remark}>
          {remark}
        </Tooltip>
      ),
    },
    {
      title: "CLONE",
      dataIndex: "",
      render: (_, record) => (
        <span className="clone-note" onClick={() => dispatch(userCloneNoteAction({ note_id: record.id }))}>
          Clone
        </span>
      ),
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/search-notes/note/${record.id}`}>
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
    <div className="my-rejected-note">
      <div className="content-box">
        <div className="container">
          <div className="my-rejected-note-table">
            <div className="stats-heading">
              <div className="page-title">
                <p>My Rejected Notes</p>
              </div>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(userMyRejectedNoteAction(search))}>
                  Search
                </button>
              </div>
            </div>

            <div className="antd-table">
              <Table
                loading={note_loading}
                columns={columns}
                dataSource={my_rejected_note}
                pagination={{
                  current: page,
                  pageSize: 10,
                  total: my_rejected_note.length,
                  position: ["bottomCenter"],
                  onChange: (val) => setPage(val),
                }}
                showSorterTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRejectedNote;
