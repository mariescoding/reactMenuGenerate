import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Title } from "../compoonents/Title";
import { DisplayTodayMenu } from "../features/displayTodayMenu/displayTodayMenu";

export const Home = () => {
  return (
    <>
      <Box>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box sx={{ m: 7, fontWeight: "bold" }}>
            <Title label="Today's Menu" />
          </Box>
          <DisplayTodayMenu
            imageUrl=""
            foodName="chicken rice"
            ingName="pork"
            avgRate={3}
          />
        </Container>
      </Box>
    </>
  );
};
