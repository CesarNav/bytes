import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import "./InfoUsers.scss";

const InfoUsers = () => {
  return (
    <form className="FormUsers">
      <label>#123456789</label>
      <label>Rol usuario</label>
      <label>Estado del usuario</label>

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

export default InfoUsers;
