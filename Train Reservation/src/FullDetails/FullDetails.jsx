import { useLocation } from "react-router-dom";
import style from "./FullDetails.module.css";

export default function FullDetails() {
  const location = useLocation();
  const trainName = location.state.trainName;
  return (
    <div className={style.container}>
      <h3 className={style.Name}>{trainName}</h3>
    </div>
  );
}
