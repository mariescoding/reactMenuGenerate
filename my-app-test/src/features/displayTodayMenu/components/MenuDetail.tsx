import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import React from "react";

import { IngredientChip } from "../../../compoonents/IngredientChip";
import { MenuRating } from "../../../compoonents/MenuRating";

type Props = {
  ingName: String;
  rating: number[];
};

export const MenuDetail: React.FC<Props> = ({ ingName, rating }) => {
  const avgRate = rating.reduce((a, b) => a + b) / rating.length;
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
