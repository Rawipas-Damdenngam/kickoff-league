import { Link } from "react-router-dom";
import "./Register.css";
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
import {
  Button,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  InputLabel,
  TextField,
  createTheme,
} from "@mui/material";
import { Dashboard, History, People, AccountBox } from "@mui/icons-material";

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

const HiddenImageInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Register() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="success">
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
            Create Account
          </Typography>
          <Box sx={{ paddingLeft: 110 }}></Box>
          <Button variant="contained" sx={{}}>
            Register
          </Button>
          <Button variant="contained" sx={{ marginLeft: 2 }}>
            Login
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
        sx={{
          p: 5,
          flexGrow: 1,
        }}
      >
        <DrawerHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minHeight: 100 + "vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccountCircleIcon
            sx={{ fontSize: 100, mt: 2, mb: 2, cursor: "pointer" }}
          ></AccountCircleIcon>
          <Button sx={{ mb: 2 }} component="label" variant="contained">
            Upload Image
            <HiddenImageInput type="file" />
          </Button>
          <FormControl
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              marginBottom: 2,
            }}
          >
            <TextField
              type="text"
              required
              label="First name"
              placeholder="First name"
            ></TextField>
            <TextField
              type="text"
              required
              label="Last name"
              placeholder="Last name"
            ></TextField>
          </FormControl>
          <FormControl
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              marginBottom: 2,
            }}
          >
            <TextField
              type="password"
              required
              label="Password"
              placeholder="******"
            ></TextField>
            <TextField
              type="password"
              required
              label="Confirm password"
              placeholder="******"
            ></TextField>
          </FormControl>
          <FormControl
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              marginBottom: 2,
            }}
          >
            <TextField
              type="text"
              required
              label="Phone number"
              placeholder="08x-xxx-xxxx"
            ></TextField>
            <TextField
              type="text"
              required
              label="Email Address"
              placeholder="Example@hotmail.com"
            ></TextField>
          </FormControl>
          <FormControl
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              marginBottom: 2,
            }}
          >
            <TextField
              type="text"
              required
              label="Age"
              placeholder="18"
            ></TextField>
            <TextField
              type="text"
              select
              required
              label="National"
              sx={{ width: 195 }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </TextField>
          </FormControl>
          <FormControl
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              marginBottom: 2,
            }}
          >
            <TextField type="text" label="Address" placeholder=""></TextField>
            <TextField
              type="text"
              required
              label="Date of birth"
              placeholder="DD/MM/YYYY"
            ></TextField>
          </FormControl>
          <FormControl
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              marginBottom: 2,
            }}
          >
            <TextField
              type="text"
              select
              required
              label="Role"
              sx={{ width: 195 }}
            >
              <option>Coach</option>
              <option>Backword</option>
              <option>Forward</option>
              <option>Goal</option>
              <option>Wing</option>
            </TextField>
          </FormControl>
          <Link to={"/achievement"}>
            <Button variant="contained">Next</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
