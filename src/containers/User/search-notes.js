import React, { useEffect } from "react";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import "../../assets/css/search-notes.css";
import Note from "../../components/Note";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getUserCategoryListAction, getUserCountryListAction, getUserNoteTypeListAction } from "../../store/Configuration/configActions";

const SearchNotes = () => {
  const dispatch = useDispatch();

  const { loading: config_loading, country_list, category_list, note_type_list } = useSelector((state) => state.configReducer);

  useEffect(() => {
    dispatch(getUserCountryListAction());
    dispatch(getUserCategoryListAction());
    dispatch(getUserNoteTypeListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-notes">
      <Loader loading={config_loading} />
      <div className="page-top">
        <div className="page-top-title">
          <p>Search Notes</p>
        </div>
      </div>

      <div className="search-filter">
        <div className="content-box">
          <div className="container">
            <div className="page-title">
              <p>Search and Filter Notes</p>
            </div>
            <div className="input-boxes">
              <div className="form-group input-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search notes here..." />
              </div>
              <div>
                <div className="select-boxes">
                  <select>
                    <option value="">Select Type</option>
                    {note_type_list.map((type) => (
                      <option value={type.id} key={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <select>
                    <option value="">Select Category</option>
                    {category_list.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <select>
                    <option value="">Select Country</option>
                    {country_list.map((country) => (
                      <option value={country.id} key={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <select>
                    <option value="">Select Rating</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="notes">
        <div className="content-box">
          <div className="container">
            <div className="page-title">
              <p>Total 18 Notes</p>
            </div>

            <div className="note-list">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Link to="/search-notes/note/1">
                    <Note />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Link to="/search-notes/note/2">
                    <Note />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Link to="/search-notes/note/3">
                    <Note />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Link to="/search-notes/note/4">
                    <Note />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Link to="/search-notes/note/5">
                    <Note />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Link to="/search-notes/note/6">
                    <Note />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Link to="/search-notes/note/7">
                    <Note />
                  </Link>
                </div>
              </div>
            </div>

            <div className="pagination">
              <Pagination count={10} size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNotes;
