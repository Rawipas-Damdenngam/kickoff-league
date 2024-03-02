import { Box, Modal } from "@mui/material";
import React from "react";
import ImageCropper from "./ImageCropper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditProfileImage(props) {
  const { open, handleClose, updateImage} =
    props;
  const [file, setFile] = React.useState(null);

  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            sx={{
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Box
              sx={{
                display: `flex`,
                maxWidth: `200px`,
                maxHeight: `300px`,
                border: `1px solid`,
              }}
            >
              {/* <img src={`${currentImage}`} alt="fail to load current img"></img> */}
            </Box>
            <ImageCropper updateImage={updateImage} closeModal={handleClose}></ImageCropper>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
