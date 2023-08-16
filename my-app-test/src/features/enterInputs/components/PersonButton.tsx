import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

type Props = {
  personName: String;
};

export const PersonButton: React.FC<Props> = ({ personName }) => {
  return (
    <Grid item>
      <Chip label={personName} variant="outlined"></Chip>
    </Grid>
  );
};
