import S from "./Project.module.css";

import Loading from "../layout/loading";
import Container from "../layout/container";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={S.project_details}>
          <Container customClass="column">
            <div className={S.details_container}>
              <h1>Projeto: {project.name} </h1>
              <button onClick={toggleProjectForm} className={S.btn}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={S.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total do Orçamento:</span> R$ {project.budget}
                  </p>
                  <p>
                    <span>Total do Utilizado:</span> R$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={S.project_info}>
                  <p>detalhes do projeto</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
