import { ArrowForward } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TeamInfo from "../../pages/TeamInfo";
import { useNavigate } from "react-router-dom";

export default function Card(props2) {
  const { teams } = props2;
  const navigate = useNavigate();
  return (
    <Box
      id="card-box"
      sx={{ display: `flex`, flexDirection: `column`, gap: `1rem` }}
    >
      {teams.map((team, index) => {
        const handleViewTeam = () => {
          navigate("/teamInfo", { state: { id: team.id } });
          <TeamInfo id={team.id} />;
          console.log(team.id);
        };
        return (
          <Box
            key={index}
            sx={{
              display: `flex`,
              border: `1px solid `,
              borderRadius: `10px`,
              justifyContent: `space-between`,
              overflow: `hidden`,
            }}
          >
            <Box
              sx={{
                height: `150px`,
                width: `200px`,
              }}
            >
              <img
                src="src/assets/images/liverPool.jpeg"
                style={{
                  width: `100%`,
                  height: `100%`,
                  objectFit: `cover`,
                }}
              ></img>
            </Box>
            <Box
              sx={{
                display: `flex`,
                flexDirection: `column`,
                width: `100%`,
                pl: `5rem`,
                py: `1rem`,
              }}
            >
              <Box>
                <Typography variant="h3">{team.name}</Typography>
              </Box>
              <Box>
                <Typography variant="body1">{team.description}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: `flex`,
                flexDirection: `column`,
                width: `35%`,
                justifyContent: `space-between`,
                p: `1rem`,
              }}
            >
              <Box
                sx={{
                  display: `flex`,
                  justifyContent: `flex-end`,
                  alignItems: `center`,
                  gap: `0.5rem`,
                }}
              >
                <Box>
                  <Typography variant="h4"> {team.number_of_member}</Typography>
                </Box>
                <Box sx={{}}>
                  <GroupsIcon sx={{ fontSize: `40px` }}></GroupsIcon>
                </Box>
              </Box>
              <Box
                sx={{
                  display: `flex`,
                  justifyContent: `flex-end`,
                }}
              >
                <Button
                  onClick={handleViewTeam}
                  variant="contained"
                  endIcon={<ArrowForward />}
                >
                  View Team
                </Button>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
