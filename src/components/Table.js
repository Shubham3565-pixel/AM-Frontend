import Table from 'react-bootstrap/Table'
// import Getdata from './Getdata';

function Table_home(props) {
    const options = ["Date", "Time", "Debit", "Credit", "Total Balance", "Description"];
    return (
        <Table responsive variant='dark' className='rounded sm'>
            <thead>
                <tr>
                    <th>S.N.</th>
                    {options.map((data,index) => (
                        <th key={index}>{data}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.data.map((data,index) => (
                    <tr key={index}>
                        {Object.values(data).map((val,index) => (
                            <td key={index}>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Table_home;