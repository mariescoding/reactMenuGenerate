import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PersonButton } from "./PersonButton";

export const EnterPeople = () => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">Who's eating?</Typography>
      <Grid container spacing={2} sx={{ m: 3 }}>
        <PersonButton personName={""} />
      </Grid>
    </Grid>
  );
};
