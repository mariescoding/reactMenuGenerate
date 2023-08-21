import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Title } from "../compoonents/Title";
import { EnterInputs } from "../features/enterInputs/EnterInputs";

export const Generate = () => {
  return (
    <>
      <Box>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box sx={{ m: 7, fontWeight: "bold" }}>
            <Title label="Choose Today's Menu" />
          </Box>
          <EnterInputs />
        </Container>
      </Box>
    </>
  );
};
