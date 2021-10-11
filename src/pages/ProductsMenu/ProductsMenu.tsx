import { useState } from "react";
import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "./ProductsMenu.scss";

import InfoProducts from "./components/InfoProducts";
import UseModal from "../ModalWindow/UseModal";

const ProductsMenus = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <header className="Header">
        <label>
          <b>Productos</b>
        </label>
        <div className="ButtonContainer" onClick={toggleModal}>
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
          <UseModal
            isModalVisible={isModalVisible}
            onBackdropClick={toggleModal}
          >
            <div className="ModalHeader">
              <label>Registrar Producto</label>
              <label># 000090001</label>
            </div>

            <div className="InputsContainer">
              <label>Descripcion</label>
              <textarea></textarea>
            </div>
          </UseModal>
        </div>
      </header>

      <main className="Main">
        <div className="ItemsBar">
          <label>
            <b>Identificador</b>
          </label>
          <label>
            <b>Descripcion</b>
          </label>
          <div className="SearchContainer">
            <input
              className="InutSearch"
              type="search"
              placeholder="Buscar..."
            ></input>
            <BsSearch />
          </div>
        </div>

        <div className="FormContainer">
          <InfoProducts />
          <InfoProducts />
          <InfoProducts />
          <InfoProducts />
          <InfoProducts />
        </div>
      </main>
    </div>
  );
};

export default ProductsMenus;
