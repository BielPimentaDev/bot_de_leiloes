import {useState} from 'react'
import axios from 'axios';

import { useForm } from "react-hook-form";

import './Register.css'

function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();    
    
     function onSubmit(data){
        axios.get(`https://marcelarocha.pythonanywhere.com/register/${data.name}/${data.place}`)
            .then(response => console.log(response))
            alert('Cliente cadastrado com sucesso!')
            reset()
            
     }

    return (
    
     
        <form className='mainHome' onSubmit={handleSubmit(onSubmit)}>
            <section className='inputSection'>				
                <input type="text" placeholder='Digite o nome do cliente...' name="name" {...register("name")}/>
                <label className='labelSearch'>NOME:</label>

                
            </section>
            <br/><br/><br/><br/>

            <section className='inputSection'>				
                <input type="text" placeholder='Digite o lugar...' name="place" {...register("place")}/>
                <label className='labelSearch'>LUGAR:</label>

                
            </section>
        
            <button type='submit'>ENVIAR</button>
        </form>
    );
}

export default Register;