import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  Card,
  CardContent,
  CardMedia,
  FormControl,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import { TeamContext } from "../context/TeamContext";

export default function CreateCompetition(props) {
  const { open, handleClose, openForm, closeForm } = props;
  const teamContext = useContext(TeamContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamProfile, setTeamProfile] = useState(false);

  const handleCloseTeamProfile = () => {
    setTeamProfile(false);
  };

  const handleOpenTeamProfile = () => {
    setTeamProfile(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const fetchUser = async () => {
    const res = await fetch("http://localhost:8080/view/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const createTeam = async () => {
    try {
      const res = await fetch("http://localhost:8080/user/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      });
      const data = await res.json();
      console.log("data");
      console.log(data);
      console.log("response");
      console.log(res);
      handleClose();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Box sx={{ p: `1rem` }}>
      <Box sx={{ display: `flex`, justifyContent: `center`, p: `2rem` }}>
        <Typography variant="h2">Choose your sport</Typography>
      </Box>
      <Box
        sx={{
          display: `flex`,
          flex: `1 1 auto`,
          justifyContent: `space-around`,
          alignItems: `center`,
        }}
      >
        <Card
          sx={{
            ":hover": {
              cursor: `pointer`,
              backgroundColor: `#f5f5f5`,
            },
          }}
          onClick={handleClose}
        >
          <CardMedia
            component="img"
            src="src/assets/images/football.jpeg"
            sx={{ width: `250px` }}
          ></CardMedia>
          <CardContent>
            <Typography>Football</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            ":hover": {
              cursor: `pointer`,
              backgroundColor: `#f5f5f5`,
            },
          }}
          onClick={handleClose}
        >
          <CardMedia
            component="img"
            src="src/assets/images/futsal.jpeg"
            sx={{ width: `250px` }}
          ></CardMedia>
          <CardContent>
            <Typography>Futsal</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
