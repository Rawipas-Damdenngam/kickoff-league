import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";


export default function Search(props2) {
  const {search} = props2;
  return (
    <OutlinedInput
      fullWidth
      placeholder="Search"
      onChange={search}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon sx={{ rotate: `90deg` }} />
        </InputAdornment>
      }
    ></OutlinedInput>
  );
}
