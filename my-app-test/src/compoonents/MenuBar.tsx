import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/material/IconButton";
import MenuBookOutlinedIcon from "@mui/material/IconButton";

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

          <IconButton size="medium" edge="end" color="inherit" sx={{ mr: 2 }}>
            <HomeOutlinedIcon />
          </IconButton>
          <IconButton size="medium" edge="end" color="inherit" sx={{ mr: 2 }}>
            <MenuBookOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
