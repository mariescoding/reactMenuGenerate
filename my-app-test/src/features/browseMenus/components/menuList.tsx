import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import React from "react";

type Props = {
  menuData: {
    menuid: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
    avgRating: number;
  }[];
};

export const MenuList: React.FC<Props> = ({ menuData }) => {
  return (
    <>
      {menuData.map((menuData) => {
        return (
          <Grid item xs={6}>
            <Paper>
              <img alt="menuImg" src={menuData.image}></img>
              <Typography variant="h6">{menuData.name}</Typography>
            </Paper>
            {/* <Popover
              id={}
              open={}
              anchorEl={}
              onClose={}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover> */}
          </Grid>
        );
      })}
    </>
  );
};
