/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { menus } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/menu.js";

type Props = {
  ingName: String;
};

export const IngChipGrid: React.FC<Props> = ({ ingName }) => {
  return (
    <Grid item xs={4}>
      <Chip label={ingName} variant="outlined" sx={{ width: "90%" }}></Chip>
    </Grid>
  );
};
