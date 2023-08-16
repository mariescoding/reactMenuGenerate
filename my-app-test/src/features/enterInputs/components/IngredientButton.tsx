import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

type Props = {
  ingName: String;
};

export const IngButton: React.FC<Props> = ({ ingName }) => {
  return (
    <Grid item>
      <Chip label={ingName} variant="outlined"></Chip>
    </Grid>
  );
};
