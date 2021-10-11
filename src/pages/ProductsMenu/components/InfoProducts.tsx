import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import "./InfoProducts.scss";

import UseModal from "../../ModalWindow/UseModal";

const InfoProducts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <form className="Form">
      <label>#123456789</label>
      <label>Descripcion Producto</label>

      <div className="ButtonsContainer">
        <div className="ButtonsActions" onClick={toggleModal}>
          <FiEdit className="Icons" size="1.8em" />
          <UseModal
            isModalVisible={isModalVisible}
            onBackdropClick={toggleModal}
          >
            <div className="ModalHeader">
              <label>Editar Producto</label>
              <label># 000090001</label>
            </div>

            <div className="InputsContainer">
              <label>Descripcion</label>
              <textarea></textarea>
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

export default InfoProducts;
