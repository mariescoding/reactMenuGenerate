import Grid from "@mui/material/Grid";
import { MenuList } from "./menuList";
import React from "react";

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
  console.log(menuData);
  return (
    <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
      <MenuList menuData={menuData} />
    </Grid>
  );
};
