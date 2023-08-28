import Grid from "@mui/material/Grid";
import { MenuList } from "./menuList";
import React from "react";
import { usePopover } from "../../../hooks/usePopover";

type Props2 = {
  menuData: {
    menuid: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
    avgRating: number;
  }[];
};

export const MenuGallery: React.FC<Props2> = ({ menuData }) => {
  const { anchorEl, handleClick, handleClose, open, id, openedPopoverId } =
    usePopover();
  return (
    <Grid container spacing={5} sx={{ mt: 1 }}>
      <MenuList
        menuData={menuData}
        anchorEl={anchorEl}
        onClick={handleClick}
        onClose={handleClose}
        open={open}
        id={id}
        openedPopoverId={openedPopoverId}
      />
    </Grid>
  );
};
