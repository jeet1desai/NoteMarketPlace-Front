import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AlertDialog = ({ isOpen, handleClose, handleSubmit, title, content }) => {
  return (
    <Dialog fullWidth open={isOpen} TransitionComponent={Transition} keepMounted onClose={handleClose}>
      <DialogTitle className="dialog-header">{title}</DialogTitle>
      <DialogContent>
        <p className="dialog-content-text">{content}</p>
      </DialogContent>
      <DialogActions>
        <button className="btn" onClick={handleClose}>
          Cancel
        </button>
        <button className="btn btn-purple" onClick={handleSubmit}>
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
