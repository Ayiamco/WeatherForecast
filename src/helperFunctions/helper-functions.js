export function getDay(dateObj){
    let dayOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const todayIndex=new Date(Date.now()).getDay();
    const dayIndex=dateObj.getDay();
    
    if(todayIndex===6 && dayIndex===0){
        return dayNames.Tommorrow;
    }
    
    else if (dayIndex===todayIndex ){return dayNames.Today}
    else if (dateObj.getDay()===todayIndex+1 ){return dayNames.Tommorrow}

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

export const dayNames={
    Today:"Today",
    Tommorrow:"Tommorow"
}

export function getDaysToDisplay(){
    let futureDayNames=[]
    
    //loop to find the names of the  next 4 days excluding tommorow
    for(let i=1;i<5;i++){

        //get the time  for today
        let currentDate=Date.now();
        currentDate=new Date(currentDate)

        //add the required days to today
        let futureDate=currentDate.setHours(24*i);
        
        //add the name of the futureDate to the future name days
        futureDayNames.push(getDay(new Date(futureDate)))
    }

    return futureDayNames;
}

export const iconClass={Rain:"fas fa-cloud-showers-heavy fa-3x",Clouds:"fas fa-cloud fa-2x",Clear:"fas fa-sun fa-2x"}
export const colorStyle={Rain:"rgb(65, 52, 177)",Clouds:"rgb(27, 27, 197)",Clear:"yellow"}
