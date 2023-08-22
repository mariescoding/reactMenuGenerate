import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

type Props = {
  ingChipClick: (key: number) => void;
  ingData: {
    ingid: number;
    name: string;
    isClicked: boolean;
  }[];
};

export const IngredientList: React.FC<Props> = ({ ingChipClick, ingData }) => {
  return (
    <>
      {ingData.map((ingredient) => {
        return (
          <Grid item xs={4}>
            <Chip
              label={ingredient.name}
              variant="outlined"
              onClick={() => ingChipClick(ingredient.ingid)}
              color={ingredient.isClicked ? "secondary" : "primary"}
              sx={{ width: "90%" }}
            ></Chip>
          </Grid>
        );
      })}
    </>
  );
};
