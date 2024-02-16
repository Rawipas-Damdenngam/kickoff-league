import { useState } from "react";
import Appbar from "./components/appBar/Appbar";
import Drawer from "./components/drawer/Drawer";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <Box className="layout-wrapper">
      <Box className="layout-inner">
        <Home></Home>
      </Box>
    </Box>
  );
}

export default App;
