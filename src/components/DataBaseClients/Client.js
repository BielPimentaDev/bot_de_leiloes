

function Client(name, table) {
    return ( 
        <table>
            <tr>
                <th>{name}</th>
            </tr>
            <tr>
                <td>{table}</td>
            </tr>

        </table>
     );
}

export default Client;