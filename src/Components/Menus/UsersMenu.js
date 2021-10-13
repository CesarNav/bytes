import { BsPlusSquare, BsSearch } from "react-icons/bs";

import FormUsers from "../Forms/FormUsers";

import "../../Styles/Commons/Layout.scss";

const UsersMenu = () => {
  return (
    <div>
      <header className="Header">
        <label>
          <b>Usuarios</b>
        </label>
        <div className="ButtonContainer">
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>
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
          <FormUsers />
          <FormUsers />
          <FormUsers />
          <FormUsers />
        </div>
      </main>
    </div>
  );
};

export default UsersMenu;
