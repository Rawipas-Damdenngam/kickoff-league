import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import StartDatePickerValue from "./StartDatePicker";
import EndDatePickerValue from "./EndDatePicker";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box } from "@mui/material";
import { useRef, useState } from "react";

export default function CompetitionInfo() {
  const currentDate = new Date().toISOString().split("T")[0];
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [toDo, setToDo] = useState({
    tourName: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChangeName = (event) => {
    setToDo({
      tourName: event.target.value,
    });
  };

  const handleChangeDescription = (event) => {
    setToDo({
      description: event.target.value,
    });
  };

  const handleChangeStartDate = (event) => {
    setToDo({
      startDate: event.target.value,
    });
  };

  const handleChangeEndDate = (event) => {
    setToDo({
      endDate: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Competition Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="tourName"
            label="Tournament Name"
            placeholder="Kickoff league 2024"
            fullWidth
            autoComplete="Tour Name"
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StartDatePickerValue handleChange={handleChangeStartDate} />
        </Grid>
        <Grid item xs={12} md={6}>
          <EndDatePickerValue handleChange={handleChangeEndDate} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            label="Description"
            placeholder="This is a football tournament for all ages"
            multiline
            fullWidth
            rows={4}
            autoComplete="description"
            onChange={handleChangeDescription}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Image</Typography>
          <Button
            sx={{ mt: 1 }}
            component="label"
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput
              onChange={handleChangeImage}
              type="file"
              ref={inputRef}
            />
          </Button>
          <Box
            sx={{
              display: `${image ? `block` : `none`}`,
              mt: `1rem`,
              width: `100%`,
              height: `200px`,
            }}
          >
            <img
              src={image ? URL.createObjectURL(image) : null}
              style={{ width: `100%`, height: `100%`, objectFit: `contain` }}
            ></img>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
