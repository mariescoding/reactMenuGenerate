import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IngChipGrid } from "./IngredientButton";
import React from "react";

type Props = {
  onChipClick: (id: number) => void;
  ingData: {
    ingid: number;
    name: string;
    isClicked: boolean;
  }[];
};

export const EnterIngredientInfo: React.FC<Props> = ({
  onChipClick,
  ingData,
}) => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">What do we have?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        <IngChipGrid
          ingName="Chicken"
          isSelected={checkIfClicked[0].isClicked}
          ingChipClick={() => onChipClick(0)}
        />
        <IngChipGrid
          ingName="Pork"
          isSelected={checkIfClicked[1].isClicked}
          ingChipClick={() => onChipClick(1)}
        />
        <IngChipGrid
          ingName="Beef"
          isSelected={checkIfClicked[2].isClicked}
          ingChipClick={() => onChipClick(2)}
        />
        <IngChipGrid
          ingName="Salmon"
          isSelected={checkIfClicked[3].isClicked}
          ingChipClick={() => onChipClick(3)}
        />
        <IngChipGrid
          ingName="Shrimp"
          isSelected={checkIfClicked[4].isClicked}
          ingChipClick={() => onChipClick(4)}
        />
      </Grid>
    </Grid>
  );
};
