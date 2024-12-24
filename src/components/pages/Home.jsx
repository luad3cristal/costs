import S from "./Home.module.css";
import savings from "../../assets/savings.svg";

import LinkButton from "../layout/linkButton";

function Home() {
  return (
    <section className={S.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={savings} alt="Costs" />
    </section>
  );
}

export default Home;
