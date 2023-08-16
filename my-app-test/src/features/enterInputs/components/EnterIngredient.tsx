import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IngButton } from "./IngredientButton";

export const EnterIng: React.FC = () => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">What do we have?</Typography>
      <Grid container spacing={2} sx={{ m: 3 }}>
        <IngButton ingName={""} />
      </Grid>
    </Grid>
  );
};
