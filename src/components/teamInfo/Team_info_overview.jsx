import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function TeamInfoOverview() {
  const teamNew = [
    {
      title: "1",
      img: "src/assets/images/liverPool.jpeg",
      description: "lorem",
    },
    {
      title: "2",
      img: "src/assets/images/liverPool.jpeg",
      description: "lorem",
    },
    {
      title: "3",
      img: "src/assets/images/liverPool.jpeg",
      description: "lorem",
    },
    {
      title: "4",
      img: "src/assets/images/liverPool.jpeg",
      description: "lorem",
    },
    {
      title: "4",
      img: "src/assets/images/liverPool.jpeg",
      description: "lorem",
    },
  ];

  return (
    <Box sx={{ display: `flex` }}>
      <Box
        sx={{
          flexDirection: `column`,
          flexBasis: `20%`,
          flexGrow: `0`,
          flexShrink: `0`,
          border: `1px solid `,
          borderRadius: `10px`,
          p: `1rem`,
          mr: `1rem`,
          height: `fit-content`,
        }}
      >
        <Box>
          <Typography variant="h5">Visit Team website</Typography>
        </Box>
        <Box>
          <Box>
            <Box
              sx={{
                border: `1px solid`,
                borderRadius: `5px`,
                display: `flex`,
                p: `0.5rem`,
                mt: `0.5rem`,
                justifyContent: `space-between`,
              }}
            >
              <Typography>Official Website</Typography>
              <ArrowForwardIcon></ArrowForwardIcon>
            </Box>
            <Box
              sx={{
                border: `1px solid`,
                borderRadius: `5px`,
                display: `flex`,
                p: `0.5rem`,
                mt: `0.5rem`,
                justifyContent: `space-between`,
              }}
            >
              <Typography>Official Team Shop</Typography>
              <ArrowForwardIcon></ArrowForwardIcon>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          flexGrow: `1`,
          p: `1rem`,
          border: `1px solid `,
          borderRadius: `10px`,
          overflow: `hidden`,
          flexWrap: `wrap`,
          maxWidth: `100%`,
        }}
      >
        <Box id="asdas" sx={{ flexGrow: `0` }}>
          <Box
            sx={{
              border: `1px solid`,
              display: `flex`,
              flexGrow: `0`,
            }}
          >
            <Box
              sx={{
                display: `flex`,
                flexGrow: `0`,
                pr: `3rem`,
              }}
            >
              <Box
                sx={{
                  display: `flex`,
                  flexDirection: `column`,
                  flex: `1 1 auto`,
                  flexGrow: `1`,
                  flexBasis: `50%`,
                  p: `1rem`,
                  alignItems: `flex-start`,
                  justifyContent: `space-between`,
                }}
              >
                <Typography variant="h4">Team membersip</Typography>
                <Typography variant="body1">
                  lorem poem asdajhkdaksdhasjalorem poem asdajhkdaksdhasjalorem
                  poem asdajhkdaksdhasjalorem poem asdajhkdaksdhasjalorem poem
                  asdajhkdaksdhasjalorem poem asdajhkdaksdhasjalorem poem
                  asdajhkdaksdhasja
                </Typography>
                <Button variant="outlined" sx={{ mt: `1rem` }}>
                  More infomation
                </Button>
              </Box>
              <Box
                sx={{
                  display: `flex`,
                }}
              >
                <Box sx={{ maxWidth: `300px`, maxHeight: `300px`, pr: `1rem` }}>
                  <img
                    src="src/assets/images/member.jpeg"
                    style={{
                      width: `100%`,
                      height: `100%`,
                      backgroundRepeat: `no-repeat`,
                      backgroundSize: `cover`,
                    }}
                  ></img>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: `flex`, overflowX: `auto`, flexWrap: `nowrap` }}>
          <Box
            sx={{
              display: `flex`,
              flexDirection: `column`,
              mt: `1rem`,
              border: `1px solid`,
              p: `1rem`,
            }}
          >
            <Typography variant="h4" sx={{ pb: `1rem` }}>
              Latest Team News
            </Typography>
            <Box
              sx={{
                display: `flex`,
                gap: `1rem`,
              }}
            >
              <Box
                sx={{
                  display: `flex`,
                  gap: `1rem`,
                  width: `100%`,
                }}
              >
                {teamNew.map((item, index) => {
                  return (
                    <Card key={index} sx={{ maxWidth: `345px` }}>
                      <CardMedia
                        component="img"
                        height="170"
                        image={item.img}
                        sx={{ objectFit: `cover`, width: `200px` }}
                      ></CardMedia>
                      <CardContent>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>3</Box>
      </Box>
    </Box>
  );
}
