import { Link } from 'react-router-dom'

function Auctions_table() {
    return ( <>
   <container className="tableContainer">
                        <table className='tableContent'>
                                                <thead>
                                                    <tr>
                                                        <th>Site</th>
                                                        <th>Categoria</th>
                                                        <th>Preço</th>
                                                        <th>Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Guilherme</td>
                                                        <td>Niterói</td>
                                                        <td>Niterói</td>
                                                        <td><Link style={{ textDecoration: 'none' }}  to="/Guilherme" className='linkBtn'>VER MAIS</Link></td>
                                                    </tr>                                                    
                                                </tbody>
                        </table>
                    </container>
    </> );
}

export default Auctions_table;