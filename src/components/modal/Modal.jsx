import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CheckCircleOutline } from "@mui/icons-material";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(0,128,0)",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Create Account
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <CheckCircleOutline
              sx={{ fontSize: 60, color: "white" }}
            ></CheckCircleOutline>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, mb: 2, color: "white", fontSize: 20 }}
          >
            Create Success
          </Typography>
          <Typography>
            <Button onClick={handleClose} variant="contained" color="primary">
              OK
            </Button>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
