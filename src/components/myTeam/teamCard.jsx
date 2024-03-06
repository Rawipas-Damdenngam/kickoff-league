import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Forward, MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function MediaControlCard(props2) {
  const { teams } = props2;
  const theme = useTheme();
  const navigate = useNavigate();

  const handleTeamInfo = () => {
    navigate("/teamInfo");
  };

  return teams.map((team, index) => {
    return (
      <Card key={index} sx={{ display: "flex", flexBasis: `400px` }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="src/assets/images/manChest.jpeg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: `1` }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {team.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {team.description}
            </Typography>
          </CardContent>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              justifyContent: `flex-end`,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
          }}
        >
          <IconButton>
            <MoreVert />
          </IconButton>
          <IconButton onClick={handleTeamInfo}>
            <Forward />
          </IconButton>
        </Box>
      </Card>
    );
  });
}
