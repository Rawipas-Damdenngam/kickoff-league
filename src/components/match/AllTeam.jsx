import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function AllTeam() {
  const teams = [
    {
      title: "Team 1",
      img: "src/assets/images/manChest.jpeg",
      description: "lorem",
    },
    {
      title: "Team 2",
      img: "src/assets/images/manChest.jpeg",
      description: "lorem",
    },
    {
      title: "Team 3",
      img: "src/assets/images/manChest.jpeg",
      description: "lorem",
    },
    {
      title: "Team 4",
      img: "src/assets/images/manChest.jpeg",
      description: "lorem",
    },
    {
      title: "Team 5",
      img: "src/assets/images/manChest.jpeg",
      description: "lorem",
    },
    {
      title: "TBA",
      img: "src/assets/images/defaultTeam.png",
      description: "TBA",
    },
  ];
  return (
    <Grid container spacing={2} sx={{ display: `flex` }}>
      {teams.map((team, index) => {
        return (
          <Grid item xs={3} key={index}>
            {" "}
            <Card>
              <CardHeader title={team.title}></CardHeader>
              <CardMedia
                component="img"
                src={team.img}
                height="194"
                sx={{ objectFit: `contain` }}
              ></CardMedia>
              <CardContent>
                <Typography variant="body2">{team.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
