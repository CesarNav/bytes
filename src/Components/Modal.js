import "../Styles/Modal.scss";

const Modal = (props) => {
  return (
    <article className="Modal" onClick={props.closeModal}>
      <div className="ModalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="ModalHeader">
          <label>{props.title}</label>
          <label># 0000000001 </label>
        </div>

        <div className="InputsContainer">{props.children}</div>

        <div className="ButtonsContainer">
          <button>Guardar</button>
          <button className="ModalClose" onClick={props.closeModal}>
            Cancelar
          </button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
