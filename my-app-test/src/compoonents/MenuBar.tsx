import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { HomeOutlined, MenuBookOutlined } from "@mui/icons-material";

type Props = {
  goBrowse: () => void;
  goHome: () => void;
};

export const MenuBar: React.FC<Props> = ({ goHome, goBrowse }) => {
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
            color="inherit"
            sx={{ mr: 2 }}
            onClick={goHome}
          >
            <HomeOutlined />
          </IconButton>

          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={goBrowse}
          >
            <MenuBookOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
