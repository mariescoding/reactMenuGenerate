import IconButton from "@mui/material/IconButton";
import React from "react";

type Props = {
  iconname: String;
};

export const Iconbutton: React.FC<Props> = ({ iconname }) => {
  return (
    <IconButton size="medium" edge="end" color="inherit" sx={{ mr: 2 }}>
      {iconname}
    </IconButton>
  );
};
