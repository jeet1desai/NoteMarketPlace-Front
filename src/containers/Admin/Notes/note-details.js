import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import CustomerReview from "../../../components/CustomerReview";
import "../../../assets/css/note-detail.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import {
  deleteNoteReviewAction,
  fetchNoteAction,
  getNoteReviewAction,
  userDownloadNoteAction,
} from "../../../store/UserNotes/userNoteActions";
import { useParams } from "react-router-dom";
import moment from "moment";

const AdminNoteDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading: note_loading, note, review_list } = useSelector((state) => state.userNoteReducer);

  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    category: "",
    university_name: "",
    country: "",
    course: "",
    course_code: "",
    professor: "",
    number_of_pages: "",
    approve_date: "",
    display_picture: "",
    notes_preview: "",
    avg_rating: 0,
    rating_count: 0,
    spam_count: 0,
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchNoteAction(id));
      dispatch(getNoteReviewAction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (note) {
      setNoteDetails({
        title: note.title,
        description: note.description,
        category: note.category?.name || "",
        display_picture: note.display_picture,
        notes_preview: note.notes_preview,
        number_of_pages: note.number_of_pages,
        country: note.country?.name || "",
        university_name: note.university_name,
        course: note.course,
        course_code: note.course_code,
        professor: note.professor,
        approve_date: note.published_date ? moment(note.published_date).format("MMM DD, YYYY") : "",
        avg_rating: note.avg_rating,
        rating_count: note.rating_count,
        spam_count: note.spam_count,
      });
    }
  }, [note]);

  return (
    <div className="note-details">
      <Loader loading={note_loading} />
      <div className="note-detail">
        <div className="container">
          <div className="page-title">
            <p>Note Details</p>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="note-up-left">
                <img alt="note market place" src={noteDetails.display_picture} className="note-image" />
                <div className="">
                  <h5>{noteDetails.title}</h5>
                  <p>{noteDetails.category}</p>
                  <p>{noteDetails.description}</p>
                  <button
                    title="Download"
                    className="btn btn-purple download-btn"
                    onClick={() => dispatch(userDownloadNoteAction({ note_id: id }))}>
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="note-up-right">
                <div className="note-info">
                  <p className="note-info-left">Institution : </p>
                  <p className="note-info-right">{noteDetails.university_name}</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Country : </p>
                  <p className="note-info-right">{noteDetails.country}</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Course Name : </p>
                  <p className="note-info-right">{noteDetails.course}</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Course Code : </p>
                  <p className="note-info-right">{noteDetails.course_code}</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Professor : </p>
                  <p className="note-info-right">{noteDetails.professor}</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Number Of Pages : </p>
                  <p className="note-info-right">{noteDetails.number_of_pages}</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Approved Date : </p>
                  <p className="note-info-right">{noteDetails.approve_date}</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Rating : </p>
                  <p className="note-info-right">
                    <div className="note-rating">
                      <Rating name="half-rating-read" value={noteDetails.avg_rating} readOnly />
                      <p>{noteDetails.rating_count} reviews</p>
                    </div>
                  </p>
                </div>
                <span className="error">{noteDetails.spam_count} Users marked this note as inappropriate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="preview-and-review">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="note-preview">
                <div className="page-title">
                  <p>Note Preview</p>
                </div>
                <iframe title="note-preview" src={noteDetails.notes_preview}></iframe>
              </div>
            </div>
            <div className="col-6">
              <div className="note-review">
                <div className="page-title">
                  <p>Customer Review</p>
                </div>
                <div className="customers">
                  {review_list.length === 0 && <div className="customer">No review present to this note</div>}
                  {review_list.map((review) => {
                    return (
                      <CustomerReview
                        key={review.id}
                        profile={review.reviewed_by.profile_picture}
                        name={`${review.reviewed_by.first_name} ${review.reviewed_by.last_name}`}
                        rating={review.rating}
                        comment={review.comment}
                        handleDelete={() => dispatch(deleteNoteReviewAction(review.id))}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNoteDetails;
