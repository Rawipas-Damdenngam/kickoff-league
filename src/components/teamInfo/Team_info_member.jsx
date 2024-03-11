import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Team_info_member(props2) {
  const { teamInfo } = props2;
  const members = [
    {
      firstName: "John",
      lastName: "Doe",
      position: "forward",
      gender: "male",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      position: "midfielder",
      gender: "female",
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      position: "defender",
      gender: "male",
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      position: "goalkeeper",
      gender: "female",
    },
    {
      firstName: "David",
      lastName: "Williams",
      position: "midfielder",
      gender: "male",
    },
    {
      firstName: "Emma",
      lastName: "Davis",
      position: "defender",
      gender: "female",
    },
    {
      firstName: "James",
      lastName: "Jones",
      position: "forward",
      gender: "male",
    },
    {
      firstName: "Sophia",
      lastName: "Taylor",
      position: "midfielder",
      gender: "female",
    },
    {
      firstName: "Daniel",
      lastName: "Wilson",
      position: "defender",
      gender: "male",
    },
    {
      firstName: "Olivia",
      lastName: "Martinez",
      position: "goalkeeper",
      gender: "female",
    },
  ];
  const navigate = useNavigate();
  return (
    <Box sx={{ display: `flex` }}>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          flexBasis: `20%`,
          flexShrink: `1`,
          pr: `2rem`,
        }}
      >
        <Box>Social media</Box>
        {/* <Button
          onClick={() => {
            console.log(teamInfo);
          }}
        >
          eiei
        </Button> */}
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column`, flexGrow: `1` }}>
        <Box sx={{ display: `flex`, alignItems: `center`, pb: `1rem` }}>
          <Typography variant="h2" sx={{ p: `1rem` }}>
            Player(s)
          </Typography>

          <Typography variant="h2">{teamInfo.member.length}</Typography>
        </Box>
        <Box sx={{ display: `flex`, gap: `2rem`, flexWrap: `wrap` }}>
          {teamInfo.member.map((member, index) => {
            const handleViewProfile = () => {
              navigate("/OtherProfile", { state: { id: member.id } });
            };

            return (
              <Card key={index} sx={{ maxWidth: `350px`, width: `210px` }}>
                <CardMedia
                  component="img"
                  height="194"
                  width="100%"
                  image="src/assets/images/profile2.jpeg"
                ></CardMedia>
                <CardContent>
                  <Typography variant="body1">
                    {member.first_name_eng}
                  </Typography>
                  <Typography variant="h4">{member.last_name_eng}</Typography>
                  <Typography variant="body1">
                    position: {member.position}
                  </Typography>
                  <Box
                    sx={{ display: `flex`, justifyContent: `space-between` }}
                  >
                    <Typography variant="body1">{member.gender}</Typography>
                    {/* <Box
                      sx={{
                        display: `flex`,
                        alignItems: `center`,
                        ":hover": {
                          cursor: `pointer`,
                          backgroundColor: `#f0f0f0`,
                          borderRadius: `5px`,
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: `12px`, pr: `0.2rem` }}>
                        View profile
                      </Typography>
                      <ArrowForwardIcon
                        sx={{ fontSize: `15px` }}
                      ></ArrowForwardIcon>
                    </Box> */}
                    <IconButton onClick={{}}>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
        <Box sx={{ p: `1rem`, display: `flex`, alignItems: `center` }}>
          <Typography variant="h2" sx={{ p: `1rem` }}>
            Couch & Manager
          </Typography>
          <Typography variant="h2">({members.length})</Typography>
        </Box>
      </Box>
    </Box>
  );
}
