import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const SearchBar = ({onChange}) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50%", margin: "auto", display: "flex", justifyContent: "center", marginTop: 2  },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search your restaurant"
        variant="outlined"
        onChange={onChange}
      />
    </Box>
  );
};

// import React from "react";

// export const SearchBar = ({ onChange }) => {
//   return (
//     <>
//       <div className="search-input">
//         <input
//           placeholder="type here your favorite Cuisine"
//           className="search"
//           type="text"
//           onChange={onChange}
//         />
//       </div>
//     </>
//   );
// };
