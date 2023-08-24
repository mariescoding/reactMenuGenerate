import { MenuDetailInput } from "../features/enterInputs/EnterInputs";
import { DisplayTodayMenu } from "../features/displayTodayMenu/displayTodayMenu";
import { BrowseAllMenu } from "../features/browseMenus/browseAll";

type Props = {
  isMenuChosen: boolean;
  isBrowseClicked: boolean;
  isHomeClicked: boolean;
  onChooseClick: () => void;
  personClick: (id: number) => void;
  ingClick: (id: number) => void;
  ingData: {
    ingid: number;
    name: string;
    isClicked: boolean;
  }[];
  peopleData: {
    personid: number;
    name: string;
    isClicked: boolean;
  }[];
  generateMenu: () => void;
  todayMenu: {
    id: number;
    name: string;
    ingredient: string;
    image: string;
    rating: number[];
  };
};

export const MainContent: React.FC<Props> = ({
  isMenuChosen,
  onChooseClick,
  todayMenu,
  personClick,
  ingClick,
  ingData,
  peopleData,
  generateMenu,
  isHomeClicked,
  isBrowseClicked,
}) => {
  return (
    <>
      {isBrowseClicked ? (
        <BrowseAllMenu title="All Menus" />
      ) : isHomeClicked && isMenuChosen ? (
        <DisplayTodayMenu todayMenu={todayMenu} title="Today's Menu" />
      ) : (
        <MenuDetailInput
          onChooseClick={onChooseClick}
          personClick={personClick}
          ingClick={ingClick}
          ingData={ingData}
          peopleData={peopleData}
          generateMenu={generateMenu}
          title="Choose Today's menu"
        />
      )}
    </>
  );
};
