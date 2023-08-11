import style from "./Train.module.css"
export default function Train(train){
    console.log(train)
    return(
        <div className={style.container}>
            <h1 className={style.trainName}>{train.train.trainName}</h1>
            <h3 className={style.trainNubmer}>{train.train.trainNumber}</h3>
        </div>
    )
}