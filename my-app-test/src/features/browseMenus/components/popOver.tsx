import { MenuDetail } from "../../displayTodayMenu/components/MenuDetail";
import Box from "@mui/material/Box";

type Props = {
  ingName: string;
  rating: number[];
};

export const MenuPopover: React.FC<Props> = ({ ingName, rating }) => {
  return (
    <Box>
      <MenuDetail ingName={ingName} rating={rating} />
    </Box>
  );
};
