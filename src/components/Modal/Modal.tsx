import { FC } from "react";
import { ModalProps } from "./types";

const Modal: FC<ModalProps> = ({ children, isOpen, toggle, width, height }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={toggle}
      className="w-screen h-screen absolute top-0 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width, height }}
        className=" z-40 bg-modalTheme rounded-xl flex flex-col justify-center items-center"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
