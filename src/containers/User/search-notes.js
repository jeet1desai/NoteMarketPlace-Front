import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Note from "../../components/Note";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getUserCategoryListAction, getUserCountryListAction, getUserNoteTypeListAction } from "../../store/Configuration/configActions";
import { getSearchNotesAction } from "../../store/UserNotes/userNoteActions";
import _ from "lodash";
import { Pagination } from "@mui/material";

const SearchNotes = () => {
  const dispatch = useDispatch();

  const { loading: config_loading, country_list, category_list, note_type_list } = useSelector((state) => state.configReducer);
  const { loading: note_loading, search_notes, pagination } = useSelector((state) => state.userNoteReducer);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUserCountryListAction());
    dispatch(getUserCategoryListAction());
    dispatch(getUserNoteTypeListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getSearchNotesAction(search, category, country, type, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category, country, type, page]);

  const debouncedResults = useMemo(() => {
    return _.debounce((e) => {
      setSearch(e.target.value);
    }, 500);
  }, []);

  return (
    <div className="search-notes">
      <Loader loading={config_loading || note_loading} />
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
                <input type="text" className="form-control" placeholder="Search notes here..." onChange={debouncedResults} />
              </div>
              <div>
                <div className="select-boxes">
                  <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Select Type</option>
                    {note_type_list.map((type) => (
                      <option value={type.id} key={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {category_list.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Select Country</option>
                    {country_list.map((country) => (
                      <option value={country.id} key={country.id}>
                        {country.name}
                      </option>
                    ))}
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
            <div className="page-title">{search_notes.length !== 0 && <p>Total {pagination?.count} Notes</p>}</div>
            <div className="note-list">
              <div className="row">
                {search_notes.length === 0 && (
                  <div className="col-lg-12">
                    <div className="page-title">
                      <p>No Note Found!</p>
                    </div>
                  </div>
                )}
                {search_notes.map((note) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={note.id}>
                      <Link to={`/search-notes/note/${note.id}`}>
                        <Note
                          image={note.display_picture}
                          title={note.title}
                          university={note.university_name}
                          page={note.number_of_pages}
                          date={note.published_date}
                          spam_count={note.spam_count}
                          avg_review={note.avg_rating}
                          review_count={note.rating_count}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            {search_notes.length !== 0 && (
              <div className="pagination">
                <Pagination page={page} count={pagination?.total} size="large" onChange={(e, new_page) => setPage(new_page)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNotes;
