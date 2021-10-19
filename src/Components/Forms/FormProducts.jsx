import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";

import "../../Styles/Commons/Form.scss";
import "../../Styles/Modal.scss";

const FormProducts = () => {
  const [isOpen, openModalEdit, closeModalEdit] = UseModal(false);

  return (
    <form className="Form">
      <label className="label">#123456789</label>
      <label className="label">Descripcion Producto</label>
      <div className="ButtonsContainer">
        <div className="ButtonsActions" onClick={openModalEdit}>
          <FiEdit className="Icons" size="1.8em" />
        </div>
        {isOpen && (
          <>
            <article className="Modal" onClick={closeModalEdit}>
              <div
                className="ModalContainer"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="ModalHeader">
                  <label>Editar Producto</label>
                  <label># 0000000001 </label>
                </div>

                <div className="InputsContainer">
                  <label>Descripcion</label>
                  <textarea></textarea>
                </div>

                <div className="ButtonsContainer">
                  <button>Guardar</button>
                  <button className="ModalClose" onClick={closeModalEdit}>
                    Cancelar
                  </button>
                </div>
              </div>
            </article>
          </>
        )}
        <div className="ButtonsActions">
          <BsTrash className="Icons" size="1.8em" />
        </div>
      </div>
    </form>
  );
};

export default FormProducts;
