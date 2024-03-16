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
import { useEffect, useState } from "react";
import { Button, Icon, MenuItem, TextField, createTheme } from "@mui/material";
import { Dashboard, History, People, AccountBox } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

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

const countries = [
  { name: "Afghanistan", value: "AF" },
  { name: "Åland Islands", value: "AX" },
  { name: "Albania", value: "AL" },
  { name: "Algeria", value: "DZ" },
  { name: "American Samoa", value: "AS" },
  { name: "Andorra", value: "AD" },
  { name: "Angola", value: "AO" },
  { name: "Anguilla", value: "AI" },
  { name: "Antarctica", value: "AQ" },
  { name: "Antigua and Barbuda", value: "AG" },
  { name: "Argentina", value: "AR" },
  { name: "Armenia", value: "AM" },
  { name: "Aruba", value: "AW" },
  { name: "Australia", value: "AU" },
  { name: "Austria", value: "AT" },
  { name: "Azerbaijan", value: "AZ" },
  { name: "Bahamas", value: "BS" },
  { name: "Bahrain", value: "BH" },
  { name: "Bangladesh", value: "BD" },
  { name: "Barbados", value: "BB" },
  { name: "Belarus", value: "BY" },
  { name: "Belgium", value: "BE" },
  { name: "Belize", value: "BZ" },
  { name: "Benin", value: "BJ" },
  { name: "Bermuda", value: "BM" },
  { name: "Bhutan", value: "BT" },
  { name: "Bolivia (Plurinational State of)", value: "BO" },
  { name: "Bonaire, Sint Eustatius and Saba", value: "BQ" },
  { name: "Bosnia and Herzegovina", value: "BA" },
  { name: "Botswana", value: "BW" },
  { name: "Bouvet Island", value: "BV" },
  { name: "Brazil", value: "BR" },
  { name: "British Indian Ocean Territory", value: "IO" },
  { name: "Brunei Darussalam", value: "BN" },
  { name: "Bulgaria", value: "BG" },
  { name: "Burkina Faso", value: "BF" },
  { name: "Burundi", value: "BI" },
  { name: "Cabo Verde", value: "CV" },
  { name: "Cambodia", value: "KH" },
  { name: "Cameroon", value: "CM" },
  { name: "Canada", value: "CA" },
  { name: "Cayman Islands", value: "KY" },
  { name: "Central African Republic", value: "CF" },
  { name: "Chad", value: "TD" },
  { name: "Chile", value: "CL" },
  { name: "China", value: "CN" },
  { name: "Christmas Island", value: "CX" },
  { name: "Cocos (Keeling) Islands", value: "CC" },
  { name: "Colombia", value: "CO" },
  { name: "Comoros", value: "KM" },
  { name: "Congo", value: "CG" },
  { name: "Congo (Democratic Republic of the)", value: "CD" },
  { name: "Cook Islands", value: "CK" },
  { name: "Costa Rica", value: "CR" },
  { name: "Côte d'Ivoire", value: "CI" },
  { name: "Croatia", value: "HR" },
  { name: "Cuba", value: "CU" },
  { name: "Curaçao", value: "CW" },
  { name: "Cyprus", value: "CY" },
  { name: "Czech Republic", value: "CZ" },
  { name: "Denmark", value: "DK" },
  { name: "Djibouti", value: "DJ" },
  { name: "Dominica", value: "DM" },
  { name: "Dominican Republic", value: "DO" },
  { name: "Ecuador", value: "EC" },
  { name: "Egypt", value: "EG" },
  { name: "El Salvador", value: "SV" },
  { name: "Equatorial Guinea", value: "GQ" },
  { name: "Eritrea", value: "ER" },
  { name: "Estonia", value: "EE" },
  { name: "Eswatini", value: "SZ" },
  { name: "Ethiopia", value: "ET" },
  { name: "Falkland Islands (Malvinas)", value: "FK" },
  { name: "Faroe Islands", value: "FO" },
  { name: "Fiji", value: "FJ" },
  { name: "Finland", value: "FI" },
  { name: "France", value: "FR" },
  { name: "French Guiana", value: "GF" },
  { name: "French Polynesia", value: "PF" },
  { name: "French Southern Territories", value: "TF" },
  { name: "Gabon", value: "GA" },
  { name: "Gambia", value: "GM" },
  { name: "Georgia", value: "GE" },
  { name: "Germany", value: "DE" },
  { name: "Ghana", value: "GH" },
  { name: "Gibraltar", value: "GI" },
  { name: "Greece", value: "GR" },
  { name: "Greenland", value: "GL" },
  { name: "Grenada", value: "GD" },
  { name: "Guadeloupe", value: "GP" },
  { name: "Guam", value: "GU" },
  { name: "Guatemala", value: "GT" },
  { name: "Guernsey", value: "GG" },
  { name: "Guinea", value: "GN" },
  { name: "Guinea-Bissau", value: "GW" },
  { name: "Guyana", value: "GY" },
  { name: "Haiti", value: "HT" },
  { name: "Heard Island and McDonald Islands", value: "HM" },
  { name: "Holy See", value: "VA" },
  { name: "Honduras", value: "HN" },
  { name: "Hong Kong", value: "HK" },
  { name: "Hungary", value: "HU" },
  { name: "Iceland", value: "IS" },
  { name: "India", value: "IN" },
  { name: "Indonesia", value: "ID" },
  { name: "Iran (Islamic Republic of)", value: "IR" },
  { name: "Iraq", value: "IQ" },
  { name: "Ireland", value: "IE" },
  { name: "Isle of Man", value: "IM" },
  { name: "Israel", value: "IL" },
  { name: "Italy", value: "IT" },
  { name: "Jamaica", value: "JM" },
  { name: "Japan", value: "JP" },
  { name: "Jersey", value: "JE" },
  { name: "Jordan", value: "JO" },
  { name: "Kazakhstan", value: "KZ" },
  { name: "Kenya", value: "KE" },
  { name: "Kiribati", value: "KI" },
  { name: "Korea (Democratic People's Republic of)", value: "KP" },
  { name: "Korea (Republic of)", value: "KR" },
  { name: "Kuwait", value: "KW" },
  { name: "Kyrgyzstan", value: "KG" },
  { name: "Lao People's Democratic Republic", value: "LA" },
  { name: "Latvia", value: "LV" },
  { name: "Lebanon", value: "LB" },
  { name: "Lesotho", value: "LS" },
  { name: "Liberia", value: "LR" },
  { name: "Libya", value: "LY" },
  { name: "Liechtenstein", value: "LI" },
  { name: "Lithuania", value: "LT" },
  { name: "Luxembourg", value: "LU" },
  { name: "Macao", value: "MO" },
  { name: "Madagascar", value: "MG" },
  { name: "Malawi", value: "MW" },
  { name: "Malaysia", value: "MY" },
  { name: "Maldives", value: "MV" },
  { name: "Mali", value: "ML" },
  { name: "Malta", value: "MT" },
  { name: "Marshall Islands", value: "MH" },
  { name: "Martinique", value: "MQ" },
  { name: "Mauritania", value: "MR" },
  { name: "Mauritius", value: "MU" },
  { name: "Mayotte", value: "YT" },
  { name: "Mexico", value: "MX" },
  { name: "Micronesia (Federated States of)", value: "FM" },
  { name: "Moldova (Republic of)", value: "MD" },
  { name: "Monaco", value: "MC" },
  { name: "Mongolia", value: "MN" },
  { name: "Montenegro", value: "ME" },
  { name: "Montserrat", value: "MS" },
  { name: "Morocco", value: "MA" },
  { name: "Mozambique", value: "MZ" },
  { name: "Myanmar", value: "MM" },
  { name: "Namibia", value: "NA" },
  { name: "Nauru", value: "NR" },
  { name: "Nepal", value: "NP" },
  { name: "Netherlands", value: "NL" },
  { name: "New Caledonia", value: "NC" },
  { name: "New Zealand", value: "NZ" },
  { name: "Nicaragua", value: "NI" },
  { name: "Niger", value: "NE" },
  { name: "Nigeria", value: "NG" },
  { name: "Niue", value: "NU" },
  { name: "Norfolk Island", value: "NF" },
  { name: "North Macedonia", value: "MK" },
  { name: "Northern Mariana Islands", value: "MP" },
  { name: "Norway", value: "NO" },
  { name: "Oman", value: "OM" },
  { name: "Pakistan", value: "PK" },
  { name: "Palau", value: "PW" },
  { name: "Palestine, State of", value: "PS" },
  { name: "Panama", value: "PA" },
  { name: "Papua New Guinea", value: "PG" },
  { name: "Paraguay", value: "PY" },
  { name: "Peru", value: "PE" },
  { name: "Philippines", value: "PH" },
  { name: "Pitcairn", value: "PN" },
  { name: "Poland", value: "PL" },
  { name: "Portugal", value: "PT" },
  { name: "Puerto Rico", value: "PR" },
  { name: "Qatar", value: "QA" },
  { name: "Réunion", value: "RE" },
  { name: "Romania", value: "RO" },
  { name: "Russian Federation", value: "RU" },
  { name: "Rwanda", value: "RW" },
  { name: "Saint Barthélemy", value: "BL" },
  { name: "Saint Helena, Ascension and Tristan da Cunha", value: "SH" },
  { name: "Saint Kitts and Nevis", value: "KN" },
  { name: "Saint Lucia", value: "LC" },
  { name: "Saint Martin (French part)", value: "MF" },
  { name: "Saint Pierre and Miquelon", value: "PM" },
  { name: "Saint Vincent and the Grenadines", value: "VC" },
  { name: "Samoa", value: "WS" },
  { name: "San Marino", value: "SM" },
  { name: "Sao Tome and Principe", value: "ST" },
  { name: "Saudi Arabia", value: "SA" },
  { name: "Senegal", value: "SN" },
  { name: "Serbia", value: "RS" },
  { name: "Seychelles", value: "SC" },
  { name: "Sierra Leone", value: "SL" },
  { name: "Singapore", value: "SG" },
  { name: "Sint Maarten (Dutch part)", value: "SX" },
  { name: "Slovakia", value: "SK" },
  { name: "Slovenia", value: "SI" },
  { name: "Solomon Islands", value: "SB" },
  { name: "Somalia", value: "SO" },
  { name: "South Africa", value: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", value: "GS" },
  { name: "South Sudan", value: "SS" },
  { name: "Spain", value: "ES" },
  { name: "Sri Lanka", value: "LK" },
  { name: "Sudan", value: "SD" },
  { name: "Suriname", value: "SR" },
  { name: "Svalbard and Jan Mayen", value: "SJ" },
  { name: "Sweden", value: "SE" },
  { name: "Switzerland", value: "CH" },
  { name: "Syrian Arab Republic", value: "SY" },
  { name: "Taiwan, Province of China", value: "TW" },
  { name: "Tajikistan", value: "TJ" },
  { name: "Tanzania, United Republic of", value: "TZ" },
  { name: "Thailand", value: "TH" },
  { name: "Timor-Leste", value: "TL" },
  { name: "Togo", value: "TG" },
  { name: "Tokelau", value: "TK" },
  { name: "Tonga", value: "TO" },
  { name: "Trinidad and Tobago", value: "TT" },
  { name: "Tunisia", value: "TN" },
  { name: "Turkey", value: "TR" },
  { name: "Turkmenistan", value: "TM" },
  { name: "Turks and Caicos Islands", value: "TC" },
  { name: "Tuvalu", value: "TV" },
  { name: "Uganda", value: "UG" },
  { name: "Ukraine", value: "UA" },
  { name: "United Arab Emirates", value: "AE" },
  { name: "United Kingdom of Great Britain and Northern Ireland", value: "GB" },
  { name: "United States of America", value: "US" },
  { name: "Uruguay", value: "UY" },
  { name: "Uzbekistan", value: "UZ" },
  { name: "Vanuatu", value: "VU" },
  { name: "Venezuela (Bolivarian Republic of)", value: "VE" },
  { name: "Viet Nam", value: "VN" },
  { name: "Virgin Islands (British)", value: "VG" },
  { name: "Virgin Islands (U.S.)", value: "VI" },
  { name: "Wallis and Futuna", value: "WF" },
  { name: "Western Sahara", value: "EH" },
  { name: "Yemen", value: "YE" },
  { name: "Zambia", value: "ZM" },
  { name: "Zimbabwe", value: "ZW" },
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

export default function FindPeople() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const navigate  = useNavigate();

  const [filterResults, setFilterResults] = useState([Data.normalUser]);

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleFilterGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const handleMinAge = (e) => {
    setMinAge(e.target.value);
  };

  const handleMaxAge = (e) => {
    setMaxAge(e.target.value);
  };

  useEffect(() => {
    const result = Data.normalUser.filter((user) => {
      return (
        user.first_name_eng.toLowerCase().includes(name) ||
        user.last_name_eng.toLowerCase().includes(name)
      );
    });
    console.log(result);
    setFilterResults(result);
  }, [name,]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = async() => {
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
          <Typography variant="h6" sx={{ flexGrow: 1, minWidth: `200px` }}>
            Find People
          </Typography>

            <Button onClick={handleLogout} variant="contained" sx={{}}>
              <LogoutIcon></LogoutIcon>
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
        sx={{ flex: `1 1 auto`, p: 3, minHeight: `100vh`, minWidth: `100vh` }}
      >
        <DrawerHeader />
        <Box
          sx={{
            p: `1.75rem`,
            mx: `auto`,
            boxSizing: `border-box`,
            border: `0 solid`,
          }}
        >
          <Box
            component="section"
            sx={{
              mb: `1.5rem`,
              borderRadius: `0.25rem`,
              position: `relative`,
            }}
          >
            <Box sx={{ p: `1.25rem` }}>
              <Box
                sx={{
                  display: `flex`,
                  pb: `0.75rem`,
                  mb: `0.75rem`,
                  borderBottomWidth: `1px`,
                  borderBottom: ` 1px solid black`,
                  color: `black`,
                  alignItems: `center`,
                  textAlign: `center`,
                  verticalAlign: `middle`,
                }}
              >
                <Typography variant="h4" sx={{}}>
                  Kickoff League
                </Typography>
                <Box
                  sx={{
                    ml: `2rem`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                  }}
                >
                  <Box>
                    <TextField
                      sx={{ width: `300px` }}
                      placeholder="Search Players"
                      onChange={handleSearch}
                      defaultValue=""
                    ></TextField>
                  </Box>
                </Box>
              </Box>
              <Box
                id="player-content"
                sx={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  flexDirection: `column`,
                }}
              >
                <Box
                  sx={{
                    display: `flex`,
                    pt: `0.5rem`,
                    width: `100%`,
                    ml: `-0.25rem`,
                  }}
                >
                  <Box sx={{ width: `12%`, mr: `1rem` }}>
                    <TextField
                      fullWidth
                      label="Gender"
                      select
                      value={gender}
                      onChange={handleFilterGender}
                      defaultValue="All"
                    >
                      <MenuItem value="All">All gender</MenuItem>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </TextField>
                  </Box>
                  <Box sx={{ width: `12%`, mr: `1rem` }}>
                    <TextField
                      fullWidth
                      label="Min Age"
                      placeholder="18"
                      defaultValue=""
                      onChange={handleMinAge}
                    ></TextField>
                  </Box>
                  <Box sx={{ width: `12%`, mr: `1rem` }}>
                    <TextField
                      fullWidth
                      label="Max Age"
                      placeholder="50"
                      defaultValue=""
                      onChange={handleMaxAge}
                    ></TextField>
                  </Box>
                  <Box sx={{ width: `auto`, mr: `1rem` }}>
                    <TextField
                      fullWidth
                      label="National"
                      select
                      sx={{ minWidth: `150px` }}
                      defaultValue=""
                    >
                      {countries.map((items, index) => {
                        return (
                          <MenuItem key={index} value={items.value}>
                            {items.name}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </Box>
                </Box>
                <Box sx={{ width: `100%` }}>
                  <Box
                    sx={{
                      mt: `1rem`,
                      width: `100%`,
                    }}
                  >
                    <Box sx={{ position: `relative`, maxWidth: `100%` }}>
                      <Box sx={{ overflow: `auto`, position: `relative` }}>
                        <Box id="table" sx={{ lineHeight: `1.25` }}>
                          <Box id="table-head">
                            <Box
                              sx={{
                                display: `flex`,
                                flex: `1 1 auto`,
                                textTransform: `uppercase`,
                                p: `14px 6px `,
                                backgroundColor: `#1976d2`,
                                justifyContent: `space-between`,
                              }}
                            >
                              <Typography
                                sx={{
                                  color: `white`,
                                  flex: `1 1 200px`,
                                  maxWidth: `500px`,
                                  textAlign: `center`,
                                }}
                              >
                                Players
                              </Typography>

                              <Typography
                                sx={{
                                  flex: `1 1 auto`,
                                  color: `white`,
                                }}
                              >
                                Position
                              </Typography>
                              <Typography
                                sx={{ flex: `1 1 auto`, color: `white` }}
                              >
                                Gender
                              </Typography>
                              <Typography
                                sx={{ flex: `1 1 auto`, color: `white` }}
                              >
                                Age
                              </Typography>
                              <Typography
                                sx={{ flex: `1 1 auto`, color: `white` }}
                              >
                                Country
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            id="table-body"
                            sx={{
                              display: `flex`,
                              flexDirection: `column`,
                              flex: `1 1 auto`,
                              justifyContent: `space-between`,
                              alignItems: `stretch`,
                            }}
                          >
                            {filterResults.map((items, index) => {
                              const currentDate = new Date();
                              const birthDate = new Date(items.date_of_birth);
                              const age =
                                currentDate.getFullYear() -
                                birthDate.getFullYear();

                              return (
                                <Box
                                  key={index}
                                  sx={{
                                    display: `flex`,
                                    flex: `1 1 auto`,
                                    borderBottom: `1px solid black`,
                                    ":hover": {
                                      backgroundColor: `lightblue`,
                                    },
                                    cursor: `pointer`,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: `flex`,
                                      flex: `0 1 auto`,
                                      width: `100px`,
                                      height: `100px`,
                                      p: `1rem`,
                                    }}
                                  >
                                    <img
                                      style={{
                                        width: `100%`,
                                        height: `100%`,
                                        borderRadius: `50%`,
                                      }}
                                      src={`${
                                        items.id % 2 == 0
                                          ? "src/assets/images/profile1.jpeg"
                                          : "src/assets/images/profile2.jpeg"
                                      }`}
                                    ></img>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: `flex`,
                                      alignItems: `center`,
                                      flex: `1 1 65px`,
                                      maxWidth: `270px`,
                                    }}
                                  >
                                    <Box sx={{}}>
                                      <Typography variant="body1">
                                        {items.first_name_eng +
                                          " " +
                                          items.last_name_eng}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: `flex`,
                                      alignItems: `center`,
                                      flex: `1 1 40px`,
                                      maxWidth: `240px`,
                                    }}
                                  >
                                    <Box>
                                      <Typography variant="body1">
                                        {items.favoritePosition}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: `flex`,
                                      alignItems: `center`,
                                      flex: `1 1 35px`,
                                      maxWidth: `220px`,
                                    }}
                                  >
                                    <Box>
                                      <Typography variant="=body1">
                                        {items.sex}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: `flex`,
                                      alignItems: `center`,
                                      flex: `1 1 auto`,
                                      maxWidth: `200px`,
                                    }}
                                  >
                                    <Box>
                                      <Typography variant="body1">
                                        {age}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: `flex`,
                                      alignItems: `center`,
                                      flex: `1 1 auto`,
                                    }}
                                  >
                                    <Box>
                                      <Typography>
                                        {items.nationality}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              );
                            })}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
