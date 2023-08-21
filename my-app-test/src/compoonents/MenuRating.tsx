import Rating from "@mui/material/Rating";

type Props = {
  avgRate: number;
};

export const MenuRating: React.FC<Props> = ({ avgRate }) => {
  return <Rating name="avgRate" value={avgRate} precision={0.5} readOnly />;
};
