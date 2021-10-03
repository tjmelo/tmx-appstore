import React from "react";

export const ButtonsProducts = ({
  title,
  simbol,
  fn,
  style,
}) => {
  return (
    <button
      className={style.substract}
      onClick={fn}
      title={title}
    >
      {simbol}
    </button>
  );
};
