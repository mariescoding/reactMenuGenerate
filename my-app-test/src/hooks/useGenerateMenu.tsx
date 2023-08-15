import React from "react";
import { useState } from "react";

export const useGenerateMenu = () => {
  const [isPersonClicked, setisPersonClicked] = useState([]);
  const [isMenuClicked, setisMenuClicked] = useState([]);

  return { isPersonClicked, isMenuClicked };
};
