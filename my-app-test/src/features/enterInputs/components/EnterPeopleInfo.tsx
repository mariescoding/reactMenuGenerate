import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
<<<<<<< Updated upstream:my-app-test/src/features/enterInputs/components/EnterPeople.tsx
import { PersonButton } from "./PersonButton";

export const EnterPeople = () => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">Who's eating?</Typography>
      <Grid container spacing={2} sx={{ m: 3 }}>
        <PersonButton personName={""} />
=======
import { people } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/people.js";
import Chip from "@mui/material/Chip";

export const EnterPeopleInfo = () => {
  const peopleList = people.map((person) => {
    return (
      <Grid item xs={6}>
        <Chip
          label={person.name}
          variant="outlined"
          sx={{ width: "90%" }}
        ></Chip>
      </Grid>
    );
  });
  return (
    <Grid item md={6}>
      <Typography variant="h6">Who's eating?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        {peopleList}
>>>>>>> Stashed changes:my-app-test/src/features/enterInputs/components/EnterPeopleInfo.tsx
      </Grid>
    </Grid>
  );
};
