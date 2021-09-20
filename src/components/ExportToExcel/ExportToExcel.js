import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { BsDownload } from 'react-icons/bs';

export const ExportToExcel = ({ apiData, fileName }) => {
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.xlsx';

	const exportToCSV = (apiData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(apiData);
		ws.A1.v = 'Categoria';
		ws.B1.v = 'Descrição';
		ws.C1.v = 'Preço';
		ws.D1.v = 'Site';
		ws.E1.v = 'Url';

		console.log(ws);
		const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		// <button onClick={(e) => exportToCSV(apiData, fileName)}>Export</button>
		<button
			className='back-button'
			onClick={(e) => exportToCSV(apiData, fileName)}>
			<BsDownload size={25} />
		</button>
	);
};
