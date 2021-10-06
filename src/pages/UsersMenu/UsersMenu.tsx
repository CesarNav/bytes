import UsersSales from "./components/InfoUsers";

import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "./UsersMenu.scss";
import InfoUsers from "./components/InfoUsers";

const UsersMenu = () => {
  return (
    <div>
      <header className="Header">
        <label className="SectionLabel">
          <b>Usuarios</b>
        </label>
        <div className="ButtonContainer">
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button className="ButtonAdd">Agregar</button>
        </div>
      </header>

      <main className="Main MainUsers">
        <div className="Form">
          <div className="BarHeader">
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

          <div>
            <InfoUsers />
            <InfoUsers />
            <InfoUsers />
            <InfoUsers />
            <InfoUsers />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersMenu;
