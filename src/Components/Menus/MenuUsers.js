import { BsPlusSquare, BsSearch } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";
import Modal from "../Modal";

import FormUsers from "../Forms/FormUsers";

import "../../Styles/Commons/Menu.scss";

const MenuUsers = () => {
  const [isOpen, openModalAdd, closeModalAdd] = UseModal(false);

  return (
    <div>
      <header className="Header">
        <label>
          <b>Usuarios</b>
        </label>
        <div className="ButtonContainer" onClick={openModalAdd}>
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
          {isOpen && (
            <Modal title="Registrar usuario" closeModal={closeModalAdd}>
              <label>Numero ID usuario</label>
              <input id="id_user"></input>
              <label>Rol</label>
              <input id="rol_user"></input>
              <label>Estado</label>
              <input id="state_user"></input>
            </Modal>
          )}
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
          <FormUsers />
        </div>
      </main>
    </div>
  );
};

export default MenuUsers;
