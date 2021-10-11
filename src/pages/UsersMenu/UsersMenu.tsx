import { useState } from "react";
import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "./UsersMenu.scss";

import InfoUsers from "./components/InfoUsers";
import UseModal from "../ModalWindow/UseModal";

const UsersMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <header className="Header">
        <label>
          <b>Usuarios</b>
        </label>
        <div className="ButtonContainer" onClick={toggleModal}>
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
          <UseModal
            isModalVisible={isModalVisible}
            onBackdropClick={toggleModal}
          >
            <div className="ModalHeader">
              <label>Registrar Usuario</label>
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
      </header>

      <main className="Main">
        <div className="ItemsBar">
          <label>
            <b>ID Usuario</b>
          </label>
          <label>
            <b>Rol</b>
          </label>
          <label>
            <b>Estado</b>
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
          <InfoUsers />
          <InfoUsers />
          <InfoUsers />
          <InfoUsers />
          <InfoUsers />
        </div>
      </main>
    </div>
  );
};

export default UsersMenu;
