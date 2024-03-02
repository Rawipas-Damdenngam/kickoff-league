import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { FormControl, TextField } from "@mui/material";
import { TeamContext } from "../context/TeamContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 300,
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateTeam(props) {
  const { open, handleClose, submit, name } = props;
  const teamContext = useContext(TeamContext);

  

  const createTeam = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8080/user/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });
      const data = await res.json();
      console.log("data");
      console.log(data);
      console.log("response");
      console.log(res);
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
              <AccountBoxIcon
                sx={{ fontSize: `70px`, mb: `1rem` }}
              ></AccountBoxIcon>
              <TextField
                label="Name"
                placeholder="Enter your team name"
                onChange={name}
                sx={{ width: `100%`, mb: `1rem` }}
              ></TextField>
              <Button onClick={submit} variant="contained">
                Create
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
