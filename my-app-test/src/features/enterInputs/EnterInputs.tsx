import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { EnterPeopleInfo } from "./components/EnterPeopleInfo";
import { EnterIngredientInfo } from "./components/EnterIngredientInfo";

import { useGenerateMenu } from "../../hooks/useGenerateMenu";
import { NavLink } from "react-router-dom";

export const MenuDetailInput = () => {
  const {
    personChipClick,
    ingChipClick,
    IngredientData,
    PeopleData,
    MenuData,
    generateMenu,
  } = useGenerateMenu();

  return (
    <Paper elevation={5} sx={{ height: "350px;" }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <EnterPeopleInfo
          onChipClick={personChipClick}
          peopleData={PeopleData}
        />
        <EnterIngredientInfo
          onChipClick={ingChipClick}
          ingData={IngredientData}
        />
      </Grid>
      <Box sx={{ m: 5 }}>
        <NavLink to="/home">
          <Button
            variant="contained"
            sx={{ borderRadius: 5 }}
            onClick={generateMenu}
          >
            Choose
          </Button>
        </NavLink>
      </Box>
    </Paper>
  );
};
