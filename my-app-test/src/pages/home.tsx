import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { MainContent } from "../compoonents/MainContent";

type Props = {
  isMenuChosen: boolean;
  isBrowseClicked: boolean;
  isHomeClicked: boolean;
  clickChoose: () => void;
  personChipClick: (id: number) => void;
  ingChipClick: (id: number) => void;
  ingredientData: {
    ingid: number;
    name: string;
    isClicked: boolean;
  }[];
  peopleData: {
    personid: number;
    name: string;
    isClicked: boolean;
  }[];
  generateMenu: () => void;
  todayMenuData: {
    id: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
  };
};

export const Home: React.FC<Props> = ({
  isMenuChosen,
  clickChoose,
  todayMenuData,
  personChipClick,
  ingChipClick,
  ingredientData,
  peopleData,
  generateMenu,
  isBrowseClicked,
  isHomeClicked,
}) => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <MainContent
          isMenuChosen={isMenuChosen}
          isBrowseClicked={isBrowseClicked}
          isHomeClicked={isHomeClicked}
          onChooseClick={clickChoose}
          todayMenu={todayMenuData}
          personClick={personChipClick}
          ingClick={ingChipClick}
          ingData={ingredientData}
          peopleData={peopleData}
          generateMenu={generateMenu}
        />
      </Container>
    </Box>
  );
};
