import * as React from "react";
import { Card, CardContent, Skeleton } from "@mui/material";

const NoteCardUI = () => {
  return (
    <Card>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={30} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 3 }} />
          <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 3 }} />
          <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 3 }} />
          <Skeleton animation="wave" height={20} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default NoteCardUI;
