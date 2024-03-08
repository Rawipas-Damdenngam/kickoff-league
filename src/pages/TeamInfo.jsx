import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import "./TeamInfo.css";
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
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  Icon,
  TextField,
  createTheme,
} from "@mui/material";
import { Dashboard, History, People, AccountBox } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import Data from "../../mockUP.json";
import TeamInfoOverview from "../components/teamInfo/Team_info_overview";
import TeamInfoMember from "../components/teamInfo/Team_info_member";
import TeamInfoCompetition from "../components/teamInfo/Team_info_competition";
import TeamInfoResult from "../components/teamInfo/Team_info_result";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

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
    title: "การแข่งขันของฉัน",
    icon: <AddLocationAltIcon />,
    link: "/myCompetition",
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

// const [editInfo, setEditInfo] = useState(true);

// const handleNextClick = () => {
//   return setEditInfo(false);
// };

// const DisplayEditInfo = ({ editInfo }) => {
//   if (editInfo) {
//     return (
//       <Box
//         component="container"
//         sx={{ display: "flex", flexDirection: "column" }}
//       >
//         <FormControl component="form" sx={{ alignItems: "center", p: 3 }}>
//           <Box>
//             <AccountCircleIcon sx={{ fontSize: 90 }}></AccountCircleIcon>
//           </Box>
//           <Box
//             component="edit_info"
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 5,
//               width: `100%`,
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={{}}>
//               <Typography>Name</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//             <Box>
//               <Typography>Last name</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//           </Box>
//           <Box
//             component="edit_info"
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 5,
//               width: `100%`,
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={{}}>
//               <Typography>Passoword</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//             <Box>
//               <Typography>Confirm password</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//           </Box>
//           <Box
//             component="edit_info"
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 5,
//               width: `100%`,
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={{}}>
//               <Typography>Phone number</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//             <Box>
//               <Typography>Email address</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//           </Box>
//           <Box
//             component="edit_info"
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 5,
//               width: `100%`,
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={{}}>
//               <Typography>Address</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//             <Box>
//               <Typography>Date of birth</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//           </Box>
//           <Box
//             component="edit_info"
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 5,
//               width: `100%`,
//               justifyContent: "start",
//               ml: 71,
//             }}
//           >
//             <Box sx={{}}>
//               <Typography>Role</Typography>
//               <TextField type="text" sx={{ width: `350px` }}></TextField>
//             </Box>
//           </Box>
//           <Box sx={{ mt: 5 }}>
//             <Button variant="contained" sx={{ px: 5 }}>
//               Next
//             </Button>
//           </Box>
//         </FormControl>
//       </Box>
//     );
//   } else {
//     reuturn(<DisplayEditAchievemet></DisplayEditAchievemet>);
//   }
// };

// const DisplayEditAchievemet = () => {
//   return (
//     <Box component="container">
//       <Box></Box>
//     </Box>
//   );
// };

