import {useState} from 'react'
import axios from 'axios';

import { useForm } from "react-hook-form";

import './Register.css'

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();    
    
     function onSubmit(data){
        axios.get(`http://127.0.0.1:5000/register/${data.name}/${data.place}`)
            .then(alert('Cadastro efetuado com sucesso!'))
            .catch(alert('Não foi possível fazer o cadastro'))
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