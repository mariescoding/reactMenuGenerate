/* eslint-disable @typescript-eslint/no-unused-vars */
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { menus } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/menu.js";

type Props = {
  name: String;
};

export const IngButton: React.FC<Props> = ({ name }) => {
  return (
    <Grid item xs={4}>
      <Chip label={name} variant="outlined" sx={{ width: "90%" }}></Chip>
    </Grid>
  );
};
