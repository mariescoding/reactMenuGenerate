import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import React from "react";
import { MenuPopover } from "./popOver";

type Props = {
  anchorEl: HTMLDivElement | null;
  onClick: (
    menu: {
      menuid: number;
      name: string;
      ingredient: string;
      image: string;
      rating: number[];
      avgRating: number;
    },
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
  onClose: () => void;
  open: boolean;
  id: string | undefined;
  popoverMenu: {
    menuid: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
    avgRating: number;
  };
  menuData: {
    menuid: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
    avgRating: number;
  }[];
};

export const MenuList: React.FC<Props> = ({
  menuData,
  anchorEl,
  onClick,
  onClose,
  open,
  id,
  popoverMenu,
}) => {
  return (
    <>
      {menuData.map((menu) => {
        return (
          <Grid item xs={6} sx={{ p: 3 }}>
            <Paper
              onClick={(e) => onClick(menu, e)}
              elevation={3}
              sx={{ Width: "250px", Height: "250px" }}
            >
              <Box sx={{ Width: "250px", Height: "250px" }}>
                <Box
                  component="img"
                  sx={{ width: "100%", height: "100%" }}
                  alt="foodImage"
                  src={menu.image}
                ></Box>
              </Box>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6">{menu.name}</Typography>
              </Box>
            </Paper>
          </Grid>
        );
      })}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <MenuPopover
          ingName={popoverMenu.ingredient}
          rating={popoverMenu.rating}
        />
      </Popover>
    </>
  );
};
