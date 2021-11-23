import React from "react";
import { Autocomplete, TextField } from "@mui/material";
const Auto = () => {
  return (
    <React.Fragment>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </React.Fragment>
  );
};
const top100Films = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];
export default Auto;
