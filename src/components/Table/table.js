import React, { useEffect, useState, useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Table } from 'react-bootstrap';
import './table.css';
import { useHistory } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import { ExportToExcel } from '../ExportToExcel/ExportToExcel';

export const FilteringTable = () => {
	// console.log("data",data)
	// const [loading, setLoading] = useState(true);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});

	const appContext = useContext(AppContext);
	const { callApi, getObject } = appContext;

	useEffect(() => {
		async function fetchData() {
			const results = await callApi();
			const json_data = results.data.data;
			setData(json_data);
			setLoading(false);
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
						<Navbar.Collapse className='justify-content-start'>
							<button className='back-button' onClick={goBack}>
								<FaAngleDoubleLeft size={25} />
							</button>
						</Navbar.Collapse>

						<Navbar.Collapse className='justify-content-center'>
							<label className='label-search'>
								{getObject.state_city.toUpperCase()}
							</label>
						</Navbar.Collapse>
						<Navbar.Collapse className='justify-content-end'>
							<ExportToExcel apiData={data} fileName={getObject.state_city} />
							{/* <button
								className='back-button'
								onClick={(e) => ExportToExcel(data, getObject.state_city)}>
								<BsDownload size={25} />
							</button> */}
						</Navbar.Collapse>
					</Navbar>

					<div className='div-table'>
						<Table className='table-fixed'>
							<thead>
								<tr>
									<th>
										Site
										<br />
									</th>
									<th>
										Categoria
										<br />
									</th>
									<th>
										Preço
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
										<td className='label-info'>{row.site}</td>

										<td className='label-info'>{row.category}</td>

										<td className='label-info'>{row.price}</td>

										<td>
											<a href={row.url} target='_blank' title={row.description}>
												<button className='td-button'>VISUALIZAR IMÓVEL</button>
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
