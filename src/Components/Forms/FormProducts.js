import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";
import Modal from "../Modal";

import "../../Styles/Commons/Form.scss";

const FormProducts = () => {
  const [isOpen, openModalAdd, closeModalAdd] = UseModal(false);

  // Call Sales API to get full list of Products
  // List<Products>;
  // Publish data on JSX;

  return (
    <form className="Form">
      <label className="label">#123456789</label>
      <label className="label">Descripcion Producto</label>
      <div className="ButtonsContainer">
        <div className="ButtonsActions" onClick={openModalAdd}>
          <FiEdit className="Icons" size="1.8em" />
        </div>
        {isOpen && (
          <Modal title="Editar Producto" closeModal={closeModalAdd}>
            <label>Descripcion</label>
            <textarea></textarea>
          </Modal>
        )}
        <div className="ButtonsActions">
          <BsTrash className="Icons" size="1.8em" />
        </div>
      </div>
    </form>
  );
};

export default FormProducts;
