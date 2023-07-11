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
          <div
            onClick={(e) => e.stopPropagation()}
            className="block z-40 bg-theme w-601 h-1/2"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
