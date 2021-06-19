import React from 'react';
import ReactDOM from 'react-dom';
import TeamList from './TeamList'
import axios from 'axios';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: []
        };
        this.increaseWins = this.increaseWins.bind(this);
    }

    async componentDidMount() {
        try {
            const res = await axios.get('/api/teams');
            const teams = res.data;
            this.setState({ teams });
        }
        catch (err) {
            console.log('There was a problem making contact!')
        };
    }

   async increaseWins (teamId) {
        try {
            await axios.put(`/api/teams/${teamId}`, {
                wins: team.wins ++
            })
        }
        catch (err) {
            console.log('There was a problem making contact!')
        }
    }
    
    render() {
        return (
            <div id='main'>
                <h1>Euros 2020</h1>
                <TeamList teams = { this.state.teams }/>
            </div>
   )}

}

ReactDOM.render(<Main />, document.getElementById('app'));