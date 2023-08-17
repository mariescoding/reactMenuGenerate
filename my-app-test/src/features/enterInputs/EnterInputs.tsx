import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { EnterPeopleInfo } from "./components/EnterPeopleInfo";
import { EnterIngredientInfo } from "./components/EnterIngredientInfo";

export const EnterInputs = () => {
  //const { isPersonClicked, isMenuClicked } = useGenerateMenu;

  return (
    <Paper elevation={5} sx={{ height: "350px;" }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <EnterPeopleInfo />
        <EnterIngredientInfo />
      </Grid>
      <Box sx={{ m: 5 }}>
        <Button variant="contained" sx={{ borderRadius: 5 }}>
          Choose
        </Button>
      </Box>
    </Paper>
  );
};
