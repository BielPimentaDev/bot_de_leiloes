import './Clients_table.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'



function Clients_table() {
    const [clientName, setClientName] = useState('')
    const [clientLocal, setClientLocal] = useState('')

    function setClientTable(name,local){
        setClientName(name)
        setClientLocal(local)
        console.log(clientName,clientLocal)
    }

    const [clients , setClients] = useState([])
    useEffect(( ()=>{
        
        axios.get('http://127.0.0.1:5000/clients')
            .then(response =>{
                const datas = response.data
                
                setClients(Object.entries(datas))
                console.log(typeof(clients[1]))
                
                
            })
        
    }

    ),[])
    return ( 
        
        
                    <container className="tableContainer">
                        <table className='tableContent'>
                                                <thead>
                                                    <tr>
                                                        <th>Nome</th>
                                                        <th>Lugar</th>
                                                        <th>Leilões</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                         {
                                                             clients.map((client)=>{
                                                                 
                                                                 return(
                                                                     <>
                                                                        <tr>
                                                                            <td name='clientName'>{client[1][0]}</td>
                                                                            <td name='clientLocal'>{client[1][1]}</td>
                                                                            <td><button onClick={() =>setClientTable(client[1][0],client[1][1])} className='linkBtn'>Veja mais</button></td>
                                                                        </tr>
                                                                     </>
                                                                 )
                                                             })
                                                         }                            
                                                       
                                                                                                  
                                                </tbody>
                        </table>
                    </container>
                
            
                    
                
        
     );
}

export default Clients_table;
