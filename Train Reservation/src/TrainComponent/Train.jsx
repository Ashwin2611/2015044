import { useNavigate } from "react-router-dom"
import style from "./Train.module.css"
import { useState } from "react";
export default function Train(train){
    // const [trains,setTrains]=useState(train)
    const navigate=useNavigate();
    function nextHandler(){
        navigate('/train',{
            state:{
                trainName:train.train.trainName,
                trainNumber:train.train.trainNumber,
            }
        })
    }
    console.log(train)
    
    return(
        <div className={style.container} onClick={nextHandler}>
            <h1 className={style.trainName}>{train.train.trainName}</h1>
            <h3 className={style.trainNubmer}>Train Number: {train.train.trainNumber}</h3>
            <h3 className={style.time}>Time: {train.train.departureTime.Hours} {train.train.departureTime.Minutes} {train.train.departureTime.Seconds}</h3>
        </div>
    )
}