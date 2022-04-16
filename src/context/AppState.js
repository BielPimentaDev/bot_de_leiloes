import React, { useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

const AppState = (props) => {
	const apiUrl = 'http://127.0.0.1:5000';
	/* const apiUrl = 'https://marcelarocha.pythonanywhere.com'; */
	const [getObject, setGetObject] = useState({
		state_city: '',
	});

	const callApi = async () => {
		
		try {
			if (getObject.state_city !== '') {
				console.log(getObject)
				const results = await axios.get(`${apiUrl}/`, {
					params: { state_city: getObject.state_city },
				});
				return results;
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<AppContext.Provider
			value={{
				getObject,
				setGetObject,
				callApi,
			}}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
