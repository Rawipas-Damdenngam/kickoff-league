import React from "react";
import {useState }  from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Card(props) {
  const { request ,requestFunction } = props;




  return request?.map((req, index) => {
    const handleAccept = async () => {
      const res = await fetch(
        "http://localhost:8080/user/acceptAddMemberRequest",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestID: req?.id,
          }),
          credentials: "include",
        }
      );
      requestFunction();
      const data = await res.json();
      console.log(data);

    };
    const handleIgnore = async () => {
      const res = await fetch(
        "http://localhost:8080/user/ignoreAddMemberRequest",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestID: req?.id,
          }),
          credentials: "include",
        }
      );
      requestFunction();
      const data = await res.json();
      console.log(data);
    };
    return (
      <Box
        key={index}
        id="card-box"
        sx={{
          display: `flex`,
          borderTop: `1px solid`,
          cursor: `pointer`,
          ":hover": { backgroundColor: `#f5f5f5`, borderRadius: `5px` },
        }}
      >
        <Box
          id="image-box"
          sx={{
            display: `flex`,
            flex: `0 1 5%`,
            alignItems: `center`,
            p: `1rem`,
          }}
        >
          <Box
            id="image-border"
            sx={{
              border: `1px solid transparent`,
              borderRadius: `50%`,
              overflow: `hidden`,
              width: `50px`,
              height: `50px`,
            }}
          >
            <img
              src="src/assets/images/profile1.jpeg"
              style={{ objectFit: `fit`, width: `100%`, height: `100%` }}
            ></img>
          </Box>
        </Box>
        <Box
          id="info-box"
          sx={{
            display: `flex`,
            flexDirection: `column`,
            flex: `1 1 auto`,
            justifyContent: `center`,
          }}
        >
          <Typography variant="body3">{req?.team_name}</Typography>
          <Typography variant="body2">Incoming Team Request</Typography>
          <Typography variant="body2">Role: {req?.role}</Typography>
        </Box>
        <Box
          id="icon-box"
          sx={{
            display: `flex`,
            flex: `0 1 5%`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <IconButton onClick={handleAccept}>
            <CheckCircleIcon sx={{ fontSize: `30px` }}></CheckCircleIcon>
          </IconButton>

          <IconButton onClick={handleIgnore}>
            <CancelIcon sx={{ fontSize: `30px` }}></CancelIcon>
          </IconButton>
        </Box>
      </Box>
    );
  });
}
