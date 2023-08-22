import Chip from "@mui/material/Chip";

type Props = {
  ingName: String;
};

export const IngredientChip: React.FC<Props> = ({ ingName }) => {
  return (
    <Chip
      label={ingName}
      variant="filled"
      sx={{ width: "50%" }}
      color="primary"
    ></Chip>
  );
};
