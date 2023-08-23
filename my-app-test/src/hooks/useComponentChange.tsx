import { useState } from "react";

export const useComponentChange = () => {
  const [isMenuChosen, setIsMenuChosen] = useState(false);

  function clickChoose() {
    setIsMenuChosen(!isMenuChosen);
    console.log(isMenuChosen);
  }

  return { clickChoose, isMenuChosen };
};
