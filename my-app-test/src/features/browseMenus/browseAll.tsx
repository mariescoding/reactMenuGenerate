import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

import { MenuDetail } from "../displayTodayMenu/components/MenuDetail";
import { Title } from "../../compoonents/Title";
import { MenuGallery } from "./components/menuGallery";

type Props = {
  title: String;
  menuData: {
    menuid: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
    avgRating: number;
  }[];
};

export const BrowseAllMenu: React.FC<Props> = ({ title, menuData }) => {
  return (
    <>
      <Box sx={{ m: 7, fontWeight: "bold" }}>
        <Title label={title} />
      </Box>
      <Container maxWidth="md">
        <MenuGallery menuData={menuData} />
      </Container>
    </>
  );
};
