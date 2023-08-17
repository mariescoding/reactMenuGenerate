import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import React from "react";
import { people } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/people.js";

export const PersonButton = () => {
  return (
    <>
      {people.map((person) => {
        return (
          <Grid item xs={6}>
            <Chip
              label={person.name}
              variant="outlined"
              sx={{ width: "90%" }}
            ></Chip>
          </Grid>
        );
      })}
    </>
  );
};
