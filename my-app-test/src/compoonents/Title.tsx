import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  label: String;
};

export const Title: React.FC<Props> = ({ label }) => {
  return (
    <Typography variant="h4" color="primary">
      {label}
    </Typography>
  );
};
