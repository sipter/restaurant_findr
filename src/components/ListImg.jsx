import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Paper } from "@mui/material";


export const ListImg = ({ customerPhotos }) => {  

  return (
    <Paper sx={{padding: "16px"}}>
    
      <ImageList
        variant="quilted"
        cols={4}
      >
        {customerPhotos.map((item) => (
          <ImageListItem
            key={item}
          >
            <img
              src = {item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
     
  
};
