import React,{useEffect,useState} from 'react';
import {getData} from "../../apis/fetchData";
import FormInput from "../../components/FormInput/FormInput";
import {dayNames} from "../../helperFunctions/helper-functions";
import WeatherToday from "../../components/WeatherToday/WeatherToday";
import WeatherFuture from "../../components/WeatherFuture/WeatherFuture";
import "./HomePage.css"

export default function HomePage() {
    const [ isInputEmpty,setIsInputEmpty]=useState(true)
    const [location,setLocation]=useState("");
    const [weatherToday,setWeatherToday]=useState([])
    const [weatherFuture,setWeatherFuture]=useState([])

    useEffect(()=>{
        
    },[weatherFuture,weatherToday])
    
    function handleForm(e){
        e.preventDefault();

        //remove display from previous forecast
        setWeatherFuture([]);
        setWeatherToday([]);

        //get weather forecast
        const data=getData(location);

        //update UI without forecast
        data.then((res)=>{
            let container=[]
            res.forEach(element => {

                //collect all the data for today
                if(element.day===dayNames.Today){
                    setWeatherToday(prev=>{
                        return [...prev,element]
                    })
                }

                //check if data has already being collected for specific day
                else if( !container.includes(element.day)){
                    container.push(element.day)
                    setWeatherFuture(prev=>{
                        return [...prev,element]
                    })
                }
    
                
            });
        })
    }
       

    return (
        <div>
            
            <FormInput
                handleForm={handleForm} isInputEmpty={isInputEmpty} setIsInputEmpty={setIsInputEmpty} 
                location={location} setLocation={setLocation} 
            />  
            {weatherToday.length < 1 ? "":
                <section id="weather-main">
                    <p>
                        <span>{location}</span>
                        {new Date(Date.now()).toDateString()}
                    </p>
                    <p>
                        {weatherToday[0].temp}&#8451;
                    </p>
            </section>
            }
            

            <div className="main-con">
                <section id="">
                    {weatherToday.map( (obj,index) => {
                        return (<WeatherToday key={obj.time + index} weatherIcon={obj.desc}
                             time={obj.time} temp={obj.temp}/>)
                    })}
                </section>
                {
                    weatherFuture.length===0 ? "":<div id="line"></div>
                }
                
                <aside id="">
                    {weatherFuture.map( (obj,index) => {
                        return (<WeatherFuture key={obj.time+index} weatherIcon={obj.desc} time={obj.time}
                             tempMax={obj.tempMax} tempMin={obj.tempMin} dayName={obj.day}/>)
                    })}
                </aside>
            </div>


           
        </div>
    )
}

