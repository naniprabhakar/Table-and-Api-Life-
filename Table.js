import React from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
    render() {
        const data = [{
            name: 'Ravi',
            age: 26
        },
            {
            name: 'Rahana',
            age: 22
            },
            {
            name: 'Pram',
            age: 40
            },
            {
            name: 'Virat',
            age: 30
            },
            {
            name: 'Rohit',
            age: 32
            },
            {
            name: 'Dhoni',
            age: 37
            },
            {
             name: 'Nani',
                age: 28
            },
            {
            name: 'Suri',
            age: 30
            },
            {
            name: 'Ravi',
            age: 36
            },
            {
            name: 'Raju',
            age: 27
            },
            {
            name: 'Rama',
            age: 16
            },
            {
            name: 'Gopi',
            age: 67
            },
            {
                name: 'Gopal',
                age: 10
            }]

        const columns = [{
            Header: 'Name',
            accessor: 'name'
        },
            {
            Header: 'Age',
            accessor: 'age'
        }]
        return (
            <div>
                <h1>Name And Age</h1>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={4}
                    pageSizeOptions={[2,4, 6]}
                />
            </div>
        )
    }
}
export default App;