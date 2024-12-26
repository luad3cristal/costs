import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import S from "./Projects.module.css";

import Message from "../layout/message";
import Container from "../layout/container";
import LinkButton from "../layout/linkButton";
import ProjectCard from "../projects/projectCard";
import Loading from "../layout/loading";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  return (
    <div className={S.project_container}>
      <div className={S.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message type="success" msg={message} />}

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}

              // handleRemove={remove}
            />
          ))}

        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
