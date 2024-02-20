import "react-toastify/dist/ReactToastify.css";

import { Box, InputAdornment } from "@mui/material/";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Links from "@mui/material/Link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

export default function ShowNewAcc() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [newAcc, setNewAcc] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
    setNewAcc(false);
  };

  const handleNewAcc = () => {
    setSignIn(false);
    setNewAcc(true);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleUsernameChange = (e) => {
    let newValue = e.target.value;
    setUsername(newValue);
    console.log(username);
  };
  const proceedLogin = (e) => {
    e.preventDefault();

    console.log("eiei");
  };
  return (
    <Box sx={{ width: `100%` }}>
      <Box sx={{ mb: 2 }}>
        <TextField
          sx={{ width: `100%` }}
          type="text"
          label="Email"
          placeholder="Enter email"
          onChange={(e)=>setUsername(e.target.value)}
        ></TextField>
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          sx={{ width: `100%` }}
          type="password"
          label="Password"
          placeholder="Create password"
            onChange={(e)=>setPassword(e.target.value)}
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
