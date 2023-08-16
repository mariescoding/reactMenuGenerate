import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

type Props = {
  ingName: String;
};

<<<<<<< Updated upstream
export const IngButton: React.FC<Props> = ({ ingName }) => {
=======
export const IngChipGrid: React.FC<Props> = ({ name }) => {
>>>>>>> Stashed changes
  return (
    <Grid item>
      <Chip label={ingName} variant="outlined"></Chip>
    </Grid>
  );
};
