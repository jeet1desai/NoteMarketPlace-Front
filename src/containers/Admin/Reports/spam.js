import React from "react";
import { Table, Space, Dropdown, Menu, Tooltip } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";

import AdminHeader from "../../../hoc/admin/header";
import AdminFooter from "../../../hoc/admin/footer";

import "../../../assets/css/spam-report.css";

export default function SpamReports() {
  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item>View More Details</Menu.Item>
        <Menu.Item
          onClick={() => {
            console.log(record.id);
          }}
        >
          Download Note
        </Menu.Item>
      </Menu>
    );
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id" },
    { title: "REPORTED BY", dataIndex: "reporter" },
    {
      title: "NOTE TITLE",
      key: "title",
      dataIndex: "title",
      render: (title) => <span>{title}</span>,
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    { title: "CATEGORY", dataIndex: "category", sorter: true },
    { title: "DATE EDITED", dataIndex: "time" },
    {
      title: "REMARK",
      dataIndex: "remark",
      ellipsis: "true",
      render: (remark) => (
        <Tooltip placement="topLeft" title={remark}>
          {remark}
        </Tooltip>
      ),
    },
    {
      title: "ACTION",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <DeleteIcon color="disabled" />
          <Dropdown overlay={menu(record)}>
            <MoreVertIcon color="disabled" />
          </Dropdown>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      title: "John Brown",
      category: "Science",
      reporter: "Khyati Patel",
      remark: "loenm oinpkf woenad ldkmsfoiw fkfowf fkmwlf ofkmw ofmw",
      time: "27 Nov 2020, 11:20:30",
    },
  ];

  return (
    <>
      <AdminHeader />
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <button type="button" className="btn btn-purple">
                  Search
                </button>
              </div>
            </div>

            <div className="antd-table">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{
                  current: 1,
                  pageSize: 1,
                  total: 2,
                  position: ["bottomCenter"],
                }}
                showSorterTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>
      <AdminFooter />
    </>
  );
}
