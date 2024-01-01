import { Card, Rating, CardContent, Typography, CardMedia } from "@mui/material";
import React from "react";
import moment from "moment";

const Note = ({ image, title, university, page, date, spam_count, avg_review, review_count }) => {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} alt="note market place" loading="lazy" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <p>
          <i className="fa fa-university"></i> {university || "N/a"}
        </p>
        <p>
          <i className="fa fa-book"></i> {page} Pages
        </p>
        <p>
          <i className="fa fa-calendar"></i> {date ? moment(date).format("llll") : "N/a"}
        </p>
        <p>
          <i className="fa fa-flag-o"></i>
          <span> {spam_count} Users marked this note as inappropriate</span>
        </p>
        <div className="note-rating">
          <Rating name="half-rating-read" value={avg_review} readOnly />
          <p> {review_count} reviews</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Note;
