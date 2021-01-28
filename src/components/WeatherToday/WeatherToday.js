import React from 'react'
import "./WeatherToday.css";
import {iconClass,colorStyle} from "../../helperFunctions/helper-functions"
export default function WeatherToday({time,weatherIcon,temp}) {
    return (
        <section className="w-left">
            <div className="w-left-1"><i className={iconClass[weatherIcon]} style={{color:`${colorStyle[weatherIcon]}`}}></i></div>
            <div className="w-left-2">
                <p><span>{String(temp).slice(0,2)}&#8451;</span> </p>
                <p>{time}</p>
            </div>
        </section>
    )
}
