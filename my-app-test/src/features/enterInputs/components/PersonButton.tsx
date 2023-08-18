import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import React from "react";
import { people } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/people.js";

type Props = {
  personChipClick: () => void;
  isSelected: boolean;
};

export const PersonButton: React.FC<Props> = ({
  personChipClick,
  isSelected,
}) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Grid item xs={6}>
            <Chip
              label={person.name}
              variant="outlined"
              onClick={personChipClick}
              key={person.id}
              color={isSelected ? "primary" : "secondary"}
              sx={{ width: "90%" }}
            ></Chip>
          </Grid>
        );
      })}
    </>
  );
};
