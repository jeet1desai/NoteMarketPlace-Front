import { Backdrop } from "@mui/material";
import { Spin } from "antd";

const Loader = ({ loading }) => {
  return (
    <Backdrop style={{ zIndex: 9999, color: "#ffffff" }} open={loading}>
      <Spin />
    </Backdrop>
  );
};
export default Loader;
