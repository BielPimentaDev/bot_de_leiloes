import React, { useState, useEffect, useContext } from 'react';

import Register from './components/Register/Register';
import { Form, Navbar, Button } from 'react-bootstrap';
import './App.css';
import Home from './components/Home/Home';
import AppContext from './context/AppContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { FilteringTable } from './components/Table/table';
import DataBaseClients from './components/DataBaseClients/DataBaseClients';

function App() {
	const appContext = useContext(AppContext);

	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<div className='mt-5'>
						<Navbar fixed='top' bg='info' expand='lg'>
							<Navbar.Collapse className='justify-content-center'>
								<Navbar.Brand className='text-white'>
									Robô de Leilões
								</Navbar.Brand>
							</Navbar.Collapse>
						</Navbar>
						<div className='container'>
							<div className='row'>
								<div className='col-12'>
									<Home />
								</div>
							</div>
						</div>
								
						<div className='footer'>Created By Guilherme Alves Pimenta</div>
					</div>


				</Route>

				<Route path='/results'>
					<FilteringTable />
				</Route>
				<Route path='/clients'>
					<DataBaseClients/>
				</Route>
				<Route path='/register'>
					<Register/>	
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
