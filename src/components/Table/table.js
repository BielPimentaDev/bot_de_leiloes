import React, { useEffect, useState, useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Table } from 'react-bootstrap';
import './table.css';
import { useHistory } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Form, Navbar, Button } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import MOCK_DATA from './jobs.json';

export const FilteringTable = () => {
	// console.log("data",data)
	// const [loading, setLoading] = useState(true);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});

	const appContext = useContext(AppContext);
	const { callApi } = appContext;

	useEffect(() => {
		async function fetchData() {
			const results = await callApi();

			setTimeout(() => {
				setLoading(false);
			}, 1000);
			setData(MOCK_DATA);
		}

		fetchData();
	}, []);

	const history = useHistory();

	function goBack() {
		history.push('/');
	}

	return (
		<>
			{loading ? (
				<div className='loading-screen'>
					<ClipLoader size={150} color={'#fff'} loading={loading} />
				</div>
			) : (
				<>
					<Navbar bg='white' expand='lg'>
						<button className='back-button' onClick={goBack}>
							<FaAngleDoubleLeft size={25} />
						</button>
						<Navbar.Collapse className='justify-content-center'>
							<label className='label-search'>RESULTADO DA BUSCA</label>
						</Navbar.Collapse>
					</Navbar>

					<div className='div-table'>
						<Table className='table-fixed'>
							<thead>
								<tr>
									<th>
										Vaga
										<br />
									</th>
									<th>
										Empresa
										<br />
									</th>
									<th>
										Local
										<br />
									</th>
									<th>
										Data
										<br />
									</th>
									<th>
										Link
										<br />
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((row, i) => (
									<tr key={i}>
										<td className='label-info'>{row.job}</td>

										<td className='label-info'>{row.employer}</td>

										<td className='label-info'>{row.local}</td>

										<td className='label-info'>{row.date}</td>

										<td>
											<a
												href={row.link}
												target='_blank'
												title={row.description}>
												<button className='td-button'>VISUALIZAR VAGA</button>
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</>
			)}
		</>
	);
};
