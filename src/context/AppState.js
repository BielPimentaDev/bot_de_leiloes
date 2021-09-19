import React, { useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

const AppState = (props) => {
	const apiUrl = 'http://localhost:9000';
	const [getObject, setGetObject] = useState({
		state_city: '',
	});

	const callApi = async () => {
		try {
			// const results = axios.get(`${apiUrl}/results/`, {
			// 	params: { state_city: getObject.state_city },
			// });
			// return results;
			console.log(getObject.state_city);
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
