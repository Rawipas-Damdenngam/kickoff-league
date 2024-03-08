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

export default function ShowNewOrganize(props) {
  const { close } = props;
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [newAcc, setNewAcc] = useState(false);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      if (validate) {
        const res = await fetch(
          "http://127.0.0.1:8080/auth/register/organizer",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              name: username,
              phone: phone,
            }),
          }
        );
        const data = await res.json();
        console.log("data");
        console.log(data);
        console.log("response");
        console.log(res);

        if (res.status === 200) {
          setUsername("");
          setPassword("");
          setEmail("");
          setConfirmPassword("");
          setPhone("");
          close();
        } else {
          toast.error(data.message, { position: "top-center" });
          console.log(data.message);
        }
      } else {
        console.log("invalid");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const validate = () => {
    if (
      email != "" &&
      password != "" &&
      confirmPassword != "" &&
      username != ""
    ) {
      if (email.search(/@/) > 0 && email.search(/.com/) > 0) {
        if (password >= 8) {
        }
      } else {
        toast.warning("Invalid email", { position: "top-center" });
        return false;
      }
    } else {
      toast.warning("please fill in all fields", { position: "top-center" });
      return false;
    }

    return true;
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

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

  return (
    <Box sx={{ width: `100%` }}>
      <Box sx={{ my:`0.5rem`, display: `flex`, flexDirection: `column`, gap: `0.5rem` }}>
        <TextField
          sx={{ width: `100%`, flex: `1 1 auto` }}
          type="text"
          autoFocus
          label="Email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          type="text"
          label="Organizer Name"
          placeholder="Enter Organizer Name"
          onChange={(e) => setUsername(e.target.value)}
          sx={{ width: `100%`, flex: `1 1 auto` }}
        ></TextField>
        <TextField
          type="text"
          label="Phone"
          placeholder="Enter Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          sx={{ width: `100%`, flex: `1 1 auto` }}
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
        <TextField
          sx={{ width: `100%`, mt: `0.5rem` }}
          type={showConfirmPassword ? "text" : "password"}
          label="Confirm Password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
