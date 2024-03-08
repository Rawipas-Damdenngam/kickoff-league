import { Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
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
import { useState, useContext, useEffect ,useRef } from "react";
import { Button, Icon, createTheme } from "@mui/material";
import { Dashboard, History, People, AccountBox } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateTeam from "../components/myTeam/CreateTeam";
import MyteamList from "../components/myTeam/MyteamList";
import TeamContext from "../components/context/TeamContext";
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
    icon: <AddLocationAltIcon/>,
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

export default function MyTeam() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [createTeamOpen, setCreateTeamOpen] = useState(false);
  const [createTeamTab, setCreateTeamTab] = useState(true);
  const [joinTeamTab, setJoinTeamTab] = useState(false);
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const teamProfile = useRef("src/assets/images/manChest.jpeg")
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    const res = await fetch("http://localhost:8080/view/teams", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setTeams(data.teams);
  };
  const trya = () => {
    console.log(teams);
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

  const fetchUser = async () => {
    const res = await fetch("http://127.0.0.1:8080/user:id", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
      }),
    });
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    setTeams((prev) => [...prev, name]);
    setCreateTeamOpen(false);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCreateTeam = () => {
    setCreateTeamOpen(true);
  };
  const handleCloseCreateTeam = () => {
    setCreateTeamOpen(false);
  };

  const handleCreateTeamTab = () => {
    setCreateTeamTab(true);
    setJoinTeamTab(false);
  };
  const handleJoinTeamTab = () => {
    setCreateTeamTab(false);
    setJoinTeamTab(true);
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
            MyTeam
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
          {drawerItems.map((items) => (
            <Link to={items.link} key={items.title}>
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
          display: `flex`,
          flexDirection: `column`,
          flexGrow: 1,
          p: 3,
          minHeight: `100vh`,
          minWidth: `100vh`,
        }}
      >
        <DrawerHeader />
        <Box
          sx={{
            display: `flex`,
            justifyContent: `flex-end`,
          }}
        >
          <Button onClick={trya}>get team</Button>
          <Button
            sx={{ display: `${joinTeamTab ? `none` : ``}` }}
            onClick={handleCreateTeam}
            variant="contained"
          >
            Create team
          </Button>
        </Box>
        <Box
          sx={{ display: `${createTeamTab ? "none" : ""}`, height: `36.5px` }}
        ></Box>
        <Box
          id="team-tab"
          sx={{
            display: `flex`,
            py: `0.5rem`,
            gap: `1rem`,
            borderBottom: `1px solid`,
          }}
        >
          <Box>
            <Button
              sx={{ color: `${createTeamTab ? "primary" : "black"}` }}
              onClick={handleCreateTeamTab}
            >
              My team
            </Button>
          </Box>
          <Box>
            <Button
              sx={{ color: `${joinTeamTab ? "primary" : "black"}` }}
              onClick={handleJoinTeamTab}
            >
              Team joined
            </Button>
          </Box>
        </Box>
        <Box id="team-list">
          <CreateTeam
            open={createTeamOpen}
            handleClose={handleCloseCreateTeam}
            name={handleNameChange}
            description={handleDescriptionChange}
            submit={handleTeamSubmit}
          ></CreateTeam>
          <Box
            id="my-team=list"
            sx={{
              height: `100%`,
              width: `100%`,
              flex: ` 1 1 auto`,
              flexGrow: `0`,
              flexWrap: `wrap`,
              overflowY: `auto`,
              overflowX: `hidden`,
              p: `1rem`,
              display: `flex`,
              gap: `1rem`,
            }}
          >
            <MyteamList teams={teams}></MyteamList>
            {/* <Button
              onClick={() => {
                console.log(teams);
              }}
            >
              test team
            </Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
