import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space, Tooltip } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  fetchAllCategoriesAction,
  deleteCategoryAction,
} from "../../../../store/AdminCategory/categoryActions";

import "../../../../assets/css/manage-category.css";

const Category = () => {
  const loading = useSelector((state) => state.categoryReducer.loading);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  const [cPage, setCPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllCategoriesAction());
  }, []);

  const handlePagination = (e) => {
    setCPage(e.current);
  };

  const columns = [
    { title: "SR NO.", dataIndex: "id", sorter: (a, b) => a.id - b.id },
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
      dataIndex: "modifieddate",
      render: (date) => `${moment(date).utc().format("DD MMM YYYY, hh:mm:ss")}`,
      sorter: (a, b) => a.modifieddate.localeCompare(b.modifieddate),
    },
    {
      title: "ADDED BY",
      dataIndex: "",
      render: ({ firstname, lastname }) => `${firstname} ${lastname}`,
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
    },
    {
      title: "ACTIVE",
      dataIndex: "isactive",
      render: (isActive) => (isActive ? "Yes" : "No"),
      sorter: (a, b) => a.isactive - b.isactive,
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
                dispatch(deleteCategoryAction(record.id));
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
              <Link
                to="/admin/manage-category/add-category"
                type="button"
                className="btn btn-purple">
                Add Category
              </Link>
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
          </div>

          <div className="antd-table">
            <Table
              loading={loading}
              columns={columns}
              dataSource={categories}
              pagination={{
                current: cPage,
                pageSize: 10,
                total: categories.length,
                position: ["bottomCenter"],
              }}
              onChange={handlePagination}
              showSorterTooltip={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
