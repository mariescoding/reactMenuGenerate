import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";

import { MenuDetail } from "../displayTodayMenu/components/MenuDetail";
import { Title } from "../../compoonents/Title";

type Props = {
  title: String;
};

export const BrowseAllMenu: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Box sx={{ m: 7, fontWeight: "bold" }}>
        <Title label={title} />
      </Box>
    </>
  );
};
