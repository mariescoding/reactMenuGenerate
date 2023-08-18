import { useState } from "react";

// type Ingredient = {
//   id: string;
//   name: string;
//   selected: boolean;
// };

export const useGenerateMenu = () => {
  const [ingIsClicked, setIngIsClicked] = useState<boolean[]>(
    Array(5).fill(false)
  );

  //方法１
  const [personIsClicked, setPersonIsClicked] = useState(Array(4).fill(false));

  function ingChipClick(id: number) {
    setIngIsClicked((prevValues) => {
      return prevValues.map((ing, i) => {
        if (i === id) {
          return !ing;
        }

        return ing;
      });
    });

    //方法２

    // const copyIngClicked = ingIsClicked.slice();
    // copyIngClicked[id] = !copyIngClicked[id];
    // setIngIsClicked(copyIngClicked);

    //方法３

    //ファイルの上に書いてあるIngredient用のオブジェクトを作り、...演算子を使ってselectedだけを変更する

    //方法１〜３どれをお勧めしますか？
  }

  function personChipClick(id: number) {
    const copyPersonClicked = personIsClicked.slice();
    copyPersonClicked[id] = !copyPersonClicked[id];
    setPersonIsClicked(copyPersonClicked);
  }

  return { ingChipClick, personChipClick, ingIsClicked, personIsClicked };
};
