import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Title } from "../compoonents/Title";
import { MenuDetailInput } from "../features/enterInputs/EnterInputs";

export const Generate = () => {
  return (
    <>
      <Box>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box sx={{ m: 7, fontWeight: "bold" }}>
            <Title label="Choose Today's Menu" />
          </Box>
          <MenuDetailInput />
        </Container>
      </Box>
    </>
  );
};
