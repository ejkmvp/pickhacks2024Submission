import * as React from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Container, Typography } from "@mui/material";

interface Props {
  itemId?: number;
  children?: string;
  title?: string;
  itemName?: string;
  itemLocation?: string;
  itemReturn?: string;
  itemDescription?: string;
  itemFindDate?: Date;
  onClick?: () => void;
  username?: string;
  useremail?: string;
}

export const LFItem = ({
  itemId,
  itemName,
  itemLocation,
  itemReturn,
  itemDescription,
  itemFindDate,
  title,
  onClick,
  username,
  useremail,
}: Props) => {
  const deleteItem = (id: any) => {
    let base64 = require("base-64");
    let username = "admin";
    let password = "VIK0I00R9B49RnEgVvE6jaH";
    if (itemId === undefined) {
      itemId = 9999999;
    }
    fetch(
      "http://localhost:8080/api/foundItems/deleteItem?id=" + itemId.toString(),
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
      <Accordion sx={{ my: 1, p: 1, width: "40vw", background: "" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <List>
            <ListItem>{username + " | " + useremail}</ListItem>
            <ListItem>{itemName + " | " + itemLocation}</ListItem>
          </List>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              py: 0,
              width: "100%",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemText primary="Item" />
              {itemName}
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
              <ListItemText primary="Location Found" />
              {itemLocation}
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
              <ListItemText primary="Returned To" />
              {itemReturn}
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
              <ListItemText primary="Description" />
              <Container>{itemDescription}</Container>
            </ListItem>
          </List>
        </AccordionDetails>
        <Button
          variant="text"
          size="medium"
          sx={{ align: "left", color: "#4e6e51" }}
          onClick={() => deleteItem({ itemId })}
        >
          Claim Item
        </Button>
      </Accordion>
    </div>
  );
};

export default LFItem;
