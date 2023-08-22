import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IngredientList } from "./IngredientButton";
import React from "react";

type Props = {
  onChipClick: (key: number) => void;
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
        <IngredientList ingChipClick={onChipClick} ingData={ingData} />
      </Grid>
    </Grid>
  );
};
