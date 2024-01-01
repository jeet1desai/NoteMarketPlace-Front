import React, { useEffect, useState } from "react";
import { Table, Space, Dropdown, Menu, Tooltip } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteSpamReportAction, getSpamReportsAction } from "../../../store/AdminNotes/adminNoteActions";
import { userDownloadNoteAction } from "../../../store/UserNotes/userNoteActions";
import AlertDialog from "../../../components/AlertDialog";
import moment from "moment";

const SpamReports = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading: report_loading, spam_reports } = useSelector((state) => state.adminNoteReducer);
  const { loading: user_note_loading } = useSelector((state) => state.userNoteReducer);

  const [spamReport, setSpamReport] = useState(null);
  const [isDialogOpen, setDialog] = useState(false);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getSpamReportsAction(search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      title: "REPORTED BY",
      dataIndex: "buyer",
      render: (_, record) => `${record.reported_by.first_name} ${record.reported_by.last_name}`,
      sorter: (a, b) =>
        `${a.reported_by.first_name} ${a.reported_by.last_name}`.localeCompare(`${b.reported_by.first_name} ${b.reported_by.last_name}`),
    },
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
      title: "DATE EDITED",
      dataIndex: "modified_date",
      render: (date) => moment(date).format("DD-MM-YYYY, hh:mm"),
      sorter: (a, b) => moment(a.modified_date).unix() - moment(b.modified_date).unix(),
    },
    {
      title: "REMARK",
      dataIndex: "remarks",
      ellipsis: "true",
      render: (remarks) => (
        <Tooltip placement="topLeft" title={remarks}>
          {remarks}
        </Tooltip>
      ),
      sorter: (a, b) => a.remarks.localeCompare(b.remarks),
    },
    {
      title: "ACTION",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <DeleteIcon
            color="disabled"
            onClick={() => {
              setSpamReport(record);
              setDialog(true);
            }}
          />
          <Dropdown overlay={menu(record)}>
            <MoreVertIcon color="disabled" />
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div className="spam-report">
      <div className="container">
        <div className="spam-report-table">
          <div className="report-table-header">
            <div className="page-title">
              <p>Span Reports</p>
            </div>
            <div className="search">
              <div className="form-group has-search">
                <span className="fa fa-search search-icon"></span>
                <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
              </div>
              <button type="button" className="btn btn-purple" onClick={() => dispatch(getSpamReportsAction(search))}>
                Search
              </button>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={report_loading || user_note_loading}
              columns={columns}
              dataSource={spam_reports}
              pagination={{
                current: page,
                pageSize: 10,
                total: spam_reports.length,
                position: ["bottomCenter"],
                onChange: (val) => setPage(val),
              }}
              showSorterTooltip={false}
            />
          </div>
        </div>
      </div>

      <AlertDialog
        isOpen={isDialogOpen}
        handleClose={() => setDialog(false)}
        handleSubmit={() => {
          if (spamReport) {
            dispatch(deleteSpamReportAction(spamReport.id));
            setSpamReport(null);
            setDialog(false);
          }
        }}
        title="Delete spam report"
        content="Are you sure you want to delete reported issue?"
      />
    </div>
  );
};

export default SpamReports;
