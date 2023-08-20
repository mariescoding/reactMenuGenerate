import { useState } from "react";

export const useGenerateMenu = () => {
  const [ingIsClicked, setIngIsClicked] = useState<Ingredient[]>([
    { name: "Chicken", isClicked: false },
    { name: "Pork", isClicked: false },
    { name: "Beef", isClicked: false },
    { name: "Salmon", isClicked: false },
    { name: "Shrimp", isClicked: false },
  ]);

  const [personIsClicked, setPersonIsClicked] = useState<boolean[]>(
    Array(4).fill(false)
  );

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
    setPersonIsClicked((prevValues) => {
      return prevValues.map((person, i) => {
        if (i === id) {
          return !person;
        }

        return person;
      });
    });
  }

  return { ingChipClick, personChipClick, ingIsClicked, personIsClicked };
};
