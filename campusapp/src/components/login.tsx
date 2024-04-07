import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import mole from "./mole.png";
import "./login.css";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { List, ListItem, Typography } from "@mui/material";

export const Login = () => {
  const [open, setOpen] = React.useState(true);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");

  //window.sessionStorage.setItem("username", fullName);
  //window.sessionStorage.setItem("useremail", email);

  const handleClickClose = () => {
    window.sessionStorage.setItem("username", fullName);
    window.sessionStorage.setItem("useremail", email);
    setOpen(false);
  };
  if (window.sessionStorage.getItem("username") !== null) {
    return null;
  }
  return (
    <Dialog onClose={handleClickClose} open={open}>
      <div style={{ backgroundColor: "#ffffff" }}>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ color: "#ffffff" }}>
            <div>
              <Typography align="center" variant="h2" sx={{ color: "#4e6e51" }}>
                Login
              </Typography>
            </div>
            <div>
              <img src={mole} alt="Proector Mole" className="mole" />
            </div>
            <div>
              <List>
                <ListItem>
                  <TextField
                    color="success"
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    color="success"
                    id="outlined-basic"
                    label="MST Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <Button onClick={handleClickClose} sx={{ color: "#4e6e51" }}>
                    Submit
                  </Button>
                </ListItem>
              </List>
            </div>
          </Box>
        </Container>
      </div>
    </Dialog>
  );
};

export default Login;
