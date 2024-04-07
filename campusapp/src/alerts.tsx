//import { AppButton } from "./components/AppButton";
import { NavBar } from "./components/NavBar";
import { Post } from "./components/Post";
import "./App.css";
import { Box, Container } from "@mui/material";
import { LFItem } from "./components/LFItem";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container sx={{ bgcolor: "#d3d3d3", minHeight: "100vh", p: 1 }}>
        <Post></Post>
        <h1>Alert</h1>
        <LFItem></LFItem>
      </Container>
    </div>
  );
}

export default App;
