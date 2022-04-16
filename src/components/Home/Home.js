import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext';


import './Home.css'

function Home() {
	const appContext = useContext(AppContext);
	const { getObject, setGetObject } = appContext;

	const handleInput = (input) => (e) => {
		setGetObject((obj) => ({ ...obj, [input]: e.target.value }));
		
	};


	return (
		<form className='mainHome'>
			<section className='inputSection'>				
				<input type="text" placeholder=' Estado ou cidade...' name="place" value={getObject.state_city} onChange={handleInput('state_city')}/>
				<label className='labelSearch'>PESQUISAR: </label>				
			</section>

			<Link to='/results'>
				<button type='submit'>ENVIAR</button>
			</Link>
		</form>
	);
}
export default Home;
