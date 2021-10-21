import { BsPlusSquare, BsSearch } from "react-icons/bs";

import { UseModal } from "../../Hooks/UseModal";

import FormUsers from "../Forms/FormUsers";

import "../../Styles/Commons/Menu.scss";
import "../../Styles/Modal.scss";

const MenuUsers = () => {
  const [isOpenAdd, openModalAdd, closeModalAdd] = UseModal(false);

  return (
    <div>
      <header className="Header">
        <label>
          <b>Usuarios</b>
        </label>
        <div className="ButtonContainer" onClick={openModalAdd}>
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
          {isOpenAdd && (
            <>
              <article className="Modal" onClick={closeModalAdd}>
                <div
                  className="ModalContainer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="ModalHeader">
                    <label>Registrar usuario</label>
                    <label># 0000000001 </label>
                  </div>

                  <form>
                    <div className="InputsContainer">
                      <label>Numero ID usuario</label>
                      <input id="id_user"></input>
                      <label>Rol</label>
                      <input id="rol_user"></input>
                      <label>Estado</label>
                      <input id="state_user"></input>
                    </div>

                    <div className="ButtonsContainer">
                      <button>Guardar</button>
                      <button className="ModalClose" onClick={closeModalAdd}>
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </article>
            </>
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
