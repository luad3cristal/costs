import S from "./projectCard.module.css";

import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function projectCard({ id, name, budget, category, handleRemove }) {
  return (
    <div className={S.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R$ {budget}
      </p>
      <p className={S.category_text}>
        <span className={`${S[category.toLowerCase()]}`}> </span>
        {category}
      </p>
      <div className={S.project_card_actions}>
        <Link to="/">
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default projectCard;
