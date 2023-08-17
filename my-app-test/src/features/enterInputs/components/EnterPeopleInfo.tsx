import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { people } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/people.js";
import Chip from "@mui/material/Chip";
import { PersonButton } from "./PersonButton";

export const EnterPeopleInfo = () => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">Who's eating?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        <PersonButton />
      </Grid>
    </Grid>
  );
};
