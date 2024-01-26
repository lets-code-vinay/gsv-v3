import * as React from "react";
import { string, node, func, bool, arrayOf, any } from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { DialogContentText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import "./style.module.css";
import { DialogTitle } from "@mui/material";

export default function CustomizedDialogs({
  title,
  open,
  onClose,
  actionType,
  msg,
}) {
  /**
   * @description Closing Dialog box
   */
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Dialog
        aria-describedby="alert-dialog-description"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        justifyContent="space-between"
      >
        <DialogBoxTitle id="alert-dialog-title" onClose={handleClose}>
          {title && title}
        </DialogBoxTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>

        {actionType.length > 0 && (
          <DialogActions>
            {actionType.includes("save") && (
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            )}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}

/**
 * Prop validation
 */
CustomizedDialogs.propTypes = {
  title: string,
  open: bool,
  onClose: func.isRequired,
  actionType: arrayOf(string),
  msg: any.isRequired,
};

/**
 * Default props
 */
CustomizedDialogs.defaultProps = {
  title: "",
  open: false,
  onClose: () => {},
  actionType: [],
  msg: "",
};

/**
 * @description Handle Dialog title
 *
 * @param {Object} props
 * @returns
 */
function DialogBoxTitle(props) {
  const { children, onClose, ...other } = props;

  const classes = useStyles();

  return (
    <Box className={classes[DialogTitle]}>
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            className={classes[closeButton]}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    </Box>
  );
}

/**
 * Prop validation
 */
DialogBoxTitle.propTypes = {
  children: node,
  onClose: func.isRequired,
};
