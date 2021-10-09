import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import "./InfoProducts.scss";

const InfoProducts = () => {
  return (
    <form className="Form">
      <label>#123456789</label>
      <label>Descripcion Producto</label>

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

export default InfoProducts;
