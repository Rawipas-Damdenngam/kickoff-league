import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue(props2) {
  const {handleBirthChange ,} = props2;
  const [value, setValue] = useState(dayjs());


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Controlled picker"
          value={value}
          onChange={handleBirthChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
