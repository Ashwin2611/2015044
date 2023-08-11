import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Train from "../TrainComponent/Train";

export default function TrainDetails(){
    const [trainDetails,setTrainDetails]=useState([])
    const location =useLocation()
    const token=location.state.token
    useEffect(()=>{
        async function FetchHandler(){
            const response=await fetch("http://20.244.56.144:80/train/trains",{
                method:"GET",
                headers:{ Authorization:`Bearer ${token}`}
            })
            const res=await response.json();
            if(response.ok)
            {
                console.log(res)
                setTrainDetails(res);
            }
            else{
                console.log("error",res);
            }
        }
        FetchHandler()
    },[])
    return(
        <div>
            <h1>Train details</h1>
            <div>
                {trainDetails.map((train)=><Train train={train} key={train.trainName}/>)}
            </div>
        </div>
    )
}