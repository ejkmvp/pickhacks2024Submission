//import { AppButton } from "./components/AppButton";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { Container, Typography } from "@mui/material";
import { LFItem } from "./components/LFItem";
import { Post } from "./components/Post";
import { useEffect, useState } from "react";
import { Login } from "./components/login";
import PostButton from "./components/PostButton";
import { Mapp } from "./components/map";
import BN from "./components/bottomNav";

function App() {
  const [lfData, setData] = useState([<LFItem></LFItem>]);

  useEffect(() => {
    getLFItems();
  }, []);

  const getLFItems = async () => {
    let base64 = require("base-64");
    let headers = new Headers();
    let username = "admin";
    let password = "VIK0I00R9B49RnEgVvE6jaH";
    headers.append(
      "Authorization",
      "Basic " + base64.encode(username + ":" + password)
    );
    let dat = await fetch("http://localhost:8080/api/foundItems/getAllItem", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        const data = Object.values(json).map((listing: any) => {
          return (
            <LFItem
              itemId={listing.id}
              itemName={listing.itemName}
              itemLocation={listing.itemLocation}
              itemReturn={listing.itemReturn}
              itemDescription={listing.itemDescription}
              itemFindDate={listing.itemFindDate}
              username={listing.username}
              useremail={listing.useremail}
            ></LFItem>
          );
        });
        if(data.length === 0) {
          return [(<h1>No Items Found</h1>)]
        }
        return data;
      });
    setData(dat);
    console.log(lfData);
  };

  return (
    <div className="App">
      <NavBar></NavBar>
      <Container sx={{ bgcolor: "#d3d3d3", minHeight: "100vh", p: 1 }}>
        <Login></Login>
        <Mapp></Mapp>
        <Typography variant="h1" sx={{ color: "#4e6e51" }}>
          Lost and Found
        </Typography>
        <Container sx={{ align: "center", width: "44.5vw" }}>
          {lfData}
        </Container>
      </Container>
      <PostButton></PostButton>
      <BN></BN>
    </div>
  );
}

export default App;
