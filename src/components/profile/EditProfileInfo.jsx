import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import Address from "./EditForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 700,
  bgcolor: "background.paper",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function EditProfileInfo(props) {
  const { open, handleClose ,data } = props;
  const [userID, setUserID] = useState("");

    // useEffect(() => {
    //   async () => {
    //     const res = await fetch("http://localhost:8080/user/1", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     console.log(res);
    //     const data = await res.json();
    //     console.log(data);
    //   };
    // }, []);

  const handleSave = async () => {
    const res = await fetch("http://localhost:8080/user/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    console.log(res);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box style={style} sx={{p:`1rem`}}>
        <Address data={data} handleClose={handleClose} />
      </Box>
    </Modal>

    // <Modal open={open} onClose={handleClose}>
    //   <Box sx={style}>
    //     <Box
    //       sx={{
    //         display: `flex`,
    //         flexDirection: `column`,
    //         justifyContent: `center`,
    //         overflowY: `auto`,
    //         width: `100%`,
    //         height: `100%`,
    //       }}
    //     >
    //       <Box sx={{ px: `1rem` }}>
    //         <TextField
    //           sx={{ mt: `1rem` }}
    //           fullWidth
    //           label="First name"
    //         ></TextField>
    //         <TextField
    //           sx={{ mt: `1rem` }}
    //           fullWidth
    //           label="Last name"
    //         ></TextField>
    //         <TextField
    //           sx={{ mt: `1rem` }}
    //           fullWidth
    //           label="National "
    //         ></TextField>
    //         <TextField
    //           sx={{ mt: `1rem` }}
    //           fullWidth
    //           label="Address"
    //         ></TextField>
    //         <TextField sx={{ mt: `1rem` }} fullWidth label="Gender"></TextField>
    //         <TextField sx={{ mt: `1rem` }} fullWidth label="Age"></TextField>
    //         <TextField
    //           sx={{ mt: `1rem` }}
    //           fullWidth
    //           label="Position"
    //         ></TextField>
    //         <TextField sx={{ mt: `1rem` }} fullWidth label="Phone"></TextField>
    //         <TextField sx={{ mt: `1rem` }} fullWidth label="Height"></TextField>
    //         <TextField sx={{ mt: `1rem` }} fullWidth label="Weight"></TextField>
    //         <TextField
    //           sx={{ mt: `1rem` }}
    //           fullWidth
    //           label="Description"
    //         ></TextField>
    //       </Box>
    //       <Box
    //         sx={{
    //           mt: `1rem`,
    //           pb: `1rem`,
    //           display: `flex`,
    //           justifyContent: `center`,
    //         }}
    //       >
    //         <Button variant="contained" onClick={handleSave}>
    //           Save
    //         </Button>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Modal>
  );
}
