import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import S from "./footer.module.css";

function Footer() {
  return (
    <footer className={S.footer}>
      <ul className={S.social_list}>
        <li>
          <FaFacebook></FaFacebook>
        </li>
        <li>
          <FaInstagram></FaInstagram>
        </li>
        <li>
          <FaLinkedin></FaLinkedin>
        </li>
      </ul>
      <p className={S.copy_right}>
        <span>Costs</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
