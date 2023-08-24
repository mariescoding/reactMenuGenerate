import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { EnterPeopleInfo } from "./components/EnterPeopleInfo";
import { EnterIngredientInfo } from "./components/EnterIngredientInfo";
import { Title } from "../../compoonents/Title";

type Props = {
  onChooseClick: () => void;
  personClick: (id: number) => void;
  ingClick: (id: number) => void;
  ingData: {
    ingid: number;
    name: string;
    isClicked: boolean;
  }[];
  peopleData: {
    personid: number;
    name: string;
    isClicked: boolean;
  }[];
  generateMenu: () => void;
  title: string;
};

export const MenuDetailInput: React.FC<Props> = ({
  onChooseClick,
  personClick,
  ingClick,
  ingData,
  peopleData,
  generateMenu,
  title,
}) => {
  return (
    <>
      <Box sx={{ m: 7, fontWeight: "bold" }}>
        <Title label={title} />
      </Box>
      <Paper elevation={5} sx={{ height: "350px;" }}>
        <Grid container spacing={2} sx={{ p: 2 }}>
          <EnterPeopleInfo onChipClick={personClick} peopleData={peopleData} />
          <EnterIngredientInfo onChipClick={ingClick} ingData={ingData} />
        </Grid>
        <Box sx={{ m: 5 }}>
          <Button
            variant="contained"
            sx={{ borderRadius: 5 }}
            onClick={() => {
              generateMenu();
              onChooseClick();
            }}
          >
            Choose
          </Button>
        </Box>
      </Paper>
    </>
  );
};
