import { useState } from "react";

//? Iconos
import { BsPlusSquare, BsSearch, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

//? Pop-Up para añadir y editar
import { UseModal } from "../../Hooks/UseModal";
import { UseForm } from "Hooks/UseForm";

//? Componentes react
import Input from "./components/Input";
import Sales from "Components/Items/Sales";

//? Estilo del menu, formulario y Pop-Up
import "../../Styles/Commons/Menu.scss";
import "../../Styles/Commons/Form.scss";
import "../../Styles/Modal.scss";

const MenuSales = () => {
  //? Funciones hook para cuando abrimos al ventana Pop-Up
  const [isOpenAdd, openModalAdd, closeModalAdd] = UseModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = UseModal(false);

  //? Funciones para el uso del formulario
  const [sales, setSales] = useState([]);
  const [form, handleChange, reset] = UseForm({
    id_sale: "",
    id_customer: "",
    name: "",
  });

  const errorMessage = "Campo obligatorio";

  //? Al darle "Guardar" valida los campos y añade la informacion
  const submit = (e) => {
    //? Valida los campos
    const validate =
      form.id_sale !== "" && form.id_customer !== "" && form.name !== "";

    e.preventDefault();

    //? Si es valido añade a la lista
    if (validate) {
      setSales([...sales, form]);
      reset();
      closeModalAdd();
    }
  };

  //? Si le da cancelar cierra la ventana y elimina la informacion
  const cancelSubmit = (e) => {
    e.preventDefault();
    reset();
    closeModalAdd();
  };

  return (
    //?  LAYOUT DEL MENU DE VENTAS
    <div>
      <header className="Header">
        <label>
          <b>Ventas</b>
        </label>
        <div className="ButtonContainer" onClick={openModalAdd}>
          <BsPlusSquare className="IconAdd" size="1.5em" />
          <button>Agregar</button>

          {/* //? Pop-Up PARA AÑADIR VENTA */}
          {isOpenAdd && (
            <>
              <article className="Modal" onClick={closeModalAdd}>
                <div
                  className="ModalContainer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="ModalHeader">
                    <label>Registrar Venta</label>
                    {/* <label># 0000000001 </label> */}
                  </div>

                  {/* //? INPUTS DEL FORMULARIO */}
                  <form onSubmit={submit}>
                    <div className="InputsContainer">
                      <Input
                        label="ID Venta"
                        name="id_sale"
                        value={form.id_sale}
                        onChange={handleChange}
                      />
                      {form.id_sale === "" ? (
                        <span className="Error">{errorMessage}</span>
                      ) : null}

                      <Input
                        label="Numero documento cliente"
                        name="id_customer"
                        value={form.id_customer}
                        onChange={handleChange}
                      />
                      {form.id_customer === "" ? (
                        <span className="Error">{errorMessage}</span>
                      ) : null}

                      <Input
                        label="Nombre cliente"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                      />
                      {form.name === "" ? (
                        <span className="Error">{errorMessage}</span>
                      ) : null}
                    </div>

                    <div className="ButtonsContainer">
                      <button type="submit">Guardar</button>

                      <button className="ModalClose" onClick={cancelSubmit}>
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
      {/* 
        
        
        
        */}

      {/* //? BAR HEADER DEL MENU */}
      <main className="Main">
        <div className="ItemsBar">
          <label>
            <b>ID Venta</b>
          </label>
          <label>
            <b>ID Cliente</b>
          </label>
          <label>
            <b>Nombre Cliente</b>
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

        {/* //? AQUI SE RENDERIZA LA INFORMACION AGREGADA AL FORMULARIO */}
        <div className="FormContainer">
          <Sales>
            {sales.map((sale) => (
              <form className="Form" key={sale.id_sale}>
                <label>{`${sale.id_sale}`}</label>
                <label>{`${sale.id_customer}`}</label>
                <label>{`${sale.name}`}</label>

                <div className="ButtonsContainer">
                  <div className="ButtonsActions" onClick={openModalEdit}>
                    <FiEdit className="Icons" size="1.8em" />
                  </div>
                  {isOpenEdit && (
                    <>
                      <article className="Modal" onClick={closeModalEdit}>
                        <div
                          className="ModalContainer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="ModalHeader">
                            <label>Editar Venta</label>
                            {/* <label># 0000000001 </label> */}
                          </div>

                          <form onSubmit={submit}>
                            <div className="InputsContainer">
                              <Input
                                label="ID Venta"
                                name="id_sale"
                                value={form.id_sale}
                                onChange={handleChange}
                              />

                              <Input
                                label="Numero documento cliente"
                                name="id_customer"
                                value={form.id_customer}
                                onChange={handleChange}
                              />

                              <Input
                                label="Nombre cliente"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="ButtonsContainer">
                              <button>Guardar</button>
                              <button
                                className="ModalClose"
                                onClick={closeModalEdit}
                              >
                                Cancelar
                              </button>
                            </div>
                          </form>
                        </div>
                      </article>
                    </>
                  )}
                  <div className="ButtonsActions">
                    <BsTrash className="Icons" size="1.8em" />
                  </div>
                </div>
              </form>
            ))}
          </Sales>
        </div>
      </main>
    </div>
  );
};

export default MenuSales;
