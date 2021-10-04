import "../styles/components/InfoSales.scss";

import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

export function InfoSales() {
  return (
    <form className="Form">
      <label>#123456789</label>
      <label>CC. ##########</label>
      <label>Usuario Nombre Apellido</label>

      <div className="ButtonsContainer">
        <div className="ButtonsActions">
          <FiEdit className="Icons" size="1.8em" />
        </div>
        <div className="ButtonsActions">
          <BsTrash className="Icons" size="1.8em" />
        </div>
      </div>
    </form>
  );
}
