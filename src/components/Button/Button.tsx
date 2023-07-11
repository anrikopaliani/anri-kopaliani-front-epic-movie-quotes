import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = "transparent",
}) => {
  return (
    <button
      className={
        backgroundColor === "transparent"
          ? "w-28 h-10 border border-white rounded"
          : "w-28 h-10 border-none bg-red rounded"
      }
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
