import React from 'react';
import {iconClass,colorStyle} from "../../helperFunctions/helper-functions";
import "./WeatherFuture.css"

export default function WeatherFuture({dayName,tempMax,tempMin,weatherIcon}) {
    return (
        <section className="w-right"> 
            <div>
                <p>{dayName}</p>
                <p>{String(tempMin).slice(0,-1)}<span>&#8451;</span>/{String(tempMax).slice(0,-1)}<span>&#8451;</span> </p>
            </div>
            <div><i className={iconClass[weatherIcon]} style={{color:`${colorStyle[weatherIcon]}`}}></i></div>
        </section>
    )
}
