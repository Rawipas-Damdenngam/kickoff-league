import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Card, CardContent, CardMedia, colors } from "@mui/material";

export default function ChoseSport() {
  const [selectedSport, setSelectedSport] = useState(null);
  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose your sport
      </Typography>
      <Box sx={{ display: `flex`, gap: `1rem` }}>
        <Card
          onClick={() => handleSelectSport("football")}
          sx={{
            border: `${selectedSport === "football" ? `1px` : ""} ${
              selectedSport === "football" ? "solid" : ""
            } ${selectedSport === "football" ? "blue" : ""}`,
            cursor: "pointer",
            ":hover": { backgroundColor: colors.grey[200] },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="src/assets/images/football.jpeg"
          ></CardMedia>
          <CardContent>
            <Typography variant="h4">Football</Typography>
          </CardContent>
        </Card>
        <Card
          onClick={() => handleSelectSport("futsal")}
          sx={{
            border: `${selectedSport === "futsal" ? `1px` : ""} ${
              selectedSport === "futsal" ? "solid" : ""
            } ${selectedSport === "futsal" ? "blue" : ""}`,
            cursor: "pointer",
            ":hover": { backgroundColor: colors.grey[200] },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="src/assets/images/futsal.jpeg"
          ></CardMedia>
          <CardContent>
            <Typography variant="h4">Futsal</Typography>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
}
