import { Link } from "react-router-dom";
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
import { useState } from "react";
import { Button, Icon, TextField, createTheme } from "@mui/material";
import {
  Dashboard,
  History,
  People,
  AccountBox,
  ArrowForward,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupsIcon from "@mui/icons-material/Groups";

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

export default function FindTeam() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  // const [filterTeam , setFilterTeam] = useState([teams.name]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const teams = [
    {
      name: "Team 1",
      members: 18,
      description: "Description for Team 1.",
    },
    {
      name: "Team 2",
      members: 15,
      description: "Description for Team 2.",
    },
    {
      name: "Team 3",
      members: 20,
      description: "Description for Team 3.",
    },
    {
      name: "Team 4",
      members: 17,
      description: "Description for Team 4.",
    },
    {
      name: "Team 5",
      members: 16,
      description: "Description for Team 5.",
    },
    {
      name: "Team 6",
      members: 19,
      description: "Description for Team 6.",
    },
    {
      name: "Team 7",
      members: 14,
      description: "Description for Team 7.",
    },
    {
      name: "Team 8",
      members: 22,
      description: "Description for Team 8.",
    },
    {
      name: "Team 9",
      members: 21,
      description: "Description for Team 9.",
    },
    {
      name: "Team 10",
      members: 16,
      description: "Description for Team 10.",
    },
  ];

  const handleFilterTeam = () => {
    //search team by name
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
            FindTeam
          </Typography>
          <Box sx={{ paddingLeft: 110 }}></Box>
          <Link to={"/"}>
            <Button variant="contained" sx={{ backgroundColor: `` }}>
              <LogoutIcon sx={{}}></LogoutIcon>
            </Button>
          </Link>
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
            height: `100px`,
            width: `100%`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <TextField
            sx={{ width: `100%` }}
            label="search"
            placeholder="enter team name"
          ></TextField>
        </Box>
        <Box sx={{ display: `flex`, flexDirection: `column`, gap: `1rem` }}>
          {teams.map((team, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: `flex`,
                  border: `1px solid `,
                  borderRadius: `10px`,
                  justifyContent: `space-between`,
                }}
              >
                <Box sx={{ height: `150px`, width: `200px` }}>
                  <img
                    src="src/assets/images/liverPool.jpeg"
                    style={{
                      width: `100%`,
                      height: `100%`,
                      objectFit: `cover`,
                    }}
                  ></img>
                </Box>
                <Box
                  sx={{
                    display: `flex`,
                    flexDirection: `column`,
                    width: `100%`,
                    pl: `5rem`,
                    py: `1rem`,
                  }}
                >
                  <Box>
                    <Typography variant="h2">{team.name}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">{team.description}</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: `flex`,
                    flexDirection: `column`,
                    width: `20%`,
                    justifyContent: `space-between`,
                    p: `1rem`,
                  }}
                >
                  <Box
                    sx={{
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
                      gap: `0.5rem`,
                    }}
                  >
                    <Box>
                      <Typography variant="h4"> {team.members}</Typography>
                    </Box>
                    <Box sx={{}}>
                      <GroupsIcon sx={{ fontSize: `40px` }}></GroupsIcon>
                    </Box>
                  </Box>
                  <Box sx={{ display: `flex`, justifyContent: `flex-end` }}>
                    <Button variant="contained" endIcon={<ArrowForward />}>
                      View Team
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
