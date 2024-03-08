import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  Icon,
  TextField,
  createTheme,
} from "@mui/material";
import {
  Dashboard,
  History,
  People,
  AccountBox,
  Edit,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";


const drawerWidth = 240;

const drawerItems = [
  {
    title: "ข่าวสาร",
    icon: <NewspaperIcon />,
    link: "/news",
  },
  {
    title: "กำหนดการแข่ง",
    icon: <ScheduleIcon />,
    link: "/schedule",
  },
  {
    title: "ค้นหาการแข่งขัน",
    icon: <ContentPasteSearchIcon />,
    link: "/findMatch",
  },
  {
    title: "ค้นหาทีม",
    icon: <SearchIcon />,
    link: "/findTeam",
  },
  {
    title: "ค้นหาผู้คน",
    icon: <PersonSearchIcon />,
    link: "/findPeople",
  },
  {
    title: "คำขอ",
    icon: <MailIcon />,
    link: "/request",
  },
  {
    title: "ผลการแข่งขัน",
    icon: <ScoreboardIcon />,
    link: "/scoreBoard",
  },
  {
    title: "ทีมของฉัน",
    icon: <People />,
    link: "/myTeam",
  },
  {
    title: "ประวัติการแข่ง",
    icon: <History />,
    link: "/history",
  },
  {
    title: "สถิติ",
    icon: <Dashboard />,
    link: "/dashboard",
  },
  {
    title: "โปรไฟล์",
    icon: <AccountBox />,
    link: "/profile",
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function OtherProfile() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const [realData, setRealData] = useState({});
  const currentDate = new Date();
  const birthDate = new Date(userData.Detail?.born);
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          `http://localhost:8080/view/users/${state.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await res.json().then();
        console.log(data);
        setUserData(data.user);
        console.log(userData);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [isEdit]);

  const handleLogout = async () => {
    const res = await fetch("http://localhost:8080/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    navigate("/");
    localStorage.clear();
    const data = await res.json();
    console.log(data);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, width: 200 }}
          >
            Profile
          </Typography>

          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{ backgroundColor: `` }}
          >
            <LogoutIcon sx={{}}></LogoutIcon>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log(realData);
            }}
          >
            real data
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log(realData.Detail.born);
            }}
          >
            born
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box>
            <AccountCircleIcon sx={{ fontSize: 35 }}></AccountCircleIcon>
          </Box>
          <Box sx={{ paddingLeft: 2 }}>
            <Box>name</Box>
            <Box>status</Box>
          </Box>
          <Box sx={{ paddingLeft: 7 }}></Box>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((items, index) => (
            <Link to={items.link} key={index}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {items.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={items.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, minHeight: `100vh`, minWidth: `100vh` }}
      >
        <DrawerHeader />
        <Box>
          <Box
            sx={{
              display: `flex`,
              flexDirection: `column`,
              position: `relative`,
              minHeight: `50vh`,
              backgroundRepeat: `no-repeat`,
            }}
          >
            <Box
              sx={{
                width: `100%`,
                height: `100%`,
                position: `absolute`,
                top: `0`,
                left: `0`,
              }}
            >
              <Box className="bg2"></Box>
            </Box>
            <Box sx={{ mt: `auto`, position: `relative` }}>
              <Box
                sx={{
                  display: `flex`,
                  p: `2rem`,
                  alignItems: `center`,
                  flexWrap: `wrap`,
                }}
              >
                <Box
                  id="profile-box"
                  sx={{
                    display: `flex`,
                    m: `1rem`,
                    textAlign: `center`,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: `auto`,
                    width: `200px`,
                    height: `200px`,
                  }}
                >
                  <Box
                    sx={{
                      display: `block`,
                      position: `relative`,
                      width: `100%`,
                      height: `100%`,
                      border: `2px solid white`,
                      borderRadius: `5px`,
                      overflow: `hidden`,
                    }}
                  >
                    <img
                      src={profile.current}
                      style={{
                        width: `100%`,
                        height: `100%`,
                        objectFit: `cover`,
                      }}
                      alt="profile img"
                    ></img>
                    <Box
                      sx={{
                        display: `flex`,
                        border: `1px solid white`,
                        borderRadius: `50%`,
                        position: `absolute`,
                        bottom: `0`,
                        right: `0`,
                        backgroundColor: `grey`,
                        width: `20%`,
                        height: `15%`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        m: `0.3rem`,
                      }}
                    >
                      <IconButton tabIndex={-1} onClick={handleEditImage}>
                        <CameraAltIcon />
                      </IconButton>
                      <EditProfileImage
                        open={editImage}
                        handleClose={handleEditImageCancel}
                        updateImage={updateImage}
                      ></EditProfileImage>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ m: `1rem` }}>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        px: `1rem`,
                        color: `black`,
                        backgroundColor: `white`,
                        borderRadius: `10px`,
                      }}
                    >
                      {userData.Detail?.first_name_eng +
                        " " +
                        userData.Detail?.last_name_eng}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: `4rem` }}>
            <Box id="tabs" sx={{ position: `relative` }}>
              <Box id="tabs-tab" sx={{ fontSize: `16px` }}>
                <Box
                  sx={{
                    display: `flex`,
                    flexFlow: `row wrap`,
                    margin: `0`,
                    backgroundColor: `white`,
                    justifyContent: `center`,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        p: `1.5rem`,
                        fontSize: `1.25rem`,
                        fontWeight: `bold`,
                        textTransform: `uppercase`,
                      }}
                    >
                      About
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        p: `1.5rem`,
                        fontSize: `1.25rem`,
                        fontWeight: `bold`,
                        textTransform: `uppercase`,
                      }}
                    >
                      Activity
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        p: `1.5rem`,
                        fontSize: `1.25rem`,
                        fontWeight: `bold`,
                        textTransform: `uppercase`,
                      }}
                    >
                      social media
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr></hr>
        <Box sx={{}}>
          <Box sx={{}}>
            <Box sx={{ mt: `2rem`, px: `4rem`, pb: `5rem` }}>
              <Box sx={{ display: `flex` }}>
                <Box
                  sx={{
                    m: `1rem`,
                    minHeight: `16rem`,
                    flexGrow: `1`,
                    fontSize: `16px`,
                  }}
                >
                  <Box>
                    <Box sx={{ lineHeight: `1.5` }}>
                      <Box sx={{ width: `100%` }}>
                        <Box sx={{ verticalAlign: `middle` }}>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography
                              key="description"
                              sx={{ flexGrow: `1` }}
                            >
                              Description:
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>
                                {userData.Detail?.description}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                              p: `1rem`,
                            }}
                          >
                            <Typography sx={{ flexGrow: `1` }}>
                              Nationality
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography key="nation" sx={{}}>
                                {userData.Detail?.nationality}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography key="address" sx={{ flexGrow: `1` }}>
                              Address
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>
                                378 bangkrasor nonthaburi
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography key="phone" sx={{ flexGrow: `1` }}>
                              Phone:
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>
                                {userData.Detail?.phone}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography key="age" sx={{ flexGrow: `1` }}>
                              Age:
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>{age}</Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography key="height" sx={{ flexGrow: `1` }}>
                              Height:
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>
                                {userData.Detail?.height + " " + "cm"}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography key="weight" sx={{ flexGrow: `1` }}>
                              Weight:
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>
                                {userData.Detail?.weight + " " + "kg"}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography key="position" sx={{ flexGrow: `1` }}>
                              Position:
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>
                                {userData.Detail?.position}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mt: `1rem`,
                              p: `1rem`,
                              borderBottom: `1px solid`,
                              display: `flex`,
                              gap: `1rem`,
                            }}
                          >
                            <Typography key="gender" sx={{ flexGrow: `1` }}>
                              Gender:
                            </Typography>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `end`,
                                alignItems: `flex-end`,
                              }}
                            >
                              <Typography sx={{}}>
                                {userData.Detail?.sex}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    onClick={handleEditProfile}
                    sx={{ p: `0`, mt: `1rem` }}
                  >
                    <Edit sx={{}}></Edit>
                  </IconButton>
                </Box>

                <Box sx={{ m: `1rem`, flexGrow: `1` }}></Box>
                {isEdit ? (
                  <EditProfileInfo
                    open={isEdit}
                    handleClose={handleEditProfileClose}
                    data={data}
                  ></EditProfileInfo>
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
