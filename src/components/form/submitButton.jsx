import S from "./submitButton.module.css";

function SubmitButton({ text }) {
  return (
    <div>
      <button className={S.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
