import { useLocation } from "react-router-dom";

import S from "./Projects.module.css";

import Message from "../layout/message";
import Container from "../layout/container";
import LinkButton from "../layout/linkButton";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={S.project_container}>
      <div className={S.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message type="success" msg={message} />}

      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
}

export default Projects;
