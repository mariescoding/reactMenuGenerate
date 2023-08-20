import { useState } from "react";
import { menus } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/menu.js";

type Ingredient = {
  name: string;
  isClicked: boolean;
};

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
          return {
            ...ing,
            isClicked: !ing.isClicked,
          };
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

  function generateMenu() {
    const menusArray = menus.map((menu) => {
      function calcAvgRating() {
        const average =
          menu.rating.reduce((a, b) => a + b) / menu.rating.length;
        console.log(average);

        return null;
      }

      var haveIng = false;
      ingIsClicked.forEach((ingredient) => {
        if (ingredient.name === menu.ingredient && ingredient.isClicked) {
          haveIng = true;
        }
      });

      if (haveIng) {
        return {
          ...menu,
          avgRating: calcAvgRating(),
        };
      }
      return menu;
    });

    console.log(menusArray);

    // menusArray.sort(function (a,))
  }

  return {
    ingChipClick,
    personChipClick,
    ingIsClicked,
    personIsClicked,
    generateMenu,
  };
};
