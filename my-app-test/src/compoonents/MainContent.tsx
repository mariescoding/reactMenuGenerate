import { MenuDetailInput } from "../features/enterInputs/EnterInputs";
import { DisplayTodayMenu } from "../features/displayTodayMenu/displayTodayMenu";

type Props = {
  isMenuChosen: boolean;
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
}) => {
  return isMenuChosen ? (
    <DisplayTodayMenu todayMenu={todayMenu} />
  ) : (
    <MenuDetailInput
      onChooseClick={onChooseClick}
      personClick={personClick}
      ingClick={ingClick}
      ingData={ingData}
      peopleData={peopleData}
      generateMenu={generateMenu}
    />
  );
};
