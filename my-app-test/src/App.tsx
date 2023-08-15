import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {useGenerateMenu} from './hooks/useGenerateMenu'

export const EnterInputs = () => void {

  const { isPersonClicked, isMenuClicked } = useGenerateMenu;
  
  return(
    
  )
  
}
 

const GenerateApp = () => {
  return (
    <>
      <Box>
        <Container>

          <Typography variant = "h2"></Typography>
          <EnterInputs/>
        </Container>

      </Box>
  </>)
    ;
};

export default GenerateApp;
