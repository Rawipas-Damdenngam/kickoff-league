import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Modal,
  Button,
} from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import TransgenderIcon from "@mui/icons-material/Transgender";
import GroupsIcon from "@mui/icons-material/Groups";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import FenceIcon from "@mui/icons-material/Fence";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function MatchInfo(props) {
  const { showInfo, showInfoClose, Data, style } = props;
  return (
    <Box>
        <Box sx={style}>
          <Box sx={{ overflowY: `auto`, overflowX: `hidden` }}>
            <Box sx={{ flexGrow: `0` }}>
              <Box
                sx={{
                  display: `flex`,
                  position: `relative`,
                  height: `300px`,
                }}
              >
                <img
                  className="bg4"
                  src="src/assets/images/grass_field.jpeg"
                ></img>
              </Box>
              <Box
                sx={{
                  px: `40px`,
                  display: `flex`,
                  position: `relative`,
                  gap: `46px`,
                }}
              >
                <Box
                  sx={{
                    flex: `1 1 100%`,
                    width: `100%`,
                    minWidth: `0`,
                  }}
                >
                  <Box>
                    <Box sx={{ my: `0.75rem` }}>
                      <Typography variant="h4">
                        {Data.Competition[0].name}
                      </Typography>
                    </Box>
                  </Box>
                  <hr></hr>
                  <Box sx={{ display: `flex`, flexDirection: `column` }}>
                    <Box sx={{ display: `flex` }}>
                      <Box
                        sx={{ display: `flex`, alignItems: `center`, flex: 1 }}
                      >
                        <ContentPasteIcon
                          sx={{ pr: `0.5rem`, fontSize: `35px` }}
                        ></ContentPasteIcon>
                        <Box sx={{ pr: `1rem` }}>
                          {Data.Competition[0].format}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: `flex`,
                          alignItems: `center`,
                          flex: `1`,
                        }}
                      >
                        <TransgenderIcon
                          sx={{ pr: `0.5rem`, fontSize: `35px` }}
                        ></TransgenderIcon>
                        <Box sx={{ pr: `1rem` }}>{Data.Competition[0].sex}</Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: `flex` }}>
                      <Box
                        sx={{ display: `flex`, alignItems: `center`, flex: 1 }}
                      >
                        <SocialDistanceIcon
                          sx={{ pr: `0.5rem`, fontSize: `35px` }}
                        ></SocialDistanceIcon>
                        <Box sx={{ pr: `1rem` }}>
                          {Data.Competition[0].age_over +
                            " " +
                            "-" +
                            " " +
                            Data.Competition[0].age_under +
                            " " +
                            "years old"}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: `flex`,
                          alignItems: `center`,
                          flex: `1`,
                        }}
                      >
                        <FenceIcon
                          sx={{ pr: `0.5rem`, fontSize: `35px` }}
                        ></FenceIcon>
                        <Box sx={{ pr: `1rem` }}>
                          {Data.Competition[0].field_surface}
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: `flex` }}>
                      {" "}
                      <Box
                        sx={{ display: `flex`, alignItems: `center`, flex: 1 }}
                      >
                        <GroupsIcon
                          sx={{ pr: `0.5rem`, fontSize: `35px` }}
                        ></GroupsIcon>
                        <Box sx={{ pr: `1rem` }}>
                          {Data.Competition[0].teamRegisted.length +
                            "/" +
                            Data.Competition[0].numberOfTeam +
                            " " +
                            "teams"}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: `flex`,
                          alignItems: `center`,
                          flex: `1`,
                        }}
                      >
                        <AccessTimeIcon
                          sx={{ pr: `0.5rem`, fontSize: `35px` }}
                        ></AccessTimeIcon>
                        <Box sx={{ pr: `1rem` }}>
                          {Data.Competition[0].matchTime + " " + "min"}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: `1rem` }}>
                    <Box sx={{ display: `flex` }}>
                      <HomeIcon
                        sx={{ fontSize: `30px`, pr: `0.5rem` }}
                      ></HomeIcon>
                      <Typography variant="h6" sx={{ pr: `0.5rem` }}>
                        Address:
                      </Typography>
                      <Box sx={{ flex: `1 1 auto`, pt: `0.3rem` }}>
                        {" "}
                        <Typography variant="body1" sx={{ mb: `2rem` }}>
                          {Data.addresses[25].house_number}{" "}
                          {Data.addresses[25].village}{" "}
                          {Data.addresses[25].subdistrict}{" "}
                          {Data.addresses[25].district}{" "}
                          {Data.addresses[25].postal_code}{" "}
                          {Data.addresses[25].country}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{}}>
                      <Typography variant="body1" sx={{ mb: `9rem` }}>
                        {Data.Competition[0].description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ minWidth: `230px`, flex: `1 0 27%` }}>
                  <Box sx={{ position: `sticky`, top: `20px` }}>
                    <Box
                      sx={{
                        display: `flex`,
                        flexDirection: `column`,
                        gap: `16px`,
                      }}
                    >
                      <Box sx={{ pt: `1rem` }}>
                        <Button variant="contained" sx={{ width: `100%` }}>
                          Request a Match
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: `1rem`, position: `sticky`, top: `90px` }}>
                    <Box
                      sx={{
                        display: `flex`,
                        border: `1px solid`,
                        flexDirection: `column`,
                        borderRadius: `10px`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        p: `1rem`,
                      }}
                    >
                      <img
                        src={Data.organizers[0].image}
                        style={{
                          height: `50px`,
                          width: `50px`,
                          borderRadius: `50%`,
                        }}
                        alt="org img"
                      ></img>
                      <Box sx={{ textAlign: `center` }}>
                        <Typography sx={{ mt: `0.5rem` }}>
                          {Data.organizers[0].name}
                        </Typography>
                        <Typography>{Data.organizers[0].phone}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  );
}
