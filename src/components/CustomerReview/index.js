import React from "react";
import { Avatar, Rating } from "@mui/material";
import DeleteIcon from "../../assets/images/delete.png";
import { ROLES } from "../../utils/enum";
import { getLSUser } from "../../utils/local";

const Review = ({ profile, name, rating, comment, handleDelete }) => {
  const user = getLSUser();
  return (
    <div className="customer">
      <div className="customer-image">
        <Avatar alt={name} src={profile} />
      </div>
      <div className="customer-review">
        <div className="review-head">
          <div>
            <h6>{name}</h6>
            <Rating name="half-rating-read" defaultValue={rating} readOnly />
          </div>
          {user && user.role_id === ROLES.ADMIN && <img alt="" src={DeleteIcon} onClick={handleDelete} />}
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;
