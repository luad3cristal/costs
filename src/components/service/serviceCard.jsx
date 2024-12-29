import S from "../projects/projectCard.module.css";

import { BsFillTrashFill } from "react-icons/bs";

function serviceCard({ id, name, cost, description, handleRemove }) {
  function remove(e) {
    e.preventDefault();
    handleRemove(id, cost);
  }

  return (
    <div className={S.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R$ {cost}
      </p>
      <p>{description}</p>
      <div className={S.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default serviceCard;
