import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PersonButton } from "./PersonButton";

type Props = {
  onChipClick: (id: number) => void;
  checkClick: Array<boolean>;
};

export const EnterPeopleInfo: React.FC<Props> = (onChipClick, checkClick) => {
  return (
    <Grid item md={6}>
      <Typography variant="h6">Who's eating?</Typography>
      <Grid container spacing={2} sx={{ p: 3, mt: 1 }}>
        {/* <PersonButton
          // personChipClick={() => onChipClick(key)}
          isSelected={checkClick[0]}
        /> */}
      </Grid>
    </Grid>
  );
};
