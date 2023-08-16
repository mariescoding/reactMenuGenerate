import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IngChipGrid } from "./IngredientButton";
import React from "react";

export const EnterIngredientInfo: React.FC = () => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">What do we have?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        <IngChipGrid ingName="Chicken" />
        <IngChipGrid ingName="Pork" />
        <IngChipGrid ingName="Beef" />
        <IngChipGrid ingName="Salmon" />
        <IngChipGrid ingName="Shrimp" />
      </Grid>
    </Grid>
  );
};
