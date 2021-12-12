import React from "react";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

import "../../assets/css/search-notes.css";

import Note from "../../components/Note";
import UserHeader from "../../hoc/user/header";
import UserFooter from "../../hoc/user/footer";

export default function SearchNotes() {
  return (
    <>
      <UserHeader />
      <div className="search-notes">
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search notes here..."
                  />
                </div>
                <div>
                  <div className="select-boxes">
                    <select>
                      <option className="muted">Select Type</option>
                      <option value="">Mustard</option>
                      <option value="">Ketchup</option>
                      <option value="">Relish</option>
                    </select>
                    <select>
                      <option className="muted">Select Category</option>
                      <option value="">Mustard</option>
                      <option value="">Ketchup</option>
                      <option value="">Relish</option>
                    </select>
                    <select>
                      <option className="muted">Select University</option>
                      <option value="">Mustard</option>
                      <option value="">Ketchup</option>
                      <option value="">Relish</option>
                    </select>
                    <select>
                      <option className="muted">Select Course</option>
                      <option value="">Mustard</option>
                      <option value="">Ketchup</option>
                      <option value="">Relish</option>
                    </select>
                    <select>
                      <option className="muted">Select Country</option>
                      <option value="">Mustard</option>
                      <option value="">Ketchup</option>
                      <option value="">Relish</option>
                    </select>
                    <select>
                      <option className="muted">Select Rating</option>
                      <option value="">Mustard</option>
                      <option value="">Ketchup</option>
                      <option value="">Relish</option>
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
      <UserFooter />
    </>
  );
}
