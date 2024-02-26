import { Box, Card, CardMedia, Typography, CardContent } from "@mui/material";
import React from "react";

export default function findMatchList(props) {
  const { competition, infoOpen, infoClose } = props;
  return (
    <Box>
      <Card
        onClick={infoOpen}
        sx={{
          maxWidth: `345px`,
          ":hover": { backgroundColor: `lightblue` },
          cursor: `pointer`,
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={`${
            competition.id % 2 == 0
              ? "src/assets/images/grass_field.jpeg"
              : "src/assets/images/grass_field2.jpeg"
          }`}
        ></CardMedia>
        <CardContent sx={{}}>
          <Typography variant="h6">{competition.name}</Typography>
          <Box sx={{ display: `flex` }}>
            <Typography variant="body2">{competition.format}</Typography>
          </Box>
          <Typography variant="body2" sx={{}}>
            Status: {competition.status}
          </Typography>
          <Box sx={{ display: `flex` }}>
            <Typography variant="body2">
              Age over: {competition.age_over} |
            </Typography>
            <Typography variant="body2" sx={{ pl: `0.5rem` }}>
              Resgistered: {competition.teamRegisted.length} /{" "}
              {competition.numberOfTeam}
            </Typography>
          </Box>
          <Box sx={{ display: `flex` }}>
            <Typography variant="body2">
              Min players: {competition.numOfPlayer_min} |
            </Typography>
            <Typography variant="body2" sx={{ pl: `0.5rem` }}>
              Max player: {competition.numOfPlayer_max}
            </Typography>
          </Box>
          <Typography variant="body2">
            Match time: {competition.matchTime} min
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
