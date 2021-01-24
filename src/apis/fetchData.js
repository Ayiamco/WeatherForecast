import {getDay,getTime} from "../helperFunctions/helper-functions";

export async function getData(location){
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=b88f28378cd3b5baab1e28f17612802d`;
    let dataExtract=[];
    const resp = await  fetch(url)
                        .then((res)=> {return res.json()})
                        .then(res=>{return res["list"]})
                        .then( (res)=>{
                                res.forEach(element => {
                                    dataExtract.push(
                                        {
                                            dateUnix:element.dt,
                                            dateString:element.dt_txt,
                                            day:getDay(new Date(element.dt_txt)),
                                            time:getTime(element.dt_txt),
                                            temp:element.main.temp,
                                            tempMin:element.main.temp_min,
                                            tempMax:element.main.temp_max,
                                            desc:element.weather[0].main
                                        }
                                    )
                                });
                                return dataExtract;
                        });
    return resp;            
}
