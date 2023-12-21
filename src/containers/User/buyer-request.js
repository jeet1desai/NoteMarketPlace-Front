import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "../../assets/css/buyer-request.css";
import { useDispatch, useSelector } from "react-redux";
import { userAllowDownloadNoteAction, userBuyerRequestAction } from "../../store/UserNotes/userNoteActions";
import AlertDialog from "../../components/AlertDialog";
import moment from "moment";

const BuyerRequest = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [isAllowDialogOpen, setAllowDialog] = useState(false);
  const [allowDownloadId, setAllowDownloadId] = useState(null);

  const { loading: note_loading, buyer_request } = useSelector((state) => state.userNoteReducer);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            setAllowDownloadId(record.id);
            setAllowDialog(true);
          }}>
          Yes, I Received
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
      title: "PHONE NO",
      dataIndex: "phone_number",
      render: (_, record) =>
        record.downloader.phone_number ? `+${record.downloader.phone_country_code.code} ${record.downloader.phone_number || ""}` : "N/a",
      sorter: (a, b) =>
        `+${a.downloader.phone_country_code.code} ${a.downloader.phone_number || ""}`.localeCompare(
          `+${b.downloader.phone_country_code.code} ${b.downloader.phone_number || ""}`
        ),
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

  useEffect(() => {
    dispatch(userBuyerRequestAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="buyer-request">
      <div className="content-box">
        <div className="container">
          <div className="buyer-request-table">
            <div className="stats-heading">
              <div className="page-title">
                <p>Buyer Request</p>
              </div>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(userBuyerRequestAction(search))}>
                  Search
                </button>
              </div>
            </div>

            <div className="antd-table">
              <Table
                loading={note_loading}
                columns={columns}
                dataSource={buyer_request}
                pagination={{
                  current: page,
                  pageSize: 10,
                  total: buyer_request.length,
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
        isOpen={isAllowDialogOpen}
        handleClose={() => setAllowDialog(false)}
        handleSubmit={() => {
          dispatch(userAllowDownloadNoteAction({ download_id: allowDownloadId }));
          setAllowDownloadId(null);
          setAllowDialog(false);
        }}
        title="Allow to download note"
        content="Are you sure you have received the payment for note?"
      />
    </div>
  );
};

export default BuyerRequest;
