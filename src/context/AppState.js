import React, { useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

const AppState = (props) => {
	const apiUrl = 'http://192.168.15.47:5000/';
	const [getObject, setGetObject] = useState({
		state_city: '',
	});

	const callApi = async () => {
		try {
			if (getObject.state_city !== '') {
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
