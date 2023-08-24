import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";

import { MenuDetail } from "./components/MenuDetail";
import { Title } from "../../compoonents/Title";

type Props = {
  title: String;
  todayMenu: {
    id: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
  };
};

export const DisplayTodayMenu: React.FC<Props> = ({ todayMenu, title }) => {
  return (
    <>
      <Box sx={{ m: 7, fontWeight: "bold" }}>
        <Title label={title} />
      </Box>
      <Paper elevation={3} sx={{ height: "380px;" }}>
        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item md={6}>
            <Box sx={{ width: "90%", height: "80%", mt: 3, ml: 1, mb: 3 }}>
              <img alt="foodImage" src={todayMenu.image}></img>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="h5">{todayMenu.name}</Typography>
            </Box>
            <Divider />
            <MenuDetail
              ingName={todayMenu.ingredient}
              rating={todayMenu.rating}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
