import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { PersonButton } from "./PersonButton";
import React from "react";

type Props = {
  onChipClick: (key: number) => void;
  checkClick: Array<boolean>;
};

export const EnterPeopleInfo: React.FC<Props> = ({
  onChipClick,
  checkClick,
}) => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">Who's eating?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        {/* <PersonButton
          personChipClick={() => onChipClick(key)}
          isSelected={checkClick[key]}
        /> */}
      </Grid>
    </Grid>
  );
};
