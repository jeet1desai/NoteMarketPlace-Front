import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBuyerAction, getSellerAction } from "../../../store/Profile/profileActions";
import { useLocation, useHistory } from "react-router-dom";
import { fetchAdminDownloadedNoteAction } from "../../../store/AdminNotes/adminNoteActions";
import { userDownloadNoteAction } from "../../../store/UserNotes/userNoteActions";
import moment from "moment";

const Downloaded = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const queryParams = new URLSearchParams(location.search);

  const { loading: profile_loading, seller_list, buyer_list } = useSelector((state) => state.profileReducer);
  const { loading: note_loading, downloaded_notes } = useSelector((state) => state.adminNoteReducer);
  const { loading: user_note_loading } = useSelector((state) => state.userNoteReducer);

  const [seller, setSeller] = useState("");
  const [buyer, setBuyer] = useState("");

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sellerFilter = queryParams.get("seller");
    if (sellerFilter) {
      setSeller(sellerFilter);
    }
    dispatch(getSellerAction());
    dispatch(getBuyerAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchAdminDownloadedNoteAction(search, seller, buyer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seller, buyer]);

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item onClick={() => history.push(`/admin/note/${record.note.id}`)}>View More Details</Menu.Item>
        <Menu.Item onClick={() => dispatch(userDownloadNoteAction({ note_id: record.note.id }))}>Download Note</Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    {
      title: "NOTE TITLE",
      dataIndex: "title",
      render: (_, record) => <Link to={`/admin/note/${record.note.id}`}>{record.note.title}</Link>,
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
      render: (_, record) => `${record.downloader.first_name} ${record.downloader.last_name}`,
      sorter: (a, b) =>
        `${a.downloader.first_name} ${a.downloader.last_name}`.localeCompare(`${b.downloader.first_name} ${b.downloader.last_name}`),
    },
    {
      title: "",
      key: "buyer",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/members/${record.downloader.id}`}>
            <VisibilityOutlinedIcon color="disabled" />
          </Link>
        </Space>
      ),
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
          <Dropdown overlay={menu(record)}>
            <MoreVertIcon color="disabled" />
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div className="downloaded-notes">
      <div className="container">
        <div className="downloaded-table">
          <div className="downloaded-header">
            <div className="page-title">
              <p>Downloaded Notes</p>
            </div>
            <div className="filter-search">
              <div className="filter">
                <div className="form-group">
                  <label>Seller</label>
                  <select value={seller} onChange={(e) => setSeller(e.target.value)} className="form-control">
                    <option value="">Select Seller</option>
                    {seller_list.map((seller) => (
                      <option value={seller.id} key={seller.id}>
                        {seller.first_name} {seller.last_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Buyer</label>
                  <select value={buyer} className="form-control" onChange={(e) => setBuyer(e.target.value)}>
                    <option value="">Select Buyer</option>
                    {buyer_list.map((buyer) => (
                      <option value={buyer.id} key={buyer.id}>
                        {buyer.first_name} {buyer.last_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button
                  type="button"
                  className="btn search-btn btn-purple"
                  onClick={() => dispatch(fetchAdminDownloadedNoteAction(search, seller, buyer))}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={profile_loading || note_loading || user_note_loading}
              columns={columns}
              dataSource={downloaded_notes}
              pagination={{
                current: page,
                pageSize: 10,
                total: downloaded_notes.length,
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

export default Downloaded;
