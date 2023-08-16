import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { useState } from "react";
import { useGenerateMenu } from "./hooks/useGenerateMenu";

import { Title } from "./compoonents/Title";
import { MenuBar } from "./compoonents/MenuBar";
import { EnterInputs } from "./features/enterInputs/EnterInputs";

const GenerateApp = () => {
  return (
    <>
      <MenuBar />
      <Box>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Title />
          <EnterInputs />
        </Container>
      </Box>
    </>
  );
};

export default GenerateApp;
