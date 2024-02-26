import { Box } from "@mui/material";
import React from "react";

export default function Team_info_member() {
  return (
    <Box sx={{ display: `flex` }}>
      <Box sx={{ display: `flex`, flexDirection: `column`, flexBasis: `20%`, flexShrink:`1` }}>
        <Box>Social media</Box>
      
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column`, flexGrow: `1` }}>
        <Box>member info</Box>
      </Box>
    </Box>
  );
}
