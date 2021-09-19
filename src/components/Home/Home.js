import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

function UserForm() {
	const appContext = useContext(AppContext);
	const { getObject, setGetObject } = appContext;

	const handleInput = (input) => (e) => {
		setGetObject((obj) => ({ ...obj, [input]: e.target.value }));
	};

	return (
		<Card className='p-3 mt-3'>
			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Entrada de dados:</Form.Label>
				<Form.Control
					onChange={handleInput('state_city')}
					value={getObject.state_city}
					className='mb-2'
					type='text'
					placeholder='Estado ou Cidade...'
				/>
			</Form.Group>

			<Link to='/results'>
				<Button variant='info'>Enviar</Button>
			</Link>
		</Card>
	);
}
export default UserForm;
