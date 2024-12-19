import { Link } from "react-router-dom";
import Container from "./container";
import S from "./navbar.module.css";
import logo from "../../assets/costs_logo.png";

function Navbar() {
  return (
    <nav className={S.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={S.list}>
          <li className={S.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={S.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={S.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={S.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
