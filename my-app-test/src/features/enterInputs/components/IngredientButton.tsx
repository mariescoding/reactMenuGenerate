/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

type Props = {
  ingName: String;
};

export const IngChipGrid: React.FC<Props> = ({ ingName }) => {
  return (
    <Grid item>
      <Chip label={ingName} variant="outlined"></Chip>
    </Grid>
  );
};
