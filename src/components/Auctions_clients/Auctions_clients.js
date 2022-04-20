import { ConnectionStartOk } from 'amqplib/lib/defs';
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import ClientContext from '../../context/ClientContext';
import {IoMdArrowRoundBack} from 'react-icons/io'

function Auctions_clients({name, local}) {

    const {value, setValue} = useContext(ClientContext)
    const {localValue, setLocalValue} = useContext(ClientContext)
    const [clientsLocals, setClientsLocals] = useState([])
    useEffect((()=>{
        
        
        axios.get(`https://marcelarocha.pythonanywhere.com/clients_auction/${localValue}`)
            .then(response => setClientsLocals(response.data))       
    }),[])
    
    

    return ( 
        <>
        <Link to="/clients"> <IoMdArrowRoundBack className='backIcon click'/> </Link>
            
         <container className="tableContainer">
                    
                       
                        
                    
                        <table className='tableContent'>
                                                <thead>
                                                    <tr>
                                                        <th>Site</th>
                                                        <th>Categoria</th>
                                                        <th>Preço</th>                                                        
                                                        <th>Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                {
                                                    
                                                        clientsLocals.map((local)=>{
                                                            console.log(local[0])
                                                            return(
                                                                <tr>
                                                                    <td>{local[0]}</td>
                                                                    <td>{local[1]}</td>
                                                                    <td>{local[2]}</td>
                                                                    <td><a className='linkBtn' href={local[3]}> Ver mais</a></td>
                                                                </tr>
                                                            )
                                                        } )
                                                    
                                                                                                     
                                                }
                                                                         
                                                </tbody>
                        </table>
                    </container>
        </>
                
     );
}

export default Auctions_clients;
