import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const SearchTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
      color: "white",
      fontSize: 30,
    },
  },
});

export const SearchBar = ({ onChange }) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ paddingTop: "32px" }}
    >
      <TextField
        id="custom-css-outlined-input"
        label="Search your restaurant"
        variant="outlined"
        onChange={onChange}
        fullWidth
        sx={{ fontWeight: "bold" }}
      />
    </Box>
  );
};
