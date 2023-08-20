import { useState } from "react";

export const useGenerateMenu = () => {
  const [ingIsClicked, setIngIsClicked] = useState<boolean[]>(
    Array(5).fill(false)
  );

  const [personIsClicked, setPersonIsClicked] = useState(Array(4).fill(false));

  function ingChipClick(id: number) {
    setIngIsClicked((prevValues) => {
      return prevValues.map((ing, i) => {
        if (i === id) {
          return !ing;
        }

        return ing;
      });
    });
  }

  function personChipClick(id: number) {
    const copyPersonClicked = personIsClicked.slice();
    copyPersonClicked[id] = !copyPersonClicked[id];
    setPersonIsClicked(copyPersonClicked);
  }

  return { ingChipClick, personChipClick, ingIsClicked, personIsClicked };
};
