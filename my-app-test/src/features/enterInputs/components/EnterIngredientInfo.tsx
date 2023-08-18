import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IngChipGrid } from "./IngredientButton";
import React from "react";

type Props = {
  onChipClick: (id: number) => void;
  checkClick: Array<boolean>;
};

export const EnterIngredientInfo: React.FC<Props> = ({
  onChipClick,
  checkClick,
}) => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">What do we have?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        <IngChipGrid
          ingName="Chicken"
          isSelected={checkClick[0]}
          ingChipClick={() => onChipClick(0)}
        />
        <IngChipGrid
          ingName="Pork"
          isSelected={checkClick[1]}
          ingChipClick={() => onChipClick(1)}
        />
        <IngChipGrid
          ingName="Beef"
          isSelected={checkClick[2]}
          ingChipClick={() => onChipClick(2)}
        />
        <IngChipGrid
          ingName="Salmon"
          isSelected={checkClick[3]}
          ingChipClick={() => onChipClick(3)}
        />
        <IngChipGrid
          ingName="Shrimp"
          isSelected={checkClick[4]}
          ingChipClick={() => onChipClick(4)}
        />
      </Grid>
    </Grid>
  );
};
