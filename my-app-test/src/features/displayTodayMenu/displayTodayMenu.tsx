import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import { MenuDetail } from "./components/MenuDetail";

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
    <Paper elevation={3} sx={{ height: "380px;" }}>
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
          <MenuDetail ingName={ingName} avgRate={avgRate} />
        </Grid>
      </Grid>
    </Paper>
  );
};
