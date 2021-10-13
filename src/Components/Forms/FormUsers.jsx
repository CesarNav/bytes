import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";
import Modal from "../Modal";

import "../../Styles/Commons/Form.scss";

const FormUsers = () => {
  const [isOpen, openModalAdd, closeModalAdd] = UseModal(false);

  return (
    <form className="Form">
      <label className="label">#123456789</label>
      <label className="label">Rol usuario</label>
      <label className="label">Estado del usuario</label>

      <div className="ButtonsContainer">
        <div className="ButtonsActions" onClick={openModalAdd}>
          <FiEdit className="Icons" size="1.8em" />
        </div>
        {isOpen && (
          <Modal title="Editar usuario" closeModal={closeModalAdd}>
            <label>Numero ID usuario</label>
            <input id="id_user"></input>
            <label>Rol</label>
            <input id="rol_user"></input>
            <label>Estado</label>
            <input id="state_user"></input>
          </Modal>
        )}
        <div className="ButtonsActions">
          <BsTrash className="Icons" size="1.8em" />
        </div>
      </div>
    </form>
  );
};

export default FormUsers;
