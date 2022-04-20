import './Clients_table.css'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext';
import ClientContext from '../../context/ClientContext';

function Clients_table() {   

    const {value, setValue} = useContext(ClientContext)
    const {localValue, setLocalValue} = useContext(ClientContext)

    function setTable(name, local){
        setValue(name)
        setLocalValue(local)
        console.log(value)
        console.log(name)
        console.log(local)
        
    }
    const [clients , setClients] = useState([])
    useEffect(( ()=>{
        
        axios.get(' http://marcelarocha.pythonanywhere.com/clients')
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
                                                                            <td> <Link to="/client_local"> <div onClick={()=>{setTable(client[1][0],client[1][1])}} >Veja mais</ div> </Link></td>
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
