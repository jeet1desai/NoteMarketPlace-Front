import * as React from "react";
import { Skeleton } from "@mui/material";

const NoteDetailsUI = () => {
  return (
    <div className="note-up-left">
      <Skeleton sx={{ height: 190, width: 150 }} animation="wave" variant="rectangular" />
      <div>
        <Skeleton animation="wave" height={30} width={200} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={20} width={150} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width={200} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width={200} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width={200} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width={100} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={50} width={100} style={{ marginBottom: 6 }} />
      </div>
    </div>
  );
};

export default NoteDetailsUI;
