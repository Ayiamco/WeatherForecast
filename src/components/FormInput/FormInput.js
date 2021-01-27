import React,{useEffect} from 'react';
import "./FormInput.css"
export  default function FormInput ({handleForm,isInputEmpty,setIsInputEmpty,location,setLocation}) {
   
    useEffect(()=>{
        if(location===""){
             setIsInputEmpty(true);
        }
        else{
             setIsInputEmpty(false);
        }
    })
    const onChangeHandler= (e)=>{
        setLocation(e.target.value);
        
       
    }
    return (
        <div>
            <form id="form">
                <input id="form-input" type="text" name="location" value={location} onChange={onChangeHandler} placeholder="Enter the city "/>
                <button id="form-btn" type="submit" onClick={handleForm}  disabled={ isInputEmpty}>
                     Get Forecast</button>
            </form> 
        </div>
    )
}
