import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export const MenuBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", ml: 2, flexGrow: 1 }}
          >
            Seeds
          </Typography>

          {/* <Iconbutton iconname={<HomeOutlinedIcon />} />
            <Iconbutton iconname={<MenuBookOutlinedIcon />} /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
