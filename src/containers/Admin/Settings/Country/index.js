import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCountryAction, getCountriesAction } from "../../../../store/Configuration/configActions";
import moment from "moment";
import AlertDialog from "../../../../components/AlertDialog";

const Country = () => {
  const dispatch = useDispatch();
  const { loading, countries_list } = useSelector((state) => state.configReducer);

  const [countryPage, setCountryPage] = useState(1);
  const [search, setSearch] = useState("");

  const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
  const [deleteCountryId, setDeleteCountryId] = useState(null);

  useEffect(() => {
    dispatch(getCountriesAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    { title: "COUNTRY NAME", dataIndex: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
    { title: "COUNTRY CODE", dataIndex: "code", render: (code) => `+${code}`, sorter: (a, b) => a.code - b.code },
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
          <Link to={`/admin/manage-country/edit-country/${record.id}`}>
            <EditIcon color="disabled" />
          </Link>
          <DeleteIcon
            color="disabled"
            onClick={() => {
              setDeleteCountryId(record.id);
              setDeleteDialog(true);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="manage-countries">
      <div className="container">
        <div className="manage-country-table">
          <div className="country-header">
            <div className="page-title">
              <p>Manage Countries</p>
            </div>
            <div className="add-and-search">
              <Link to="/admin/manage-country/add-country" type="button" className="btn btn-purple">
                Add Country
              </Link>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="button" className="btn btn-purple" onClick={() => dispatch(getCountriesAction(search))}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={loading}
              columns={columns}
              dataSource={countries_list}
              pagination={{
                current: countryPage,
                pageSize: 10,
                total: countries_list.length,
                position: ["bottomCenter"],
                onChange: (val) => setCountryPage(val),
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
          dispatch(deleteCountryAction(deleteCountryId));
          setDeleteDialog(false);
          setDeleteCountryId(null);
        }}
        title="Delete Country"
        content="Are you sure you want to make this country inactive?"
      />
    </div>
  );
};

export default Country;
