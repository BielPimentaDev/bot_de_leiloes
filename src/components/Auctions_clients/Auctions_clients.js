import { ConnectionStartOk } from 'amqplib/lib/defs';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Auctions_clients({name, local}) {


    const [clientsLocals, setClientsLocals] = useState([])
    useEffect((()=>{
        axios.get('http://127.0.0.1:5000/clients_auction/São paulo')
        .then(response => setClientsLocals(response.data))
    }),[])
    
    

    return ( 

    
         <container className="tableContainer">
                    <header>
                        <h3>{name}</h3>
                        <p>{local}</p>
                    </header>
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
                
     );
}

export default Auctions_clients;