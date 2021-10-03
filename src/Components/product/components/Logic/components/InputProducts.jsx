import React, { useRef } from "react";

export const InputProducts = ({ style, value }) => {
  let inputReference = useRef(null);

  return (
    <input
      ref={inputReference}
      className={style.amount}
      onChange={() => {}}
      value={value}
      maxLength="2"
    />
  );
};
