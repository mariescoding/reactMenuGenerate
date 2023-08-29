import { MenuBar } from "./compoonents/MenuBar";
import { Home } from "./pages/home";
import { useComponentChange } from "./hooks/useComponentChange";
import { useGenerateMenu } from "./hooks/useGenerateMenu";

function App() {
  const {
    clickChoose,
    isMenuChosen,
    goBrowsePage,
    goHomePage,
    isBrowseBtnClicked,
    isHomeBtnClicked,
  } = useComponentChange();
  const {
    personChipClick,
    ingChipClick,
    ingredientData,
    peopleData,
    generateMenu,
    todayMenuData,
    menuData,
  } = useGenerateMenu();
  return (
    <>
      <MenuBar goBrowse={goBrowsePage} goHome={goHomePage} />
      <Home
        isMenuChosen={isMenuChosen}
        isBrowseClicked={isBrowseBtnClicked}
        isHomeClicked={isHomeBtnClicked}
        clickChoose={clickChoose}
        todayMenuData={todayMenuData}
        personChipClick={personChipClick}
        ingChipClick={ingChipClick}
        ingredientData={ingredientData}
        peopleData={peopleData}
        generateMenu={generateMenu}
        menuData={menuData}
      />
    </>
  );
}
export default App;
