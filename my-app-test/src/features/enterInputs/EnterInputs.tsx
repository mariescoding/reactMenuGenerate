import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { EnterPeople } from "./components/EnterPeople";
import { EnterIng } from "./components/EnterIngredient";

export const EnterInputs = () => {
  //const { isPersonClicked, isMenuClicked } = useGenerateMenu;

  return (
    <Paper elevation={5} sx={{ height: "350px;" }}>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <EnterPeople />
        <EnterIng />
      </Grid>
      <Button variant="contained" sx={{ m: 5, borderRadius: 5 }}>
        Choose
      </Button>
    </Paper>
  );
};
