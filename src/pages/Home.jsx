import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useContext, useEffect } from "react";
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
import ShowSignIn from "../components/login/Signin";
import ShowNewAcc from "../components/login/NewAcc";
import { DataContext } from "../components/context/DataContext";
import { Sync } from "@mui/icons-material";
import News from "./News";
import ShowNewOrganize from "../components/login/NewOrganize";

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
    borderRadius: 10,
    boxShadow: 24,
    height: "auto",
    maxWidth: 448 + "px",
    maxHeight: 90 + "%",
  };
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);
  const navigate = useNavigate();
  const dataContext = React.useContext(DataContext);
  const [user, setUser] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // function proceedLogin(e) {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   if (validate()) {
  //     let user = Data.users.find((user) => user.email === username);
  //     if (user) {
  //       if (user.password_hash === password) {
  //         console.log("Login Success");
  //         // alert("Login Success");
  //         toast.success("Login Success", { position: "top-center" });
  //         navigate("/news");
  //       } else {
  //         console.log("Password incorrect");
  //         // alert("Password incorrect");
  //         toast.error("Password is incorrect");
  //       }
  //     } else {
  //       console.log("User not found");
  //       // alert("User not found");
  //       toast.error("User not found");
  //     }
  //   }
  // }

  // const validate = () => {
  //   let result = true;

  //   if (username === "" || username === null) {
  //     result = false;
  //     console.log("enter mail");
  //     // alert("Please Enter Email");
  //     toast.warn("Please Enter Email");
  //   }
  //   if (password === "" || password === null) {
  //     result = false;
  //     console.log("enter pass");
  //     // alert("Please Enter Password");
  //     toast.warn("Please Enter Password");
  //   }
  //   return result;
  // };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleNewAcc = () => {
    setNewAcc(true);
    setSignIn(false);
    setNewOrg(false);
  };

  const [signIn, setSignIn] = useState(true);

  const handleSignIn = () => {
    setSignIn(true);
    setNewAcc(false);
    setNewOrg(false);
  };
  const [newAcc, setNewAcc] = useState(false);
  const [newOrg, setNewOrg] = useState(false);

  const handleNewOrg = () => {
    setNewOrg(true);
    setNewAcc(false);
    setSignIn(false);
  };

  const handleID = () => {
    dataContext.handleId("1");
  };

  const handleNavigateFindMatch = () => {
    if (isNavigate !== true) {
      setOpen(true);
    } else {
      navigate("/findMatch");
    }
  };
  const handleNavigateFindPeople = () => {
    if (isNavigate !== true) {
      setOpen(true);
    } else {
      navigate("/findPeople");
    }
  };
  const handleNavigateFindTeam = () => {
    if (isNavigate !== true) {
      setOpen(true);
    } else {
      navigate("/findTeam");
    }
  };

  const logIn = async () => {
    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        withCredentials: true,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      console.log(res);
      console.log(res.data);
      const data = await res.json();
      console.log(data);

      console.log("200 here");

      if (res.status === 200 && data.user.role === "normal") {
        toast.success(data.message);
        console.log("yay it 200");
        setIsNavigate(true);
        navigate("/news");
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("roleBaseID", data.user.normal_user_id);
        setUsername("");
        setPassword("");
      } else if (res.status === 200 && data.user.role === "organizer") {
        toast.success(data.message);
        console.log("yay it 200");
        setIsNavigate(true);
        navigate("/news");
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("roleBaseID", data.user.organizer_id);
        setUsername("");
        setPassword("");
      } else {
        console.log("nope it not 200");
        toast.error(data.message);
      }
      console.log("res");
      console.log(res);
      console.log("data");
      console.log(data);
      console.log(data.user.ID);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box
            component="section"
            sx={{ display: "flex", gap: 2, px: 2, flex: `1 1 auto` }}
          >
            <Link
              onClick={handleNavigateFindMatch}
              style={{
                textDecoration: `none`,
              }}
            >
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                ค้นหาการแข่งขัน
              </Typography>
            </Link>
            <Link
              onClick={handleNavigateFindTeam}
              style={{ textDecoration: `none` }}
            >
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                ค้นหาทีม
              </Typography>
            </Link>
            <Link
              onClick={handleNavigateFindPeople}
              style={{ textDecoration: `none` }}
            >
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                ค้นหาผู้คน
              </Typography>
            </Link>
            {/* <Button
              onClick={() => {
                console.log(user);
              }}
              variant="contained"
            >
              get user
            </Button> */}
          </Box>
          <Box
            component="section"
            sx={{ flex: `1 1 auto`, justifyContent: "center" }}
          >
            <Box component="section" sx={{ display: "flex", gap: 1 }}>
              <SportsSoccerIcon sx={{ fontSize: 30 }}></SportsSoccerIcon>
              <Box sx={{ fontSize: 20 }}>Kickoff League</Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: `flex`,
              flex: ` 1 1 auto`,
              justifyContent: `flex-end`,
            }}
          >
            <Button onClick={handleOpen} color="inherit">
              Sign in
            </Button>
          </Box>

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
                      <Button
                        variant="text"
                        sx={{
                          color: `${newOrg ? "blue" : "black"}`,
                          p: 2,
                          position: "relative",
                        }}
                        onClick={handleNewOrg}
                      >
                        New Organizer
                      </Button>
                    </Box>
                    <Box id="sign in form">
                      <Box sx={{ p: 2 }}>
                        {signIn ? (
                          <ShowSignIn
                            username={handleUsernameChange}
                            password={handlePasswordChange}
                            logIn={logIn}
                          ></ShowSignIn>
                        ) : newAcc ? (
                          <ShowNewAcc close={handleClose}></ShowNewAcc>
                        ) : (
                          <ShowNewOrganize close={handleClose} />
                        )}
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
                            style={{
                              width: 20 + "px",
                              height: 20 + "px",
                              position: "absolute",
                              left: 12 + "px",
                            }}
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
      <Box
        component="main"
        sx={{
          flex: `1 1 auto`,
          flexGrow: 1,
          minHeight: `100vh`,
          minWidth: `100vh`,
        }}
      >
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
                flex: `1 1 auto`,
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
            <Box
              id="image-recommendation"
              sx={{ display: `flex`, flex: `1 1 auto`, overflow: `hidden` }}
            >
              <ImageList
                sx={{ width: 800, height: 200, ml: 5, flex: `1 1 auto` }}
                cols={3}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      loading="lazy"
                      style={{ flex: `1 1 auto` }}
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
      <ToastContainer />
    </Box>
  );
}
