import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";

type Props = {
  imageUrl: string;
  foodName: String;
  ingName: String;
  avgRate: number;
};

export const DisplayTodayMenu: React.FC<Props> = ({
  imageUrl,
  foodName,
  ingName,
  avgRate,
}) => {
  return (
    <Paper elevation={3} sx={{ height: "350px;" }}>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item md={6}>
          <Box sx={{ width: "90%", height: "80%", mt: 3, ml: 1, mb: 3 }}>
            <img alt="foodImage" src={imageUrl}></img>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ pb: 3 }}>
            <Typography variant="h5">{foodName}</Typography>
          </Box>
          <Divider />

          <Grid container spacing={2} sx={{ p: 3, mt: 1, mb: 1 }}>
            <Grid item md={5}>
              <Typography variant="button">Ingredient</Typography>
            </Grid>
            <Grid item md={7}>
              <Chip
                label={ingName}
                variant="filled"
                sx={{ width: "50%" }}
                color="primary"
              ></Chip>
            </Grid>

            <Grid item md={5}>
              <Typography variant="button">Rating</Typography>
            </Grid>
            <Grid item md={7}>
              <Rating name="avgRate" value={avgRate} precision={0.5} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
