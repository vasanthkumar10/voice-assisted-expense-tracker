import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./styles";

export const CustomizedSnackbar = ({ open, setOpen }) => {
  const { root } = useStyles();

  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return (
    <div className={root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfull
        </MuiAlert>
      </Snackbar>
    </div>
  );
};
