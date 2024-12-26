import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import S from "./Projects.module.css";

import Message from "../layout/message";
import Container from "../layout/container";
import LinkButton from "../layout/linkButton";
import ProjectCard from "../projects/projectCard";

function Projects() {
  const [projects, SetProjects] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        SetProjects(data);
        console.log(projects);
      })
      .catch((err) => console.log(err));
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
      </Container>
    </div>
  );
}

export default Projects;
