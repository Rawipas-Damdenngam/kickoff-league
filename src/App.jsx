import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Box className="layout-wrapper">
      <Box className="layout-inner">
        <Home></Home>
      </Box>
      <ToastContainer />
    </Box>
  );
}
export default App;
