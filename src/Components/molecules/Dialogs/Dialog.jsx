import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../atoms/Button/Button";
import "../../../index.css";
import { Span } from "../../../Style/GlobalElements";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({
  children,
  title,
  icons,
  handleClose,
  open,
  handelSubmit,
}) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Span fontWeight={"600"} fontSize={"22px"} lineHeight={"3"}>
            {title}
          </Span>
          {icons}
        </BootstrapDialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            name={"Cancel"}
            color={"#108a00"}
            width={"120px"}
            background={"#fff"}
            border={"2px solid #108a00"}
          />
          <Button width={"120px"} onClick={handelSubmit} name={"Save"} />
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
