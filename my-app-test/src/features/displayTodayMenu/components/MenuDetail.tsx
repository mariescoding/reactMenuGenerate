import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from "react";

import { IngredientChip } from "../../../compoonents/IngredientChip";
import { MenuRating } from "../../../compoonents/MenuRating";

type Props = {
  ingName: String;
  avgRate: number;
};

export const MenuDetail: React.FC<Props> = ({ ingName, avgRate }) => {
  return (
    <Grid container spacing={2} sx={{ p: 3, mt: 1, mb: 1 }}>
      <Grid item md={5}>
        <Typography variant="button">Ingredient</Typography>
      </Grid>
      <Grid item md={7}>
        <IngredientChip ingName={ingName} />
      </Grid>

      <Grid item md={5}>
        <Typography variant="button">Rating</Typography>
      </Grid>
      <Grid item md={7}>
        <MenuRating avgRate={avgRate} />
      </Grid>
    </Grid>
  );
};
