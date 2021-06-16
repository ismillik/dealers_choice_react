import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: []
        };
    }

    render() {
        return (
            <div id='main'>
                <h1>This is a test</h1>
            </div>
   )}

}

ReactDOM.render(<Main />, document.getElementById('#app'));