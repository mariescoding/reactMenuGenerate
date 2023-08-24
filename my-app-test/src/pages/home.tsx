import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Title } from "../compoonents/Title";
import { MainContent } from "../compoonents/MainContent";
import { useComponentChange } from "../hooks/useComponentChange";
import { useGenerateMenu } from "../hooks/useGenerateMenu";

export const Home = () => {
  const { clickChoose, isMenuChosen } = useComponentChange();
  const {
    personChipClick,
    ingChipClick,
    ingredientData,
    peopleData,
    generateMenu,
    todayMenuData,
  } = useGenerateMenu();
  console.log(todayMenuData);
  return (
    <Box>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Box sx={{ m: 7, fontWeight: "bold" }}>
          <Title label="Today's Menu" />
        </Box>
        <MainContent
          isMenuChosen={isMenuChosen}
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
