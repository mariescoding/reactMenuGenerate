import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PersonList } from "./PersonButton";
import React from "react";

type Props = {
  onChipClick: (key: number) => void;
  peopleData: {
    personid: number;
    name: string;
    isClicked: boolean;
  }[];
};

export const EnterPeopleInfo: React.FC<Props> = ({
  onChipClick,
  peopleData,
}) => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">Who's eating?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        <PersonList personChipClick={onChipClick} peopleData={peopleData} />
      </Grid>
    </Grid>
  );
};
