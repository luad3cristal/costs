import { Link } from "react-router-dom";
import S from "./linkButton.module.css";

function LinkButton({ to, text }) {
  return (
    <Link to={to} className={S.btn}>
      {text}
    </Link>
  );
}

export default LinkButton;
