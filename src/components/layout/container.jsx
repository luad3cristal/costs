import S from "./container.module.css";

function Container(props) {
  return (
    <div className={`${S.container} ${S[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
