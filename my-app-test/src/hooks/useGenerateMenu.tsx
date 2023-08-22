import { useState } from "react";
import { menus } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/menu.js";
import { people } from "../demo_data/people";
import { ingredients } from "../demo_data/ingredient";

type Ingredient = {
  obj: {
    id: number;
    name: string;
    isClicked: boolean;
  };
};

// get mock data and put it into the state below

export const useGenerateMenu = () => {
  // ingredient state :

  const [IngredientData, setIngredientData] = useState<Ingredient[]>({
    ingid: {
      name: "",
      isClicked: false,
    },
  });

  // person state:
  const [PeopleData, setPeopleData] = useState({
    personid: {
      name: "",
    },
  });

  // menu state:

  const [MenuData, setMenuData] = useState({
    menuid: {
      name: "",
      ingredient: "",
      image: "",
      rating: [],
      avgRating: 0,
    },
  });

  // set data to states above

  function setIngredient() {
    setIngredientData();
  }

  function setPeople() {
    setPeopleData();
  }

  function setMenu() {
    setMenuData();
  }

  setIngredient();
  setPeople();
  setMenu();

  //eventlisteners for chips

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

  // choose top menu

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
  }

  return {
    ingChipClick,
    personChipClick,
    ingIsClicked,
    personIsClicked,
    generateMenu,
  };
};
