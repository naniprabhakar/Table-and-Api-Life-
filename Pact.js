import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: true,
            id: 5
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <from>
                <h1>React Redux</h1>
                <label> Name:
                  <input type="checkbox" name="Name" checked={this.state.personGoing} onChange={this.handleInputChange} />
                </label>
                <br />
                <label> Id:
                 <input type="number" name="id" value={this.state.numberOfPersons} onChange={this.handleInputChange} />
                </label>
            </from>
            );
    }
}

export default App;