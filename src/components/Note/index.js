import { Card, Rating, CardContent, Typography, CardMedia } from "@mui/material";
import React from "react";

import "../../assets/css/search-notes.css";
import NoteImage1 from "../../assets/images/1.jpg";

export default function Note() {
  return (
    <Card>
      <CardMedia component="img" height="200" image={NoteImage1} alt="Paella dish" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Computer Operating System
        </Typography>
        <p>
          <i className="fa fa-university"></i> University of California, US
        </p>
        <p>
          <i className="fa fa-book"></i> 204 Pages
        </p>
        <p>
          <i className="fa fa-calendar"></i> Thu, 26 Nov 2020
        </p>
        <p>
          <i className="fa fa-flag-o"></i>
          <span> 5 Users marked this note as inappropriate</span>
        </p>
        <div className="note-rating">
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <p> 100 reviews</p>
        </div>
      </CardContent>
    </Card>
  );
}
