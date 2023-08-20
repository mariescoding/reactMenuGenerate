import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { EnterPeopleInfo } from "./components/EnterPeopleInfo";
import { EnterIngredientInfo } from "./components/EnterIngredientInfo";
import { useGenerateMenu } from "../../hooks/useGenerateMenu";

export const EnterInputs = () => {
  const {
    personChipClick,
    ingChipClick,
    ingIsClicked,
    personIsClicked,
    generateMenu,
  } = useGenerateMenu();

  return (
    <Paper elevation={5} sx={{ height: "350px;" }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <EnterPeopleInfo
          onChipClick={personChipClick}
          checkClick={personIsClicked}
        />
        <EnterIngredientInfo
          onChipClick={ingChipClick}
          checkClick={ingIsClicked}
        />
      </Grid>
      <Box sx={{ m: 5 }}>
        <Button
          variant="contained"
          sx={{ borderRadius: 5 }}
          onClick={generateMenu}
        >
          Choose
        </Button>
      </Box>
    </Paper>
  );
};
