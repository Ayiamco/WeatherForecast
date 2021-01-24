import React,{useState} from 'react';

export  default function FormInput ({handleForm,isInputEmpty,setIsInputEmpty}) {
    const [location,setLocation]=useState("");
    
    const onChangeHandler= (e)=>{
        setLocation(e.target.value);
        setIsInputEmpty(false);
    }
    return (
        <div>
            <form  >
                <input type="text" name="location" value={location} onChange={onChangeHandler} placeholder="Enter the city "/>
                <p className={isInputEmpty?"p-error":"p-valid"}>Feild is Required</p>
                <button type="submit" onClick={handleForm} className="Exercise4-button"> Get Forecast</button>
            </form> 
        </div>
    )
}
