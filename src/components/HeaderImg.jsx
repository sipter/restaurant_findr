import { Box } from "@mui/system";
import * as React from "react";

export const HeaderImg = () => {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <img
          alt="tables amd chairs "
          style={{
            width: "100%",
            height: "5vh",
            objectFit: "cover",
            objectPosition: "right",
          }}
          src="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
      </Box>
    </>
  );
};
