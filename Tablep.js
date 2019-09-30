import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component{
    render() {
        const data = [{
                COUNTRY: 'India',
                CAPITAL: 'New Delhi',
                Number : 1
            },
            {
                COUNTRY: 'Afghhanistan',
                CAPITAL: 'Kabul',
                Number: 2
            },
            {
                COUNTRY: 'Albania',
                CAPITAL: 'Tirana',
                Number: 3
            },
            {
                COUNTRY: 'Algeria',
                CAPITAL: 'Algerias',
                Number: 4
            },
            {
                COUNTRY: 'Andorra',
                CAPITAL: 'Andorra la Vella',
                Number: 5
            },
            {
                COUNTRY: 'Angola',
                CAPITAL: 'Luanda',
                Number: 6
            },
            {
                COUNTRY: 'Argentina',
                CAPITAL: 'Buenos Aires',
                Number: 7
            },
            {
                COUNTRY: 'Algeria',
                CAPITAL: 'Algerias',
                Number: 8
            },
            {
                COUNTRY: 'Australisa',
                CAPITAL: 'Canberra',
                Number: 9
            },
            {
                COUNTRY: 'Austria',
                CAPITAL: 'Vienna',
                Number: 10
            },
            {
                COUNTRY: 'Bhutan',
                CAPITAL: 'Thimphu',
                Number: 11
            },
            {
                COUNTRY: 'Canada',
                CAPITAL: 'Ottawa',
                Number: 12
            },
            {
                COUNTRY: 'China',
                CAPITAL: 'Beijing',
                Number: 13
            },
            {
                COUNTRY: 'Colombia',
                CAPITAL: 'Bogota',
                Number: 14
            },
            {
                COUNTRY: 'Dominica',
                CAPITAL: 'Roseau',
                Number: 15
            },
            {
                COUNTRY: 'Ecuador',
                CAPITAL: 'Quito',
                Number: 16
            },
            {
                COUNTRY: 'Estonia',
                CAPITAL: 'Tallinn',
                Number: 17
            },
            {
                COUNTRY: 'Finland',
                CAPITAL: 'Helsinki',
                Number: 18
            },
            {
                COUNTRY: 'France',
                CAPITAL: 'Paris',
                Number: 19
            },
            {
                COUNTRY: 'Iceland',
                CAPITAL: 'Reykjavik',
                Number: 20
            },
            {
                COUNTRY: 'India',
                CAPITAL: 'New Delhi',
                Number: 21
            },
            {
                COUNTRY: 'Iran',
                CAPITAL: 'Tehran',
                Number: 22
            },
            {
                COUNTRY: 'Ireland',
                CAPITAL: 'Dudlin',
                Number: 23
            },
            {
                COUNTRY: 'Laos',
                CAPITAL: 'Vientiane',
                Number: 24
            },
            {
                COUNTRY: 'Libya',
                CAPITAL: 'Tripoli',
                Number: 25
            },
            {
                COUNTRY: 'Nepal',
                CAPITAL: 'Kathmandu',
                Number: 26
            },
            {
                COUNTRY: 'New Zealand',
                CAPITAL: 'Wellington',
                Number: 27
            },
            {
                COUNTRY: 'Pakisthan',
                CAPITAL: 'Islamabad',
                Number: 28
            }
            ]

        const columns = [{
            Header: 'Country',
            accessor:'COUNTRY'          
            },
            {
            Header: 'Capital',
            accessor: 'CAPITAL'
            }
        ]

      /*  const rows = [{
            Header: 'Number',
            accessor:'Number'
        }]
*/
        return (
            <div>
                <h1>COUNTRIES AND CAPITALS</h1>
                <ReactTable
                    data={data}
                    columns={columns}
                   // rows={rows}
                    defaultPageSize={6}
                    pageSizeOptions={[4, 6, 8]}
                />
            </div>
            );
    }
}

export default App;