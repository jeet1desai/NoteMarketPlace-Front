import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminAction, getAdminsAction } from "../../../../store/Configuration/configActions";
import moment from "moment";
import AlertDialog from "../../../../components/AlertDialog";

const Admin = () => {
  const dispatch = useDispatch();
  const { loading, admins_list } = useSelector((state) => state.configReducer);

  const [adminPage, setAdminPage] = useState(1);
  const [adminSearch, setAdminSearch] = useState("");

  const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
  const [deleteAdminId, setDeleteAdminId] = useState(null);

  const columns = [
    {
      title: "SR NO.",
      dataIndex: "id",
      render: (_, record, index) => index + 1,
      sorter: (a, b) => a.id - b.id,
    },
    { title: "FIRST NAME", dataIndex: "first_name", sorter: (a, b) => a.first_name.localeCompare(b.first_name) },
    { title: "LAST NAME", dataIndex: "last_name", sorter: (a, b) => a.last_name.localeCompare(b.last_name) },
    { title: "EMAIL", dataIndex: "email", sorter: (a, b) => a.email.localeCompare(b.email) },
    {
      title: "PHONE NO",
      dataIndex: "phone",
      render: (_, record) => `+${record.phone_country_code.code} ${record.phone_number || ""}`,
      sorter: (a, b) =>
        `+${a.phone_country_code.code} ${a.phone_number || ""}`.localeCompare(`+${b.phone_country_code.code} ${b.phone_number || ""}`),
    },
    {
      title: "DATE ADDED",
      dataIndex: "created_date",
      render: (date) => moment(date).format("DD-MM-YYYY, hh:mm"),
      sorter: (a, b) => moment(a.created_date).unix() - moment(b.created_date).unix(),
    },
    {
      title: "ACTIVE",
      dataIndex: "is_active",
      render: (is_active) => (is_active ? "Yes" : "No"),
      sorter: (a, b) => a.is_active - b.is_active,
    },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/manage-admin/edit-admin/${record.id}`}>
            <EditIcon color="disabled" />
          </Link>
          <DeleteIcon
            color="disabled"
            onClick={() => {
              setDeleteAdminId(record.id);
              setDeleteDialog(true);
            }}
          />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAdminsAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="manage-admin">
      <div className="container">
        <div className="manage-admin-table">
          <div className="admin-header">
            <div className="page-title">
              <p>Manage Administrator</p>
            </div>
            <div className="add-and-search">
              <Link to="/admin/manage-admin/add-admin" type="button" className="btn btn-purple">
                Add Administrator
              </Link>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setAdminSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(getAdminsAction(adminSearch))}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={loading}
              columns={columns}
              dataSource={admins_list}
              pagination={{
                current: adminPage,
                pageSize: 10,
                total: admins_list.length,
                position: ["bottomCenter"],
                onChange: (val) => setAdminPage(val),
              }}
              showSorterTooltip={false}
            />
          </div>
        </div>
      </div>

      <AlertDialog
        isOpen={isDeleteDialogOpen}
        handleClose={() => setDeleteDialog(false)}
        handleSubmit={() => {
          dispatch(deleteAdminAction(deleteAdminId));
          setDeleteDialog(false);
          setDeleteAdminId(null);
        }}
        title="Delete Admin"
        content="Are you sure you want to make this administrator inactive?"
      />
    </div>
  );
};

export default Admin;
