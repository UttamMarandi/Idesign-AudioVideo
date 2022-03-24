import React from "react";

const HeaderBold = ({ startText, endText, middleText, boldText }) => {
  const makeTextBold = () => {
    if (boldText === "startText") {
      return (
        <h2>
          {<strong> {startText}</strong>}
          {middleText} {endText}
        </h2>
      );
    } else if (boldText === "middleText") {
      return (
        <h2>
          {startText}
          {<strong> {middleText}</strong>} {endText}
        </h2>
      );
    } else if (boldText === "endText") {
      return (
        <h2>
          {{ startText }}
          {middleText} {<strong> {endText}</strong>}
        </h2>
      );
    }
  };
  console.log("makeBoldText", makeTextBold);

  return makeTextBold();
};

export default HeaderBold;
