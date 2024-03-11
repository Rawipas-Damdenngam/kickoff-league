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
import { useNavigate } from "react-router-dom";

export default function AllTeam() {
  const navigate = useNavigate();
  const teams = [
    {
      title: "Team 1",
      img: "src/assets/images/manChest.jpeg",
      description: "lorem",
      players: ["John", "Doe", "Jack", "Alex", "Micheal"],
    },
    {
      title: "Team 2",
      img: "src/assets/images/liverPool.jpeg",
      description: "lorem",
      players: ["Bobby", "Firmino", "Sadio", "Mane", "Salah"],
    },
    {
      title: "Team 3",
      img: "src/assets/images/asenal.jpeg",
      description: "lorem",
      players: ["Pierre", "Aubameyang", "Lacazette", "Thomas", "Partey"],
    },
    {
      title: "Team 4",
      img: "src/assets/images/chelsea.png",
      description: "lorem",
      players: ["Mason", "Mount", "Kai", "Havertz", "Christian", "Pulisic"],
    },
    {
      title: "Team 5",
      img: "src/assets/images/manCity.png",
      description: "lorem",
      players: ["Kevin", "De Bruyne", "Phil", "Foden", "Raheem", "Sterling"],
    },
    {
      title: "TBA",
      img: "src/assets/images/defaultTeam.png",
      description: "TBA",
      players: ["TBA"],
    },
    {
      title: "TBA",
      img: "src/assets/images/defaultTeam.png",
      description: "TBA",
      players: ["TBA"],
    },
    {
      title: "TBA",
      img: "src/assets/images/defaultTeam.png",
      description: "TBA",
      players: ["TBA"],
    },
  ];

  return (
    <Grid container spacing={2} sx={{ display: `flex`, overflow: `auto` }}>
      {teams.map((team, index) => {
        return (
          <Grid item xs={2} key={index}>
            {" "}
            <Card
              sx={{
                height: `300px`,
                cursor: `pointer`,
                ":hover": { backgroundColor: `lightgrey` },
              }}
              onClick={() => {
                navigate("/teamInfo", { state: { id: index + 1 } });
              }}
            >
              <CardHeader title={team.title}></CardHeader>
              <CardMedia
                component="img"
                src={team.img}
                height="156"
                sx={{ objectFit: `fill` }}
              ></CardMedia>
              <CardContent>
                <Typography variant="body2" sx={{ overflow: `auto` }}>
                  Player: {team?.players + " "}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
