import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import React from "react";

type Props = {
  personChipClick: (key: number) => void;
  peopleData: {
    personid: number;
    name: string;
    isClicked: boolean;
  }[];
};

export const PersonList: React.FC<Props> = ({
  personChipClick,
  peopleData,
}) => {
  return (
    <>
      {peopleData.map((person) => {
        return (
          <Grid item xs={6}>
            <Chip
              label={person.name}
              variant="outlined"
              onClick={() => personChipClick(person.personid)}
              color={person.isClicked ? "secondary" : "primary"}
              sx={{ width: "90%" }}
            ></Chip>
          </Grid>
        );
      })}
    </>
  );
};
