import { useEffect, useState } from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { Button, MenuItem } from "@mui/material";


export default function FormCompetition(props2) {
  const { data, handleClose } = props2;

  // const getUser = async () => {
  //   const res = await fetch("http://localhost:8080/view/users/1", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(res);
  //   const data = await res.json();
  //   console.log(data);
  // };

  const handleSave = async () => {
    const res = await fetch("http://localhost:8080/user/normalUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        first_name_thai: firstNameTH,
        last_name_thai: lastNameTH,
        first_name_eng: firstNameEN,
        last_name_eng: lastNameEN,
        born: birth,
        phone: phone,
        height: heightInt,
        weight: weightInt,
        sex: gender,
        position: position,
        nationality: nationality,
        description: description,
      }),
    });
    handleClose();
    console.log(res);
    const data = res.json();
    console.log(data);
  };

  return (
    <React.Fragment>
      <Typography sx={{ mb: `1rem` }} variant="h6" gutterBottom>
        Edit profile info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstNameEN"
            name="firstNameEN"
            label="First name EN"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastNameEN"
            name="lastNameEN"
            label="Last name EN"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstNameTH"
            name="firstNameTH"
            label="First name TH"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastNameTH"
            name="lastNameTH"
            label="Last name TH"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address2"
            name="address2"
            label="Phone"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Height"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="Weight"
            fullWidth
          />
        </Grid>

        <Button onClick={handleClose} sx={{ m: `1rem` }} variant="contained">
          Save
        </Button>
        <Button onClick={() => console.log(birth)}>born</Button>
      </Grid>
    </React.Fragment>
  );
}
