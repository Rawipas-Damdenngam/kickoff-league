import { Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import "./FindMatch.css";
import FindMatchList from "../components/findMatch/FindMatchList";
import MatchInfo from "../components/findMatch/MatchInfo";
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
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Icon,
  InputAdornment,
  MenuItem,
  Modal,
  TextField,
  createTheme,
} from "@mui/material";
import { Dashboard, History, People, AccountBox } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

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

const provinces = [
  { name: "Amnat Charoen", value: "Amnat Charoen" },
  { name: "Ang Thong", value: "Ang Thong" },
  { name: "Ayutthaya", value: "Ayutthaya" },
  { name: "Bangkok", value: "Bangkok" },
  { name: "Chai Nat", value: "Chai Nat" },
  { name: "Chanthaburi", value: "Chanthaburi" },
  { name: "Chiang Mai", value: "Chiang Mai" },
  { name: "Chiang Rai", value: "Chiang Rai" },
  { name: "Chonburi", value: "Chonburi" },
  { name: "Chumphon", value: "Chumphon" },
  { name: "Kalasin", value: "Kalasin" },
  { name: "Kamphaeng Phet", value: "Kamphaeng Phet" },
  { name: "Kanchanaburi", value: "Kanchanaburi" },
  { name: "Khon Kaen", value: "Khon Kaen" },
  { name: "Krabi", value: "Krabi" },
  { name: "Lampang", value: "Lampang" },
  { name: "Lamphun", value: "Lamphun" },
  { name: "Loei", value: "Loei" },
  { name: "Lopburi", value: "Lopburi" },
  { name: "Mae Hong Son", value: "Mae Hong Son" },
  { name: "Maha Sarakham", value: "Maha Sarakham" },
  { name: "Mukdahan", value: "Mukdahan" },
  { name: "Nakhon Nayok", value: "Nakhon Nayok" },
  { name: "Nakhon Pathom", value: "Nakhon Pathom" },
  { name: "Nakhon Phanom", value: "Nakhon Phanom" },
  { name: "Nakhon Ratchasima", value: "Nakhon Ratchasima" },
  { name: "Nakhon Sawan", value: "Nakhon Sawan" },
  { name: "Nakhon Si Thammarat", value: "Nakhon Si Thammarat" },
  { name: "Nan", value: "Nan" },
  { name: "Narathiwat", value: "Narathiwat" },
  { name: "Nong Bua Lamphu", value: "Nong Bua Lamphu" },
  { name: "Nong Khai", value: "Nong Khai" },
  { name: "Nonthaburi", value: "Nonthaburi" },
  { name: "Pathum Thani", value: "Pathum Thani" },
  { name: "Pattani", value: "Pattani" },
  { name: "Phang Nga", value: "Phang Nga" },
  { name: "Phatthalung", value: "Phatthalung" },
  { name: "Phayao", value: "Phayao" },
  { name: "Phetchabun", value: "Phetchabun" },
  { name: "Phetchaburi", value: "Phetchaburi" },
  { name: "Phichit", value: "Phichit" },
  { name: "Phitsanulok", value: "Phitsanulok" },
  { name: "Phra Nakhon Si Ayutthaya", value: "Phra Nakhon Si Ayutthaya" },
  { name: "Phrae", value: "Phrae" },
  { name: "Phuket", value: "Phuket" },
  { name: "Prachin Buri", value: "Prachin Buri" },
  { name: "Prachuap Khiri Khan", value: "Prachuap Khiri Khan" },
  { name: "Ranong", value: "Ranong" },
  { name: "Ratchaburi", value: "Ratchaburi" },
  { name: "Rayong", value: "Rayong" },
  { name: "Roi Et", value: "Roi Et" },
  { name: "Sa Kaeo", value: "Sa Kaeo" },
  { name: "Sakon Nakhon", value: "Sakon Nakhon" },
  { name: "Samut Prakan", value: "Samut Prakan" },
  { name: "Samut Sakhon", value: "Samut Sakhon" },
  { name: "Samut Songkhram", value: "Samut Songkhram" },
  { name: "Saraburi", value: "Saraburi" },
  { name: "Satun", value: "Satun" },
  { name: "Sing Buri", value: "Sing Buri" },
  { name: "Sisaket", value: "Sisaket" },
  { name: "Songkhla", value: "Songkhla" },
  { name: "Sukhothai", value: "Sukhothai" },
  { name: "Suphan Buri", value: "Suphan Buri" },
  { name: "Surat Thani", value: "Surat Thani" },
  { name: "Surin", value: "Surin" },
  { name: "Tak", value: "Tak" },
  { name: "Trang", value: "Trang" },
  { name: "Trat", value: "Trat" },
  { name: "Ubon Ratchathani", value: "Ubon Ratchathani" },
  { name: "Udon Thani", value: "Udon Thani" },
  { name: "Uthai Thani", value: "Uthai Thani" },
  { name: "Uttaradit", value: "Uttaradit" },
  { name: "Yala", value: "Yala" },
  { name: "Yasothon", value: "Yasothon" },
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

export default function FindMatch() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const handleShowInfoOpen = () => {
    console.log(showInfo);
    setShowInfo(true);
  };
  const handleShowInfoClose = () => {
    console.log(showInfo);
    setShowInfo(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `60%`,
    height: `80%`,
    flex: `0 0 auto`,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
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
            Find Match
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
        sx={{ flexGrow: 1, p: 3, minHeight: `100vh`, minWidth: `100vh` }}
      >
        <DrawerHeader />
        <Box
          id="find-match"
          sx={{ display: `flex`, flexDirection: `column`, overflow: `hidden` }}
        >
          <Box>
            <Box
              id="find-match-filter"
              sx={{
                zIndex: `10`,
                px: `12px`,
                display: `flex`,
                justifyContent: `start`,
                alignItems: `center`,
                borderBottom: `1px solid #e0e0e0`,
                minHeight: `55px`,
              }}
            >
              <Box
                id="search-box"
                sx={{ maxWidth: `600px`, flexGrow: `1`, width: `100%` }}
              >
                <Box sx={{}}>
                  <Box sx={{ position: `relative` }}>
                    <Box sx={{ display: `flex` }}>
                      <TextField
                        placeholder="name, address"
                        sx={{
                          width: `100%`,
                          my: `0.5rem`,
                          textOverflow: `ellipsis`,
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton edge="end">
                                <SearchIcon
                                  sx={{ transform: `scaleX(-1)` }}
                                ></SearchIcon>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      ></TextField>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                id="dropdown-box"
                sx={{
                  px: `0.5rem`,
                  flexGrow: `0`,
                  display: `flex`,
                  alignItems: `center`,
                  flexWrap: `wrap`,
                  position: `relative`,
                }}
              >
                <Box
                  id="filter-button"
                  sx={{
                    display: `flex`,
                    flex: `1 auto`,
                  }}
                >
                  <Box
                    sx={{
                      overflow: `visible`,
                      position: `relative`,
                      width: `auto`,
                      mr: `0.5rem`,
                    }}
                  >
                    <TextField
                      select
                      label="Status"
                      defaultValue={""}
                      sx={{ my: `0.5rem`, minWidth: `150px`, width: `auto` }}
                    >
                      <MenuItem value="Coming soon">Coming soon</MenuItem>
                      <MenuItem value="Finished">Finished</MenuItem>
                    </TextField>
                  </Box>
                  <Box
                    sx={{
                      overflow: `visible`,
                      position: `relative`,
                      width: `auto`,
                      mr: `0.5rem`,
                    }}
                  >
                    <TextField
                      select
                      label="Field surface"
                      defaultValue={""}
                      sx={{ my: `0.5rem`, minWidth: `150px`, width: `auto` }}
                    >
                      <MenuItem value="Natural grass">Natural grass</MenuItem>
                      <MenuItem value="Artificial Turl">
                        Artificial turl
                      </MenuItem>
                      <MenuItem value="Flat">Flat</MenuItem>
                    </TextField>
                  </Box>
                  <Box
                    sx={{
                      overflow: `visible`,
                      position: `relative`,
                      width: `auto`,
                      mr: `0.5rem`,
                    }}
                  >
                    <TextField
                      select
                      label="Province"
                      defaultValue={""}
                      sx={{ my: `0.5rem`, minWidth: `150px`, width: `auto` }}
                    >
                      {provinces.map((province, index) => (
                        <MenuItem value={province.value} key={index}>
                          {province.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            id="content"
            sx={{
              flexDirection: `row-reverse`,
              overflow: `hidden`,
              display: `flex`,
              minWidth: `320px`,
              height: `100%`,
            }}
          >
            <Box
              id="match-list"
              sx={{
                flex: `0 0 50%`,
                width: `50%`,
                height: `75vh`,
                position: `relative`,
                overflowY: `auto`,
                overflowX: `hidden`,
              }}
            >
              <Box
                sx={{
                  background: `none`,
                  width: `100%`,
                  position: `relative`,
                  flexGrow: `0`,
                }}
              >
                <Box id="map" sx={{}}>
                  <Box sx={{ p: `20px` }}>
                    <Typography variant="h5">Match</Typography>
                    <Box
                      sx={{
                        mt: `0.5rem`,
                        display: `flex`,
                        justifyContent: `space-between`,
                        position: `relative`,
                      }}
                    >
                      {Data.Competition.length} results
                      <Box
                        sx={{ display: `flex`, alignItems: `flex-start` }}
                      ></Box>
                    </Box>
                  </Box>
                  <Box
                    id="match-card"
                    sx={{
                      p: `20px`,
                      display: `grid`,
                      gap: `8px`,
                      gridTemplateColumns: `repeat(auto-fill, minmax(286px, 1fr))`,
                    }}
                  >
                    {Data.Competition.map((competition, index) => {
                      return (
                        <FindMatchList
                          key={index}
                          competition={competition}
                          infoOpen={handleShowInfoOpen}
                          infoClose={handleShowInfoClose}
                        ></FindMatchList>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: `relative`,
                flex: `1 1 auto`,
                display: `flex`,
                flexDirection: `column`,
                overflow: `hidden`,
              }}
            >
              <Box sx={{ width: `100%`, height: `100%` }}>
                <img className="bg3"></img>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
