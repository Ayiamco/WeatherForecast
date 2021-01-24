export function getDay(dateObj){
    let dayOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const todayIndex=new Date(Date.now()).getDay();
    const dayIndex=dateObj.getDay();
    
    if(todayIndex===6 && dayIndex===0){
        return "Tommorrow";
    }
    
    else if (dayIndex===todayIndex ){return "Today"}
    else if (dateObj.getDay()===todayIndex+1 ){return "Tomorrow"}

    else{return dayOfWeek[dayIndex]}
}

export function getTime(dateString){
    //datestring must be in this format "2021-01-24 15:00:00"
    
    const dt=dateString.split(" ")[1];
    let time=dt.split(":")[0];

    //time is 00
    if(time==="00"){
        time="12AM"
    }

    //time is in the morning past 12AM
    else if(parseInt(time)>0 && parseInt(time)<12){
        time[0]==="0" ? time=time[1]+"AM": time=time+"AM";
    }

    //time is 12PM
    else if(time==="12"){
        time=time+"PM";
    }
     
    //time is afternoon,evening or night
    else{
        time=(parseInt(time) - 12)+"PM"
    }

    return time;
}