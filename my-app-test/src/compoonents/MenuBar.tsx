import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { HomeOutlined, MenuBookOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const MenuBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Seeds
            </Typography>
          </Box>

          <IconButton
            size="medium"
            edge="start"
            color="secondary"
            sx={{ mr: 2 }}
          >
            <NavLink to="/">
              <HomeOutlined />
            </NavLink>
          </IconButton>

          <IconButton
            size="medium"
            edge="start"
            color="secondary"
            sx={{ mr: 2 }}
          >
            <NavLink to="/browse">
              <MenuBookOutlined />
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
