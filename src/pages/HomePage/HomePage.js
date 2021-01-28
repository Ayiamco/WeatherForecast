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
    const [locationDisp,setLocationDisp]=useState("");

    useEffect(()=>{
        
    },[weatherFuture,weatherToday])
    
    function handleForm(e){
        e.preventDefault();

        //remove display from previous forecast
        setWeatherFuture([]);
        setWeatherToday([]);
        setLocationDisp(location);

        //get weather forecast
        const data=getData(location);

        //update UI with forecast
        data.then((res)=>{
            let container=[]
            res.forEach( (element,index) => {

                //collect all the data for today
                if(index<5){
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
            {
                weatherToday.length < 1 ? "" :
                
                <div>
                    {/* weather summary for today section */}
                    <section id="weather-main">
                            <p>
                                <span>{locationDisp.toUpperCase()}</span>
                                {new Date(Date.now()).toDateString()}
                            </p>
                            <p>
                                {weatherToday[0].temp}&#8451;
                            </p>
                    </section>

                    

                    <div className="w-con-main">
                        {/* future weather section */}
                        <section className="w-con"id="w-con-left" >
                            {weatherToday.map( (obj,index) => {
                                return (<WeatherToday key={obj.time + index} weatherIcon={obj.desc}
                                    time={obj.time} temp={obj.temp}/>)
                            })}
                        </section>
                        
                        {/* future weather section */}
                        <section className="w-con" id="w-con-right">
                            {weatherFuture.map( (obj,index) => {
                                return (<WeatherFuture key={obj.time+index} weatherIcon={obj.desc} time={obj.time}
                                    tempMax={obj.tempMax} tempMin={obj.tempMin} dayName={obj.day}/>)
                            })}
                        </section>
                    </div>
                            
                </div>
            
                }
           
        </div>
    )
}

