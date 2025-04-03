import { createPortal } from "react-dom";

const Modal = ({ isOpen, cancelHandler, children }) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="modal-container" onClick={() => cancelHandler()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>,
          document.getElementById("modal"),
        )}
    </>
  );
};

export default Modal;
