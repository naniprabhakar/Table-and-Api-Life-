import React from 'react';
import PropTypes from 'prop-types';  

class App extends React.Component {
    constructor() {
        super();
        this.state = { msg: "Welcome to Indium" };

        this.updateSetState = this.updateSetState.bind(this);
    }
    updateSetState() { this.setState({ msg: "This is Indium" }); }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateSetState}>Set State </button>
            </div>
        );
    }

}
export default App;