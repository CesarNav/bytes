import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";
import Modal from "../Modal";

import "../../Styles/Commons/Form.scss";

const FormSales = () => {
  const [isOpen, openModalAdd, closeModalAdd] = UseModal(false);

  return (
    <form className="Form">
      <label className="label">#123456789</label>
      <label className="label">CC. ##########</label>
      <label className="label">Usuario Nombre Apellido</label>

      <div className="ButtonsContainer">
        <div className="ButtonsActions" onClick={openModalAdd}>
          <FiEdit className="Icons" size="1.8em" />
        </div>
        {isOpen && (
          <Modal title="Editar Venta" closeModal={closeModalAdd}>
            <label>Tipo documento cliente</label>
            <input id="document_type"></input>
            <label>Numero documento cliente</label>
            <input id="id_document"></input>
            <label>Nombre cliente</label>
            <input id="name_custumer"></input>
          </Modal>
        )}
        <div className="ButtonsActions">
          <BsTrash className="Icons" size="1.8em" />
        </div>
      </div>
    </form>
  );
};

export default FormSales;
