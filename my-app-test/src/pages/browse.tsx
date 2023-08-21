import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Title } from "../compoonents/Title";

export const Browse = () => {
  return (
    <>
      <Box>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box sx={{ m: 7, fontWeight: "bold" }}>
            <Title label="Browse All " />
          </Box>
        </Container>
      </Box>
    </>
  );
};
