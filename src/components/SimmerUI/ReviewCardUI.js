import * as React from "react";
import { Skeleton } from "@mui/material";

const ReviewCardUI = () => {
  return (
    <div className="customer">
      <div className="customer-image">
        <Skeleton width={60} height={60} animation="wave" variant="circular" />
      </div>
      <div className="customer-review">
        <div className="review-head">
          <div>
            <Skeleton animation="wave" width={150} height={30} />
            <Skeleton animation="wave" width={100} height={30} />
          </div>
        </div>
        <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width={200} style={{ marginBottom: 6 }} />
      </div>
    </div>
  );
};

export default ReviewCardUI;
