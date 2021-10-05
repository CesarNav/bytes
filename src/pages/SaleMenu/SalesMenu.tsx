import { InfoSales } from "./InfoSales";

import { BsPlusSquare, BsSearch } from "react-icons/bs";

import "./SalesMenu.scss";

export function SalesMenu() {
  return (
    <div className="Canvas">
      <header className="Header">
        <label className="SectionLabel">
          <b>Ventas</b>
        </label>
        <div className="ButtonContainer">
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button className="ButtonAdd">Agregar</button>
        </div>
      </header>

      <aside className="Aside"></aside>

      <main className="Main">
        <div className="BarHeader">
          <p>
            <b>ID Venta</b>
          </p>
          <p>
            <b>ID Cliente</b>
          </p>
          <p>
            <b>Nombre Cliente</b>
          </p>
          <div className="SearchContainer">
            <input
              className="InutSearch"
              type="search"
              placeholder="Buscar..."
            ></input>
            {/* //? Poner el icono dentro del input */}
            <BsSearch />
          </div>
        </div>
        <div className="FormContainer">
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
          <InfoSales />
        </div>
      </main>

      <footer className="Footer"></footer>
    </div>
  );
}
