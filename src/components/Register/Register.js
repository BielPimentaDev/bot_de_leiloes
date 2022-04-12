import {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

import './Register.css'

function Register() {
    
    
    const [form, setForm] = useState({
        name : '',
        city : ''
    })


    const handleInputChange = (e)=>{
        const {name, value} = e.target

        setForm({
            ...form,
            [name]:value
        })
    }

    const handleRegisterButton = (name,city)=>{
        axios.get(`http://127.0.0.1:5000/register/${name}/${city}`)
            .then(alert('Cadastro efetuado com sucesso!'))
            .catch(alert('Não foi possível fazer o cadastro'))
        
        
    }

    return (
    
     
    <section className="registerContainer">
        <h2>Registro</h2>

        <form className="registerForm">
            <div >
                <label>Nome:</label>
                <input value={form.name} name='name' type="text"placeholder="Digite seu nome..." onChange={handleInputChange}></input>
            </div>
            <div >
                <label>Cidade ou Estado:</label>
                <input value={form.city} name="city" type="text"placeholder="Digite o nome do lugar..." onChange={handleInputChange}></input>
            </div>
            <button className='registerBtn' onClick={()=> handleRegisterButton(form.name, form.city)} >Enviar</button>
        </form>
    </section>
    );
}

export default Register;