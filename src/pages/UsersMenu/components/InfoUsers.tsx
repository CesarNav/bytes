import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import "./InfoUsers.scss";

import UseModal from "../../ModalWindow/UseModal";

const InfoUsers = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <form className="Form">
      <label>#123456789</label>
      <label>Rol usuario</label>
      <label>Estado del usuario</label>

      <div className="ButtonsContainer">
        <div className="ButtonsActions" onClick={toggleModal}>
          <FiEdit className="Icons" size="1.8em" />
          <UseModal
            isModalVisible={isModalVisible}
            onBackdropClick={toggleModal}
          >
            <div className="ModalHeader">
              <label>Editar Usuario</label>
              <label># 000001001</label>
            </div>

            <div className="InputsContainer">
              <label>Numero ID usuario</label>
              <input placeholder=""></input>
              <label>Rol</label>
              <input placeholder=""></input>
              <label>Estado</label>
              <input placeholder=""></input>
            </div>
          </UseModal>
        </div>

        <div className="ButtonsActions">
          <BsTrash className="Icons" size="1.8em" />
        </div>
      </div>
    </form>
  );
};

export default InfoUsers;
