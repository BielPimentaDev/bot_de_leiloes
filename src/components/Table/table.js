import React, { useEffect, useState, useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import './table.css';
import { useHistory } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import { ExportToExcel } from '../ExportToExcel/ExportToExcel';

export const FilteringTable = () => {

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [filteredData, setFilteredData] = useState({});
	const [dropdownData, setDropdownData] = useState({});
	const [filter, setFilter] = useState('Categorias');

	const appContext = useContext(AppContext);
	const { callApi, getObject } = appContext;

	useEffect(() => {
		async function fetchData() {
			
			const results = await callApi();
			const json_data = results.data.data;
			setData(json_data);
			setFilteredData(json_data);
			const drop = newSetCategory(json_data);
			setDropdownData(drop);
			setLoading(false);
		}

		fetchData();
	}, []);

	function newSetCategory(items) {
		var lookup = {};
		var result = [];

		for (var item, i = 0; (item = items[i++]); ) {
			var name = item.category;

			if (!(name in lookup)) {
				lookup[name] = 1;
				result.push(name);
			}
		}
		return result.sort();
	}

	const history = useHistory();

	function goBack() {
		history.push('/');
	}

	const filterRedirect = function (category) {
		var filtered = data.filter((item) => {
			return item.category === category;
		});
		console.log(filtered);
		setFilteredData(filtered);
		setFilter(category);
	};

	return (
		<>
			{loading ? (
				<div className='loading-screen'>
					<ClipLoader size={150} color={'#212529'} loading={loading} backgroundColor={'#F5F5F5'} />
				</div>
			) : (
				<>
					<Navbar style={{ backgroundColor: '#F0F0F0' }} expand='lg'>
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
						</Navbar.Collapse>
					</Navbar>

					<DropdownButton
						id='dropdown-basic-button'
						title={filter}
						className='text-center w-100 bg-orange'>
						<Dropdown.Item
							onClick={() => {
								setFilteredData(data);
								setFilter('Categorias');
							}}>
							-
						</Dropdown.Item>
						{dropdownData.map((item) => (
							<Dropdown.Item key={item} onClick={() => filterRedirect(item)}>
								{item}
							</Dropdown.Item>
						))}
					</DropdownButton>

					<div className="tableContainer">
						<Table className='tableContent'>
							<thead>
								<tr>
									<th>
										Site
										
									</th>
									<th>
										Categoria
										
									</th>
									<th>
										Preço
										
									</th>
									<th>
										Link
										
									</th>
								</tr>
							</thead>
							<tbody>
								{filteredData.map((row, i) => (
									<tr key={i}>
										<td className='label-info'>{row.site}</td>

										<td className='label-info'>{row.category}</td>

										<td className='label-info'>{row.price}</td>

										<td>
											<a href={row.url} target='_blank' style={{ textDecoration: 'none' }} title={row.description}className='act-button'>VISUALIZAR IMÓVEL
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
