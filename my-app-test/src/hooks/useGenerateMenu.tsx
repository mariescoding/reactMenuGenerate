import { useState } from "react";
import { menus } from "/Users/mariemuramatsu/Personal/React/my-app-test/src/demo_data/menu.js";
import { people } from "../demo_data/people";
import { ingredients } from "../demo_data/ingredient";

type Ingredient = {
  ingid: number;
  name: string;
  isClicked: boolean;
};

type People = {
  personid: number;
  name: string;
  isClicked: boolean;
};

type Menu = {
  menuid: number;
  name: string;
  ingredient: string;
  image: string;
  rating: number[];
  avgRating: number;
};

// get mock data and put it into the state below

export const useGenerateMenu = () => {
  // ingredient state :

  const [IngredientData, setIngredientData] = useState<Ingredient[]>([
    {
      ingid: 0,
      name: "",
      isClicked: false,
    },
  ]);

  // person state:
  const [PeopleData, setPeopleData] = useState<People[]>([
    {
      personid: 0,
      name: "",
      isClicked: false,
    },
  ]);

  // menu state:

  const [MenuData, setMenuData] = useState<Menu[]>([
    {
      menuid: 0,
      name: "",
      ingredient: "",
      image: "",
      rating: [],
      avgRating: 0,
    },
  ]);

  // set data to states above

  function setIngredient() {
    const ingDataCopy = ingredients.map((ingredient) => {
      return {
        id: ingredient.id,
        name: ingredient.name,
        isClicked: ingredient.isClicked,
      };
    });
    setIngredientData(ingDataCopy);
  }

  function setPeople() {
    const peopleDataCopy = people.map((person) => {
      return {
        personid: person.id,
        name: person.name,
        isClicked: false,
      };
    });
    setPeopleData(peopleDataCopy);
  }

  function setMenu() {
    const menuDataCopy = menus.map((menu) => {
      return {
        menuid: menu.id,
        name: menu.name,
        ingredient: menu.ingredient,
        image: menu.image,
        rating: menu.rating,
        avgRating: menu.avgRating,
      };
    });
    setMenuData(menuDataCopy);
  }

  setIngredient();
  setPeople();
  setMenu();

  //eventlisteners for chips

  function ingChipClick(id: number) {
    setIngredientData((prevValues) => {
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
    setPeopleData((prevValues) => {
      return prevValues.map((person, i) => {
        if (i === id) {
          return {
            ...person,
            isClicked: !person.isClicked,
          };
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
    IngredientData,
    PeopleData,
    MenuData,
    generateMenu,
  };
};
