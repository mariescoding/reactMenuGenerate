import { useState } from "react";

export const useComponentChange = () => {
  const [isMenuChosen, setIsMenuChosen] = useState(false);
  const [isBrowseBtnClicked, setIsBrowseBtnClicked] = useState(false);
  const [isHomeBtnClicked, setIsHomeBtnClicked] = useState(false);

  function clickChoose() {
    setIsMenuChosen(!isMenuChosen);
    setIsBrowseBtnClicked(false);
    setIsHomeBtnClicked(true);
  }

  function goBrowsePage() {
    setIsBrowseBtnClicked(true);
    setIsHomeBtnClicked(false);
  }

  function goHomePage() {
    setIsBrowseBtnClicked(false);
    setIsHomeBtnClicked(true);
  }

  console.log(isMenuChosen);
  console.log(isBrowseBtnClicked);
  console.log(isHomeBtnClicked);

  return {
    clickChoose,
    isMenuChosen,
    goBrowsePage,
    goHomePage,
    isBrowseBtnClicked,
    isHomeBtnClicked,
  };
};
