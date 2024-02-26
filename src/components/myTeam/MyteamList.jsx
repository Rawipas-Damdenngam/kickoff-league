import { Box, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { TeamContext } from "../context/TeamContext";
import MyTeamShow from "./MyTeamShow";
import { useNavigate } from "react-router-dom";
import TeamInfo from "../../pages/TeamInfo";

export default function MyteamList(props) {
  const { teams } = props;
  const day = new Date();
  const currentDay =
    day.getDate() + "/" + day.getMonth() + "/" + day.getFullYear();
    const navigate = useNavigate();

    const handleShowInfo =()=>{
        <TeamInfo name={teams}></TeamInfo>
        navigate('/teamInfo')
    }
    console.log(teams);

  return teams.map((teams, index) => {
    return (
      <Box key={index}>
        <Box
          sx={{
            display: `flex`,
            flexDirection: `row`,
            gap: `1rem`,
            border: `1px solid`,
            borderRadius: `10px`,
            cursor: `pointer`,
            ":hover": {
              backgroundColor: `#f0f0f0`,
            },
          }}
          onClick={handleShowInfo}
        >
          <Box
            sx={{
              display: `flex`,
              minWidth: `300px`,
              minHeight: `100px`,
              alignItems: `center`,
            }}
          >
            <Box sx={{ width: `100px`, height: `100px` }}>
              <img
                src={`${
                  index % 2 === 0
                    ? "src/assets/images/liverPool.jpeg"
                    : "src/assets/images/manChest.jpeg"
                }`}
                style={{
                  width: `100%`,
                  height: `100%`,
                  borderRadius: `10px`,
                }}
              ></img>
            </Box>
            <Box>
              <Box sx={{ pl: `1rem` }}>
                <Typography>{"Name:" + " " + teams}</Typography>
              </Box>
              <Box sx={{ pl: `1rem` }}>
                <Typography>{"Create at:" + " " + currentDay}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });
}
