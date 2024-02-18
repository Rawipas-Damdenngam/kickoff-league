import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import Data from "../../mockUP.json";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Input,
} from "@mui/material/";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Icon, createTheme } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import Links from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";

export default function Home() {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const currentYear = new Date().getFullYear();
  const itemData = [
    {
      img: "src/assets/images/grass_field.jpeg",
    },
    {
      img: "src/assets/images/grass_field2.jpeg",
    },
    {
      img: "src/assets/images/grass_field3.jpeg",
    },
  ];

  const style = {
    position: "relative",
    display: "flex",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 100 + "%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: 4,
    boxShadow: 24,
    height: "auto",
    maxWidth: 448 + "px",
    maxHeight: 90 + "%",
  };
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const proceedLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      let user = Data.users.find((user) => user.email === username);
      if (user) {
        if (user.password_hash === password) {
          console.log("Login Success");
          alert("Login Success");
          toast.success("Login Success");
          navigate("/news");
        } else {
          console.log("Password incorrect");
          alert("Password incorrect");
          toast.error("Password incorrect");
        }
      } else {
        console.log("User not found");
        alert("User not found");
        toast.error("User not found");
      }
    }
  };

  const validate = () => {
    let result = true;

    if (username === "" || username === null) {
      result = false;
      console.log("enter mail");
      alert("Please Enter Email");
      toast.warn("Please Enter Email");
    }
    if (password === "" || password === null) {
      result = false;
      console.log("enter pass");
      alert("Please Enter Password");
      toast.warning("Please Enter Password");
    }
    return result;
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [signIn, setSignIn] = useState(true);
  const handleSignIn = () => {
    setSignIn(true);
    setNewAcc(false);
  };
  const [newAcc, setNewAcc] = useState(false);
  const handleNewAcc = () => {
    setSignIn(false);
    setNewAcc(true);
  };

  const handleUsernameChange = (e) => {
    let newValue = e.target.value;
    setUsername(newValue);
    console.log(username);
  };

  const ShowSignIn = ({ signIn }) => {
    if (signIn) {
      return (
        <Box sx={{}}>
          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{ width: `100%` }}
              label="Email"
              placeholder="Enter email"
              value={username}
              onChange={handleUsernameChange}
            ></TextField>
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              id="password"
              sx={{ width: `100%` }}
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <Button
                type="button"
                onClick={proceedLogin}
                variant="contained"
                sx={{ p: `9px 16px`, width: `100%` }}
              >
                Sign in
              </Button>

              <Links sx={{ mt: 1, textAlign: "center" }} underline="none">
                Forgot your password?
              </Links>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box sx={{ width: `100%` }}>
          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{ width: `100%` }}
              type="text"
              label="Email"
              placeholder="Enter email"
            ></TextField>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{ width: `100%` }}
              type="password"
              label="Password"
              placeholder="Create password"
            ></TextField>
            <Typography
              sx={{
                mt: 0.5,
                fontSize: `12px`,
                marginInlineStart: `1em`,
                marginInlineEnd: `1em`,
                color: `grey`,
              }}
            >
              At least 8 characters
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                fontSize: `12px`,
                marginInlineStart: `1em`,
                marginInlineEnd: `1em`,
                color: `grey`,
              }}
            >
              Mix of letters and numbers
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                fontSize: `12px`,
                marginInlineStart: `1em`,
                marginInlineEnd: `1em`,
                color: `grey`,
              }}
            >
              At least 1 special character
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                fontSize: `12px`,
                marginInlineStart: `1em`,
                marginInlineEnd: `1em`,
                color: `grey`,
              }}
            >
              At least 1 uppercase letter
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <Link
                to="/news"
                style={{
                  display: "flex",
                  width: `100%`,
                  justifyContent: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ p: `9px 16px`, width: `100%` }}
                >
                  Submit
                </Button>
              </Link>

              <Links sx={{ mt: 1, textAlign: "center" }} underline="none">
                Term of service
              </Links>
            </Box>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box
            component="section"
            sx={{ display: "flex", gap: 2, px: 2, flex: `1 0` }}
          >
            <Link to="findMatch">
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                ค้นหาการแข่งขัน
              </Typography>
            </Link>
            <Link to="findTeam">
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                ค้นหาทีม
              </Typography>
            </Link>
            <Link to="findPeople">
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                ค้นหาผู้คน
              </Typography>
            </Link>
          </Box>
          <Box
            component="section"
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
            <Box component="section" sx={{ display: "flex", gap: 1 }}>
              <SportsSoccerIcon sx={{ fontSize: 30 }}></SportsSoccerIcon>
              <Box sx={{ fontSize: 20 }}>Kickoff League</Box>
            </Box>
          </Box>

          <Button onClick={handleOpen} color="inherit">
            Sign in
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ p: 2, overflowY: "auto", flex: `1 1 auto` }}>
                <Box sx={{ py: 24 + "px", px: 8 + "px" }}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ textAlign: "center", mb: 2 }}
                    >
                      Welcome to Kickoff League
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        borderBottom: `1px solid grey`,
                        alignItems: "stretch",
                        flexDirection: "row",
                      }}
                    >
                      <Button
                        variant="text"
                        sx={{
                          color: `${signIn ? "blue" : "black"}`,
                          p: 2,
                          position: "relative",
                        }}
                        onClick={handleSignIn}
                      >
                        Sign in
                      </Button>
                      <Button
                        variant="text"
                        sx={{
                          color: `${newAcc ? "blue" : "black"}`,
                          p: 2,
                          position: "relative",
                        }}
                        onClick={handleNewAcc}
                      >
                        New account
                      </Button>
                    </Box>
                    <Box id="sign in form">
                      <Box sx={{ p: 2 }}>
                        <ShowSignIn signIn={signIn}></ShowSignIn>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      borderTop: `1px solid grey`,
                      p: `16px 16px 0px`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography>Or connect with:</Typography>
                    </Box>
                    <Box sx={{ mt: 2, width: `100%` }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: `100%`,
                        }}
                      >
                        <Button
                          sx={{ display: "flex", border: `1px solid grey` }}
                        >
                          <img
                            src="src/assets/images/google-logo.jpeg"
                            style={{width: 20 + "px", height: 20 + "px", position: "absolute", left: 12 + "px"}}
                          ></img>
                          <Typography sx={{ color: "black" }}>
                            Continue with Google
                          </Typography>
                        </Button>
                        <Button
                          sx={{
                            display: "flex",
                            border: `1px solid grey`,
                            mt: 1,
                          }}
                        >
                          <FacebookIcon
                            sx={{
                              position: "absolute",
                              left: `12px`,
                              color: "blue",
                            }}
                          ></FacebookIcon>
                          <Typography sx={{ color: "black" }}>
                            Continue with Facebook
                          </Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, minHeight: 100 + "vh" }}>
        <DrawerHeader />
        <Box
          sx={{
            width: 100 + "%",
            height: 50 + "vh",
            zIndex: 100,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="bg">
            <Box
              sx={{
                display: "flex",
                position: "relative",
                zIndex: 1,
                height: 100 + "%",
              }}
            >
              <Box
                sx={{
                  width: 100 + "%",
                  height: 100 + "%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <TextField
                  sx={{ backgroundColor: "white", width: 600 }}
                  variant="outlined"
                  label="Enter something u like"
                ></TextField>
                <Box sx={{ ml: -5, zIndex: 1 }}>
                  <SearchIcon
                    sx={{ display: "flex", alignItems: "center" }}
                  ></SearchIcon>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="section" id="intro" sx={{ pt: 5 }}>
          <Box component="section" sx={{ display: "flex", m: 64 + "px" }}>
            <Box
              id="recommendation"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ pb: 1 }}>
                Get match recommendations
              </Typography>
              <Typography variant="body1" sx={{ color: "grey" }}>
                Sign in for more a personalized expreience.
              </Typography>
              <Button variant="outlined" sx={{ mt: 2 }} onClick={handleOpen}>
                Sign in
              </Button>
            </Box>
            <Box id="image-recommendation">
              <ImageList sx={{ width: 800, height: 200, ml: 5 }} cols={3}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: 100 }}></Box>
        <Box component="footer" sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid grey",
              py: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "grey" }}>
              © {currentYear} Kickoff League. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
