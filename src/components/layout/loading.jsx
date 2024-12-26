import S from "./loading.module.css";
import loading from "../../assets/loading.svg";

function Loading() {
  return (
    <div className={S.loader_container}>
      <img src={loading} alt="loading" className={S.loader} />
    </div>
  );
}

export default Loading;
