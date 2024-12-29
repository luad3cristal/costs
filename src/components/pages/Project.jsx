import S from "./Project.module.css";

import Loading from "../layout/loading";
import Container from "../layout/container";
import ProjectForm from "../projects/projectsForm";
import Message from "../layout/message";
import ServiceForm from "../service/serviceForm";
import ServiceCard from "../service/serviceCard";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { parse, v4 as uuidv4 } from "uuid";

function Project() {
  let { id } = useParams();

  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("sucess");

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
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function creatService(project) {
    setMessage("");

    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices(data.services);
        setShowServiceForm(!showServiceForm);
        setMessage("Serviço adicionado!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function removeService(id, cost) {
    const servicesUpdate = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdate;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(servicesUpdate);
        setMessage("Serviço removido com sucesso!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function editPost(project) {
    setMessage("");

    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(!showProjectForm);

        setMessage("Projeto atualizado!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      {project.name ? (
        <div className={S.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}

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
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>

            <div className={S.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button onClick={toggleServiceForm} className={S.btn}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className={S.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={creatService}
                    textBtn="Adicionar serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>

            <h2>Serviços</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
