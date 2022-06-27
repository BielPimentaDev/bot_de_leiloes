import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext';
import image from '../imgs/image.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import './Home.css'

function Home() {
	const appContext = useContext(AppContext);
	const { getObject, setGetObject } = appContext;

	const handleInput = (input) => (e) => {
		setGetObject((obj) => ({ ...obj, [input]: e.target.value }));
		
	};


	return (
		<form className='mainHome'>
			<img className = 'homeImage' src={image}/>
			
			<div className='homeButton'>
			<TextField  style={{fontWeight: '900'}} fullWidth id="outlined-basic" label="Cidade" variant="outlined" name="place" value={getObject.state_city} onChange={handleInput('state_city')} />
				<Link to='/results'>
				<Button style={{width: '200px'}} variant="contained" size='large' type='submit'>BUSCAR</Button>
				</Link>
			</div>

		</form>
	);
}
export default Home;
