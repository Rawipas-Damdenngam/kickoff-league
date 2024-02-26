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
import { toast, ToastContainer } from "react-toastify";

export default function ShowNewAcc() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [newAcc, setNewAcc] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState("normal");

  const signUp = async () => {
    try {
      if (validate) {
        const res = await fetch("http://127.0.0.1:8080/auth/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            role: role,
          }),
        });
        const data = await res.json();
        if (data.status === 200) {
          navigate("/news");
        } else {
          console.log(data.message);
        }
        setUsername("");
        setPassword("");
      } else {
        console.log("invalid");
      }
    } catch (e) {
      console.log(e);
    }
    validate();
  };

  const validate = () => {
    if (username === "" && password === "") {
      toast.error("Please fill in all fields", { position: "top-center" });
      return false;
    } else if (username.search(/@/) < 0) {
      toast.error("Invalid email", { position: "top-center" });
      return false;
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters", {
        position: "top-center",
      });
      return false;
    } else if (password.search(/[A-Z]/) < 0) {
      toast.error("Password must contain at least 1 uppercase letter", {
        position: "top-center",
      });
      return false;
    } else if (password.search(/[a-z]/) < 0) {
      toast.error("Password must contain at least 1 lowercase letter", {
        position: "top-center",
      });
      return false;
    } else if (password.search(/[0-9]/) < 0) {
      toast.error("Password must contain at least 1 number", {
        position: "top-center",
      });
      return false;
    } else if (password.search(/[!@#$%^&*(),.?":{}|<>_-]/) < 0) {
      toast.error("Password must contain at least 1 special character", {
        position: "top-center",
      });
      return false;
    } else {
      toast.success("Register success", { position: "top-center" });
      return true;
    }
  };

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
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          sx={{ width: `100%` }}
          type={showPassword ? "text" : "password"}
          label="Password"
          placeholder="Create password"
          onChange={(e) => setPassword(e.target.value)}
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
          <Button
            type="button"
            onClick={signUp}
            variant="contained"
            sx={{ p: `9px 16px`, width: `100%` }}
          >
            Submit
          </Button>

          <Links sx={{ mt: 1, textAlign: "center" }} underline="none">
            Term of service
          </Links>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}
