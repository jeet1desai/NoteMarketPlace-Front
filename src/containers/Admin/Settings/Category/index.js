import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space, Tooltip } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "../../../../assets/css/manage-category.css";
import { deleteCategoryAction, getCategoriesAction } from "../../../../store/Configuration/configActions";
import AlertDialog from "../../../../components/AlertDialog";

const Category = () => {
  const dispatch = useDispatch();
  const { loading, categories_list } = useSelector((state) => state.configReducer);

  const [categoryPage, setCategoryPage] = useState(1);
  const [search, setSearch] = useState("");

  const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);

  useEffect(() => {
    dispatch(getCategoriesAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { title: "SR NO.", dataIndex: "id", render: (_, record, index) => index + 1, sorter: (a, b) => a.id - b.id },
    {
      title: "CATEGORY",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
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
      render: (text, record) => {
        return (
          <Space size="middle" key={record.id}>
            <Link to={`/admin/manage-category/edit-category/${record.id}`}>
              <EditIcon color="disabled" />
            </Link>
            <DeleteIcon
              color="disabled"
              onClick={() => {
                setDeleteCategoryId(record.id);
                setDeleteDialog(true);
              }}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <div className="manage-category">
      <div className="container">
        <div className="manage-category-table">
          <div className="category-header">
            <div className="page-title">
              <p>Manage Category</p>
            </div>
            <div className="add-and-search">
              <Link to="/admin/manage-category/add-category" type="button" className="btn btn-purple">
                Add Category
              </Link>
              <div className="search">
                <div className="form-group has-search">
                  <span className="fa fa-search search-icon"></span>
                  <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Search" />
                </div>
                <button onClick={() => dispatch(getCategoriesAction(search))} type="button" className="btn btn-purple">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="antd-table">
            <Table
              loading={loading}
              columns={columns}
              dataSource={categories_list}
              pagination={{
                current: categoryPage,
                pageSize: 10,
                total: categories_list.length,
                position: ["bottomCenter"],
                onChange: (val) => setCategoryPage(val),
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
          dispatch(deleteCategoryAction(deleteCategoryId));
          setDeleteDialog(false);
          setDeleteCategoryId(null);
        }}
        title="Delete Category"
        content="Are you sure you want to make this category inactive?"
      />
    </div>
  );
};

export default Category;
