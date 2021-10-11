import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

interface ModalProps {
  onBackdropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
  return ReactDOM.createPortal(
    <div className="Overlay">
      <div className="ModalContainer" onClick={(e) => e.stopPropagation()}>
        {children}

        <div className="ButtonsContainer">
          <button>Guardar</button>
          <button className="ModalClose" onClick={onBackdropClick}>
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
