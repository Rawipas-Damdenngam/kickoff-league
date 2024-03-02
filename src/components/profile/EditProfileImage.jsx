import { Box, Modal } from "@mui/material";
import React from "react";
import ImageCropper from "./ImageCropper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  m:`1rem`
};

export default function EditProfileImage(props) {
  const { open, handleClose, updateImage } = props;
  const [file, setFile] = React.useState(null);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
            width: `100%`,
            height: `100%`,
            overflowY: `auto`,
          }}
        >
          <ImageCropper
            updateImage={updateImage}
            closeModal={handleClose}
          ></ImageCropper>
        </Box>
      </Box>
    </Modal>
  );
}
