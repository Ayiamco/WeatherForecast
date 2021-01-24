import React,{useEffect,useState} from 'react';
import {getData} from "../../apis/fetchData";
import FormInput from "../../components/FormInput/FormInput"


export default function HomePage() {
    const [ isInputEmpty,setIsInputEmpty]=useState(false)
    
    function handleForm(e){
        e.preventDefault();
    }
    useEffect( () => {
    const data=  getData("enugu")
    console.log(data)
        
    });    

    return (
        <div>
            <FormInput  handleForm={handleForm} isInputEmpty={isInputEmpty} 
                setIsInputEmpty={setIsInputEmpty}   >
            </FormInput>
        </div>
    )
}

