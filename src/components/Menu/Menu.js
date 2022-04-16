import './Menu.css' 
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft,BiLogOutCircle} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'

function Menu() {
    const [toggle, setToggle] = useState(false)
    const menuSize = ()=>{
        if (toggle == false){
            setToggle(true)
        }
        else{setToggle(false)}
        console.log(toggle)
    }

    return ( 
        <div className={toggle? 'menuContainer show' : 'menuContainer'}>
            <div className='menuBtn'><BiMenuAltLeft className='menuIcon' onClick={() => menuSize()}/></div>
            <ul className='menuPages'>
                <li>
                    <span><BsSearch/></span>
                    <Link style={{ textDecoration: 'none' }} className='linkPage' to="/">Buscar</Link>
                </li>
                <li>
                    <span><BiLogOutCircle/></span>
                    <Link  style={{ textDecoration: 'none' }} className='linkPage' to="/register">Registro</Link>
                </li>
                
                <li>
                    <span><FaUsers/></span>
                    <Link style={{ textDecoration: 'none' }} className='linkPage' to="/clients">Clientes</Link>
                </li>
                
                
            </ul>
        </div>
     );
}

export default Menu;