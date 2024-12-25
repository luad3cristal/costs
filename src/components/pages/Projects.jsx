import { useLocation } from "react-router-dom";

import S from "./Projects.module.css";

import Message from "../layout/message";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div>
      <h1>Meus projetos</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Projects;
