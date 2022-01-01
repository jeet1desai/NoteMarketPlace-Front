import React from "react";
import { Avatar, Rating } from "@mui/material";

import DeleteIcon from "../../assets/images/delete.png";

export default function Review() {
  return (
    <div className="customer">
      <div className="customer-image">
        <Avatar alt="Cindy Baker" />
      </div>
      <div className="customer-review">
        <div className="review-head">
          <div>
            <h6>Richard Brown</h6>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div>
          <img alt="" src={DeleteIcon} />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          magni, assumenda delecs enim laborum earum odio commodi impedit
          repellendus facere explicabo!
        </p>
      </div>
    </div>
  );
}
