import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const Modal = ({ isOpen, cancelHandler, title, body, children }) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="modal-container" onClick={() => cancelHandler()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-slate-300 p-5 dark:border-slate-700">
                <h4 className="title">{title}</h4>
                <span
                  className="flex size-6 cursor-pointer items-center justify-center rounded border border-slate-300 dark:border-slate-700"
                  onClick={() => cancelHandler()}
                >
                  <HiXMark size={20} />
                </span>
              </div>
              <div className="body flex-1 border-b border-slate-300 p-5 dark:border-slate-700">
                <p>{body}</p>
              </div>
              <div className="flex justify-end gap-3 p-5">{children}</div>
            </div>
          </div>,
          document.getElementById("modal"),
        )}
    </>
  );
};

export default Modal;