export default function TeamInfo(props) {
  const { teamName } = props;
  const { state } = useLocation();

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [overView, setOverView] = useState(true);
  const [member, setMember] = useState(false);
  const [competition, setCompetition] = useState(false);
  const [result, setResult] = useState(false);
  const navigate = useNavigate();
  const [teamInfo, setTeamInfo] = useState({});

  const handleOverviewTab = () => {
    setOverView(true);
    setMember(false);
    setCompetition(false);
    setResult(false);
  };
  const handleMemberTab = () => {
    setOverView(false);
    setMember(true);
    setCompetition(false);
    setResult(false);
  };
  const handleCompetitionTab = () => {
    setOverView(false);
    setMember(false);
    setCompetition(true);
    setResult(false);
  };
  const handleResultTab = () => {
    setOverView(false);
    setMember(false);
    setCompetition(false);
    setResult(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(teamName);

  useEffect(() => {
    fetchTeamByID();
  }, []);

  const fetchTeamByID = async () => {
    const res = await fetch(`http://localhost:8080/view/teams/${state.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data here", data);
    setTeamInfo(data.teams);
  };

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
            Team Info
          </Typography>

          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{ backgroundColor: `` }}
          >
            <LogoutIcon sx={{}}></LogoutIcon>
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
        sx={{
          minHeight: `100vh`,
          minWidth: `100vh`,
          flex: `1 1 auto`,
          pb: `5rem`,
        }}
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
              <Box className="bg5"></Box>
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
                <Box sx={{ m: `1rem`, textAlign: `center` }}>
                  <Box
                    sx={{
                      display: `block`,
                      position: `relative`,
                      width: `200px`,
                      height: `200px`,
                    }}
                  >
                    <img
                      id="teamProfile"
                      src="src/assets/images/liverPool.jpeg"
                      style={{
                        top: `0`,
                        left: `0`,
                        verticalAlign: `middle`,
                        width: `100%`,
                        height: `100%`,
                        objectFit: `cover`,
                      }}
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
                      <IconButton tabIndex={-1}>
                        <CameraAltIcon />
                      </IconButton>
                      {/* <EditProfileImage
                        open={editImage}
                        handleClose={handleEditImageCancel}
                        updateImage={updateImage}
                      ></EditProfileImage> */}
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ m: `1rem` }}>
                  <Box
                    sx={{
                      border: `1px solid transparent`,
                      borderRadius: `10px`,
                      backgroundColor: `white`,
                      px: `1rem`,
                    }}
                  >
                    {/* {teamName.map((name, index) => {
                        return ( */}
                    <Typography
                      // key={index}
                      variant="h3"
                      sx={{ color: `black` }}
                    >
                      {/* {name[0]} */}
                      {teamInfo.name}
                    </Typography>
                    {/* );
                    })} */}
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
                        color: `${overView ? `#1976d2` : `black`}`,
                        cursor: `pointer`,
                      }}
                      onClick={handleOverviewTab}
                    >
                      Overview
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        p: `1.5rem`,
                        fontSize: `1.25rem`,
                        fontWeight: `bold`,
                        textTransform: `uppercase`,
                        color: `${member ? `#1976d2` : `black`}`,
                        cursor: `pointer`,
                      }}
                      onClick={handleMemberTab}
                    >
                      member
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        p: `1.5rem`,
                        fontSize: `1.25rem`,
                        fontWeight: `bold`,
                        textTransform: `uppercase`,
                        color: `${competition ? `#1976d2` : `black`}`,
                        cursor: `pointer`,
                      }}
                      onClick={handleCompetitionTab}
                    >
                      competition
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        p: `1.5rem`,
                        fontSize: `1.25rem`,
                        fontWeight: `bold`,
                        textTransform: `uppercase`,
                        color: `${result ? `#1976d2` : `black`}`,
                        cursor: `pointer`,
                      }}
                      onClick={handleResultTab}
                    >
                      result
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr></hr>
        <Box sx={{ display: `flex`, flex: `1 1 auto` }}>
          <Box
            sx={{ mt: `2rem`, px: `2rem`, flex: `1 1 auto`, display: `flex` }}
          >
            <Box sx={{ display: `flex`, flex: `1 1 auto` }}>
              <Box
                sx={{
                  minHeight: `16rem`,
                  fontSize: `16px`,
                  flexGrow: `1`,
                }}
              >
                {overView ? (
                  <TeamInfoOverview teamInfo={teamInfo}></TeamInfoOverview>
                ) : member ? (
                  <TeamInfoMember teamInfo={teamInfo}></TeamInfoMember>
                ) : competition ? (
                  <TeamInfoCompetition
                    teamInfo={teamInfo}
                  ></TeamInfoCompetition>
                ) : (
                  <TeamInfoResult teamInfo={teamInfo}></TeamInfoResult>
                )}
              </Box>
              {/* <Box sx={{ m: `1rem`, flexGrow: `1` }}>2</Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
