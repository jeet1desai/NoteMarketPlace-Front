import React, { useEffect, useState } from "react";
import { Table, Space, Tooltip } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlertDialog from "../../../../components/AlertDialog";
import { deleteTypeAction, getTypesAction } from "../../../../store/Configuration/configActions";
import moment from "moment";

const Type = () => {
  const dispatch = useDispatch();
  const { loading, types_list } = useSelector((state) => state.configReducer);

  const [typePage, setTypePage] = useState(1);
  const [search, setSearch] = useState("");

  const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
  const [deleteTypeId, setDeleteTypeId] = useState(null);

  useEffect(() => {
    dispatch(getTypesAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    { title: "TYPE", dataIndex: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      ellipsis: "true",
      render: (desc) => (
        <Tooltip placement="topLeft" title={desc}>
          {desc}
        </Tooltip>
      ),
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "DATE ADDED",
      dataIndex: "created_date",
      render: (date) => `${moment(date).utc().format("DD-MM-YYYY, hh:mm")}`,
      sorter: (a, b) => moment(a.created_date).unix() - moment(b.created_date).unix(),
    },
    {
      title: "ADDED BY",
      dataIndex: "created_by",
      render: (created_by) => `${created_by.first_name} ${created_by.last_name}`,
      sorter: (a, b) =>
        `${a.created_by.first_name} ${a.created_by.last_name}`.localeCompare(`${b.created_by.first_name} ${b.created_by.last_name}`),
    },
    {
      title: "ACTIVE",
      dataIndex: "is_active",
      render: (isActive) => (isActive ? "Yes" : "No"),
      sorter: (a, b) => a.is_active - b.is_active,
    },
    {
      title: "ACTION",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/admin/manage-type/edit-type/${record.id}`}>
            <EditIcon color="disabled" />
          </Link>
          <DeleteIcon
            color="disabled"
            onClick={() => {
              setDeleteTypeId(record.id);
              setDeleteDialog(true);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="manage-type">
      <div className="container">
        <div className="manage-type-table">
          <div className="type-header">
            <div className="page-title">
              <p>Manage Type</p>
            </div>
            <div className="add-and-search">
              <Link to="/admin/manage-type/add-type" type="button" className="btn btn-purple">
                Add Type
              </Link>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(getTypesAction(search))}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={loading}
              columns={columns}
              dataSource={types_list}
              pagination={{
                current: typePage,
                pageSize: 10,
                total: types_list.length,
                position: ["bottomCenter"],
                onChange: (val) => setTypePage(val),
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
          dispatch(deleteTypeAction(deleteTypeId));
          setDeleteDialog(false);
          setDeleteTypeId(null);
        }}
        title="Delete Type"
        content="Are you sure you want to make this type inactive?"
      />
    </div>
  );
};

export default Type;
