import React from "react";
import { SearchBar } from "./SearchBar";
import { Card } from "@mui/material";
import { CardContent, Typography, CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const RestaurantCard = ({
  name,
  photos,
  social,
  rating,
  cuisine,
  formatted_address,
  openingHours,
  delivery,
  pickup,
  closingHours,
  onClick
}) => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const img =`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&photo_reference=${photos}&key=${API_KEY}`;
  return (
    // <>
    <Card
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
        height: "auto",
        marginTop: 3,
      }}
    >
      <CardContent>
        <Typography component="h2" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography component="p">{cuisine}</Typography>
        <Typography component="p">
          {rating} <StarIcon sx={{ color: "gold", fontSize: 18 }} />
        </Typography>
        <Typography component="p">
          Working hours: <br></br>
          Open: {openingHours} <br></br>
          Close: {closingHours}
        </Typography>
        {/* <CardActions>
          <Button
            variant="outlined"
            endIcon={<AddIcon />}
            onClick={() => addItemToCart(starter)}
          >
            {starter.price}
          </Button>
        </CardActions> */}
      </CardContent>
      <CardMedia
        sx={{ width: 151, height: "auto" }}
        component="img"
        image={img}
        alt="food img"
      />
    </Card>
  );
};
