import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import "./InfoSales.scss";

const InfoSales = () => {
  return (
    <form className="FormSales">
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
};

export default InfoSales;
