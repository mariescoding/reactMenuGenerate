import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IngChipGrid } from "./IngredientButton";

export const EnterIngredientInfo: React.FC = () => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">What do we have?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        <IngChipGrid name="Chicken" />
        <IngChipGrid name="Pork" />
        <IngChipGrid name="Beef" />
        <IngChipGrid name="Salmon" />
        <IngChipGrid name="Shrimp" />
      </Grid>
    </Grid>
  );
};
