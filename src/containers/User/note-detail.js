import React from "react";
import { Rating } from "@mui/material";

import CustomerReview from "../../components/CustomerReview";

import "../../assets/css/note-detail.css";
import NoteImage from "../../assets/images/note.jpg";

export default function NoteDetail() {
  return (
    <div className="note-details">
      <div className="note-detail">
        <div class="container">
          <div class="page-title">
            <p>Note Details</p>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="note-up-left">
                <img alt="" src={NoteImage} className="note-image" />
                <div className="">
                  <h5>Computer Operating System</h5>
                  <p>Science</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, corporis. In ad ipsum, eveniet cupiditate quod
                    ipsum, eveniet cupiditatepariatur esse a itaque perferendiss nesciunt at Perferendis!
                  </p>
                  <button class="btn btn-purple download-btn" title="Download / $15">
                    Download / $15
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="note-up-right">
                <div className="note-info">
                  <p className="note-info-left">Institution : </p>
                  <p className="note-info-right">University of California, US</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Country : </p>
                  <p className="note-info-right">US</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Course Name : </p>
                  <p className="note-info-right">Computer Engineering</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Course Code : </p>
                  <p className="note-info-right">123456</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Professor : </p>
                  <p className="note-info-right">Mr. John Deo</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Number Of Pages : </p>
                  <p className="note-info-right">277</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Approved Date : </p>
                  <p className="note-info-right">November 25, 2020</p>
                </div>
                <div className="note-info">
                  <p className="note-info-left">Rating : </p>
                  <p className="note-info-right">
                    <div className="note-rating">
                      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                      <p> 100 reviews</p>
                    </div>
                  </p>
                </div>
                <span className="error">5 Users marked this note as inappropriate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="preview-and-review">
        <div class="container">
          <div className="row">
            <div className="col-6">
              <div className="note-preview">
                <div class="page-title">
                  <p>Note Preview</p>
                </div>
                <iframe title="note-preview" src="https://research.google.com/pubs/archive/44678.pdf"></iframe>
              </div>
            </div>
            <div className="col-6">
              <div class="note-review">
                <div class="page-title">
                  <p>Customer Review</p>
                </div>
                <div className="customers">
                  <CustomerReview />
                  <CustomerReview />
                  <CustomerReview />
                  <CustomerReview />
                  <CustomerReview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
