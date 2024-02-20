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
  const {username , password, proceedLogin } = props;

  const [showPassword, setShowPassword] = useState(false);


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };


  

  return (
    <Box sx={{}}>
      <Box sx={{ mb: 2 }}>
        <TextField
          sx={{ width: `100%` }}
          label="Email"
          placeholder="Enter email"
          onChange={username}
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
            onClick={proceedLogin}
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
