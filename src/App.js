import React, { useState, useEffect, useContext } from 'react';
import Menu from './components/Menu/Menu';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Clients_table from './components/Clients_table/Clients_table';
import Auctions_clients from './components/Auctions_clients/Auctions_clients';
import Auctions_table from './components/Auctions_table/Auctions_table';
import AuctionClientMannager from './components/AuctionClientMannager/AuctionClientMannager';

import { Form, Navbar, Button } from 'react-bootstrap';
import './App.css';
import Home from './components/Home/Home';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { FilteringTable } from './components/Table/table';


function App() {
	
	
	return (
		<Router>
			<Switch>
				<Route exact path='/'>				
						
						
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Buscar"subnamne = ''/>
							<Home/>					
							<div className='footer'>Created By Guilherme Alves Pimenta</div>
							</container>
							
						</container>


				</Route>

				<Route path='/results'>
				<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Buscar" subnamne = ''/>
							<FilteringTable />					
							<div className='footer'>Created By Guilherme Alves Pimenta</div>
							</container>							
						</container>					
				</Route>
				
				<Route path='/clients'>
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Clientes" subnamne = ''/>
							<Clients_table/>
							<div className='footer'>Created By Guilherme Alves Pimenta</div>
							</container>
							
						</container>

					
				</Route>
				<Route path='/register'>
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Registro"subnamne = "''"/>
							<Register/>
							<div className='footer'>Created By Guilherme Alves Pimenta</div>
							</container>
							
						</container>
						
				</Route>

				
				<Route path='/client_local'>
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Clientes " subnamne = ''/>
							<Auctions_clients name="Guilherme" local="São paulo" />
							<div className='footer'>Created By Guilherme Alves Pimenta</div>
							</container>
							
						</container>
				</Route>

				<Route path='/auctions'>
						<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Leilões" subnamne = ''/>
							<Auctions_table/>
							<div className='footer'>Created By Guilherme Alves Pimenta</div>
							</container>
							
						</container>
				</Route>

				<Route path="/teste">
				<container className="appContainer">					
							<Menu/>
							<container className="mainApp">
							<Header name="Clientes" subnamne = ''/>
							<AuctionClientMannager/>
							<div className='footer'>Created By Guilherme Alves Pimenta</div>
							</container>
							
						</container>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
