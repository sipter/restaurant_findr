import React from "react";
import { Card } from "@mui/material";
import { CardContent, Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";


export const RestaurantCard = ({
  name,
  photos,
  social,
  rating,
  cuisine,
  formatted_address,
  openingHours,
  openNow,
  delivery,
  pickup,
  closingHours,
  onClick,
}) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const img = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&photo_reference=${photos}&key=${API_KEY}`;
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
          Working hours: <br></br>
          Open: {openingHours} <br></br>
          Close: {closingHours}
        </Typography>
        <Box
          sx={{
            width: 220,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "auto",
          }}
        >
          <Typography component="p">
            <StarIcon sx={{ color: "gold" }} /> {rating}
          </Typography>
          <Typography component="p">
            <DeliveryDiningIcon sx={{ color: "gold" }} />
            {delivery === true ? <DoneIcon /> : <CloseIcon />}
          </Typography>
          <Typography component="p">
            <TakeoutDiningIcon sx={{ color: "gold" }} />
            {pickup === true ? <DoneIcon /> : <CloseIcon />}
          </Typography>
          <Typography component="p">
            {openNow === true && <AccessAlarmIcon sx={{ color: "gold" }} />}
            {openNow === false && <AlarmOffIcon sx={{ color: "gold" }} />}
          </Typography>
        </Box>
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
