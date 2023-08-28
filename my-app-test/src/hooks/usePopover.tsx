import { useState } from "react";

export const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [openedPopoverId, setOpenedPopoverId] = useState<number>();

  const handleClick = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenedPopoverId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(undefined);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return { anchorEl, handleClick, handleClose, open, id, openedPopoverId };
};
