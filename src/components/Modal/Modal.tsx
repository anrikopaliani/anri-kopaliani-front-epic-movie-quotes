import { FC } from "react";
import { ModalProps } from "./types";

const Modal: FC<ModalProps> = ({ children, isOpen, toggle }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={toggle}
          className="w-screen h-screen absolute top-0 flex justify-center items-center"
        >
          <div className="block bg-white w-601 h-1/2">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
