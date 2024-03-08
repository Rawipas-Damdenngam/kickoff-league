import { useEffect, useState } from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, MenuItem } from "@mui/material";
import DatePicker from "./DatePicker";
import dayjs from "dayjs";

export default function AddressForm(props2) {
  const { data, handleClose } = props2;
  const [firstNameEN, setFirstName] = useState("");
  const [lastNameEN, setLastName] = useState("");
  const [firstNameTH, setFirstNameTH] = useState("");
  const [lastNameTH, setLastNameTH] = useState("");
  const [birth, setBirth] = useState(dayjs());
  const [phone, setPhone] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const heightInt = parseInt(height);
  const weightInt = parseInt(weight);
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");
  const [description, setDescription] = useState("");
  const [bornYear, setBornYear] = useState("");
  const [todo, setTodo] = useState({
    firstNameEN: "",
    lastNameEN: "",
    firstNameTH: "",
    lastNameTH: "",
    birth: "",
    phone: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    setFirstName(data.user.normal_user.first_name_eng);
    setLastName(data.user.normal_user.last_name_eng);
    setFirstNameTH(data.user.normal_user.first_name_thai);
    setLastNameTH(data.user.normal_user.last_name_thai);
    setBirth(data.user.normal_user.born);
    setPhone(data.user.normal_user.phone);
    setHeight(data.user.normal_user.height);
    setWeight(data.user.normal_user.weight);
    setGender(data.user.normal_user.sex);
    setPosition(data.user.normal_user.position);
    setNationality(data.user.normal_user.nationality);
    setDescription(data.user.normal_user.description);
  }, []);

  const handleFirstnameChangeEN = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastnameChangeEN = (e) => {
    setLastName(e.target.value);
  };
  const handleFirstnameChangeTH = (e) => {
    setFirstNameTH(e.target.value);
  };
  const handleLastnameChangeTH = (e) => {
    setLastNameTH(e.target.value);
  };
  const handleBirthChange = (newValue) => {
    setBirth(newValue);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

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
            value={firstNameEN}
            onChange={handleFirstnameChangeEN}
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
            onChange={handleLastnameChangeEN}
            value={lastNameEN}
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
            onChange={handleFirstnameChangeTH}
            value={firstNameTH}
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
            onChange={handleLastnameChangeTH}
            value={lastNameTH}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            required
            id="Birth"
            name="Born"
            label="Born"
            fullWidth
            onChange={handleBirthChange}
            value={birth}
            autoComplete="shipping address-line1"
            variant="standard"
          /> */}
          <DatePicker handleBirthChange={handleBirthChange} value={birth} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address2"
            name="address2"
            label="Phone"
            fullWidth
            onChange={handlePhoneChange}
            value={phone}
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Height"
            onChange={handleHeightChange}
            value={height}
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
            value={weight}
            onChange={handleWeightChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            select
            id="gender"
            name="gender"
            label="Gender"
            onChange={handleGenderChange}
            value={gender}
            fullWidth
            defaultValue="unisex"
          >
            <MenuItem value="unisex" label="Unisex">
              Unisex
            </MenuItem>
            <MenuItem value="male" label="Male">
              Male
            </MenuItem>
            <MenuItem value="female" label="Female">
              Female
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            onChange={handlePositionChange}
            value={position}
            label="Position"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            onChange={handleDescriptionChange}
            value={description}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="nationality"
            name="nationality"
            label="nationality"
            onChange={handleNationalityChange}
            value={nationality}
            fullWidth
            autoComplete="nationality"
          />
        </Grid>
        <Button onClick={handleSave} sx={{ m: `1rem` }} variant="contained">
          Save
        </Button>
        <Button onClick={() => console.log(birth)}>born</Button>
      </Grid>
    </React.Fragment>
  );
}
