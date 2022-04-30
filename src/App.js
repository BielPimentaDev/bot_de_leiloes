import React, { useState, useEffect, useContext } from 'react';
import Menu from './components/Menu/Menu';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Clients_table from './components/Clients_table/Clients_table';
import Auctions_clients from './components/Auctions_clients/Auctions_clients';
import Auctions_table from './components/Auctions_table/Auctions_table';
import ClientContext from './context/ClientContext';


import { Form, Navbar, Button } from 'react-bootstrap';
import './App.css';
import Home from './components/Home/Home';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { FilteringTable } from './components/Table/table';


function App() {
	const [value, setValue] = useState('Gabriel')
	const [localValue, setLocalValue] = useState('Niterói')
	
	return (
		<Router>
			<Switch>
				<Route exact path='/'>				
						
						
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Buscar"subnamne = ''/>
							<Home/>					
							<div className='footer'></div>
							</container>
							
						</container>


				</Route>

				<Route path='/results'>
				<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Buscar" subnamne = ''/>
							<FilteringTable />					
							<div className='footer'></div>
							</container>							
						</container>					
				</Route>
				
				
				<Route path='/register'>
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Registro"subnamne = "''"/>
							<Register/>
							<div className='footer'></div>
							</container>
							
						</container>
						
				</Route>

				
				<ClientContext.Provider value = {{value,localValue, setValue, setLocalValue}}>
					<Route path='/clients'>
							<container className="appContainer">					
								<Menu/>
								<container className="mainApp">
								<Header name="Clientes" subnamne = ''/>
								<Clients_table/>
								<div className='footer'></div>
								</container>
								
							</container>						
					</Route>

					<Route path='/client_local'>	

							<container className="appContainer">					
								<Menu/>
								<container className="mainApp">
									<Header name={value} subname = {localValue}/>
									<Auctions_clients name='{clientName}' local='{clientLocal}' />
									<div className='footer'></div>
								</container>							
							</container>
					</Route>
				</ClientContext.Provider>

				<Route path='/auctions'>
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Leilões" subnamne = ''/>
							<Auctions_table/>
							<div className='footer'></div>
							</container>
							
						</container>
				</Route>

				
			</Switch>
		</Router>
	);
}

export default App;
