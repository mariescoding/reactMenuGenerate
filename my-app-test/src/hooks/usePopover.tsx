import { useState } from "react";

export const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  //const [openedPopoverId, setOpenedPopoverId] = useState<number>();
  const [menuPopover, setMenuPopover] = useState({
    menuid: 0,
    name: "",
    ingredient: "",
    image: "",
    rating: [],
    avgRating: 0,
  });

  const handleClick = (menu: any, event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuPopover(menu);
    //setOpenedPopoverId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    //setOpenedPopoverId(undefined);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return { anchorEl, handleClick, handleClose, open, id, menuPopover };
};
