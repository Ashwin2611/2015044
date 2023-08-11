import { useLocation } from "react-router-dom";
import style from "./FullDetails.module.css";

export default function FullDetails() {
  const location = useLocation();
  const trainName = location.state.trainName;
  const trainNumber = location.state.trainNumber;
  const trainHour = location.state.trainHour;
  const timeMinutes = location.state.timeMinutes;
  const trainSeconds = location.state.trainSeconds;
  return (
    <div className={style.container}>
      <h3 className={style.Name}>Name : {trainName}</h3>
      <h4 className={style.trainNumber}>Train Number : {trainNumber}</h4>
      <h3>
        Train Time: {trainHour} {timeMinutes} {trainSeconds}
      </h3>
    </div>
  );
}
