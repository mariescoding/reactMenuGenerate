import React from "react";
import { useState } from "react";

export const useGenerateMenu = () => {
  const [ingIsClicked, setIngIsClicked] = useState(Array(5).fill(false));
  const [personIsClicked, setPersonIsClicked] = useState(Array(4).fill(false));

  function ingChipClick(id: number) {
    console.log("function called");

    const copyIngClicked = ingIsClicked.slice();
    copyIngClicked[id] = !copyIngClicked[id];
    setIngIsClicked(copyIngClicked);
    console.log(copyIngClicked, ingIsClicked);
  }

  function personChipClick(id: number) {
    const copyPersonClicked = personIsClicked.slice();
    copyPersonClicked[id] = !copyPersonClicked[id];
    setPersonIsClicked(copyPersonClicked);
  }

  return { ingChipClick, personChipClick, ingIsClicked, personIsClicked };
};
