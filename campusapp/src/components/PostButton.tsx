import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

interface Props {
  children?: string;
  onClick?: () => void;
  open?: boolean;
  onClose?: (value: string) => void;
}

export const PostButton = ({ onClick, onClose }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("change me");

  const [itemName, setItemName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [returnName, setReturnName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleTextChange = (event: any) => {
    let base64 = require("base-64");
    let username = "admin";
    let password = "VIK0I00R9B49RnEgVvE6jaH";
    let personName = window.sessionStorage.getItem("username");
    let personEmail = window.sessionStorage.getItem("useremail");
    fetch(
      "http://localhost:8080/api/foundItems/addNewItem?itemName=" +
        itemName.toString() +
        "&itemLocation=" +
        locationName.toString() +
        "&itemReturn=" +
        returnName.toString() +
        "&itemDescription=" +
        itemDescription.toString() +
        "&username=" +
        personName +
        "&useremail=" +
        personEmail,
      {
        method: "POST",
        headers: {
          authorization: "Basic " + base64.encode(username + ":" + password),
        },
      }
    ).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <Dialog onClose={handleClickClose} open={open} sx={{ width: "100vw" }}>
        <DialogTitle sx={{ width: "30vw", color: "#4e6e51", pl: 1 }}>
          Post Info
        </DialogTitle>
        <TextField
          color="success"
          sx={{ m: 1 }}
          id="standard-basic"
          label="Item Found"
          variant="standard"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <TextField
          color="success"
          sx={{ m: 1 }}
          id="standard-basic"
          label="Location Found"
          variant="standard"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
        />
        <TextField
          color="success"
          sx={{ m: 1 }}
          id="standard-basic"
          label="Returned To"
          variant="standard"
          value={returnName}
          onChange={(e) => setReturnName(e.target.value)}
        />
        <TextField
          color="success"
          sx={{ m: 1 }}
          id="standard-basic"
          label="Further Info"
          variant="standard"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <Button
          sx={{ width: "5vw", m: 1, color: "#4e6e51" }}
          onClick={handleTextChange}
        >
          Submit
        </Button>
      </Dialog>
      <Fab
        onClick={handleClickOpen}
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "#4e6e51",
          ":hover": { bgcolor: "#6a8c69" },
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default PostButton;
