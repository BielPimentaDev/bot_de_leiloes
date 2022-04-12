import React, {useEffect, useState} from 'react';
import axios from 'axios';



function DataBaseClients() {
    const [clients, SetClients] = useState([])

    useEffect(() =>{
        axios.get('http://127.0.0.1:5000/clients')
        .then((response) =>{ 
            SetClients(response.data)
            
        })
    }, [])
    Object.keys(clients).map((client) =>{
        console.log(client)
        console.log(clients[client])
    })
    Object.values(clients).map((client) =>{
        console.log(client)
    })

    
    
    return ( 

        
        <container className = "clientsContainer">
           <h1>Ok</h1>
            
        </container>
            
        
     );
}

export default DataBaseClients;