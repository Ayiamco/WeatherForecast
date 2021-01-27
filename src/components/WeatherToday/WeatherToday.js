import React from 'react'
import {iconClass,colorStyle} from "../../helperFunctions/helper-functions"
export default function WeatherToday({time,weatherIcon,temp}) {
    return (
        <section className="Exercise4-weatherCard1">
            <div className="Exercise4-weatherCard1-icon"><i className={iconClass[weatherIcon]} style={{color:`${colorStyle[weatherIcon]}`}}></i></div>
            <div className="Exercise4-weatherCard1-details">
                <p>{String(temp).slice(0,2)}<span>&#8451;</span> </p>
                <p>{time}</p>
            </div>
        </section>
    )
}
