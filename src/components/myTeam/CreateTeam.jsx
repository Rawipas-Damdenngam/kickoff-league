import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { FormControl, IconButton, TextField, styled } from "@mui/material";
import { TeamContext } from "../context/TeamContext";
import ImageCropper from "./ImageCropper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 400,
  width: 500,
  overflowX: "auto",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateTeam(props) {
  const { open, handleClose } = props;
  const teamContext = useContext(TeamContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamProfile, setTeamProfile] = useState(false);
  const idString = localStorage.getItem("id");
  const id = parseInt(idString);


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
          owner_id: id,
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
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{ mb: `1rem` }}>
            Create Team
          </Typography>
          <Box>
            <Box
              sx={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                flex: `1 1 auto`,
                overflowY: `auto`,
                overflowX: `hidden`,
              }}
            >
              <IconButton sx={{}}>
                <AccountBoxIcon
                  sx={{ fontSize: `70px`, mb: `1rem` }}
                ></AccountBoxIcon>
              </IconButton>
              {/* {teamProfile ? (
                <ImageCropper handleClose={handleCloseTeamProfile} />
              ) : (
                ""
              )} */}
              <TextField
                required
                label="Name"
                placeholder="Enter your team name"
                onChange={handleName}
                sx={{ width: `100%`, mb: `1rem` }}
              ></TextField>
              <TextField
                label="Description"
                placeholder="your description"
                onChange={handleDescription}
                sx={{ width: `100%`, mb: `1rem` }}
              ></TextField>
              <Button onClick={createTeam} variant="contained">
                Create
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
