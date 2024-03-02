import "react-toastify/dist/ReactToastify.css";

import { Box, InputAdornment } from "@mui/material/";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Links from "@mui/material/Link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Data from "../../../mockUP.json";
import { toast } from "react-toastify";

export default function ShowSignIn(props) {
  const { username, password, logIn } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // const logIn = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8080/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: username,
  //         password: password,
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <Box sx={{}}>
      <Box sx={{ mb: 2 }}>
        <TextField
          sx={{ width: `100%` }}
          label="Email"
          placeholder="Enter email"
          autoFocus
          onChange={username}
          onKeyDown={(e) => (e.key === "Enter" ? proceedLogin(e) : null)}
        ></TextField>
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          id="password"
          sx={{ width: `100%` }}
          type={showPassword ? "text" : "password"}
          label="Password"
          placeholder="Enter password"
          onChange={password}
          onKeyDown={(e) => (e.key === "Enter" ? proceedLogin(e) : null)}
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
            onClick={logIn}
            onKeyDown={(e) => (e.key === "Enter" ? {logIn} : null)}
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
}
