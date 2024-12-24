import S from "./projectsForm.module.css";
import Input from "../form/input";
import Select from "../form/select";
import SubmitButton from "../form/submitButton";

function projectForm({ btnText }) {
  return (
    <form className={S.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default projectForm;
