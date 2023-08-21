import { useState } from "react";
import { menus } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/menu.js";
import { people } from "../demo_data/people";
import { ingredients } from "../demo_data/ingredient";

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
        const ratingOfPresent: Array<number> = [];
        personIsClicked.forEach((personBoolean, i) => {
          if (personBoolean) {
            ratingOfPresent.push(menu.rating[i]);
          }
        });
        const average =
          ratingOfPresent.reduce((a, b) => a + b) / ratingOfPresent.length;
        return average;
      }

      if (
        ingIsClicked.some((ingredient) => {
          return ingredient.name === menu.ingredient && ingredient.isClicked;
        })
      ) {
        return {
          ...menu,
          avgRating: calcAvgRating(),
        };
      }
      return menu;
    });

    const sortedMenuArray = menusArray.sort(function (a, b) {
      if (a.avgRating < b.avgRating) return 1;
      if (a.avgRating > b.avgRating) return -1;
      return 0;
    });

    console.log(sortedMenuArray);
    console.log(sortedMenuArray[0]);
  }

  return {
    ingChipClick,
    personChipClick,
    ingIsClicked,
    personIsClicked,
    generateMenu,
  };
};
