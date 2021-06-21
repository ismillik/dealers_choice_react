import React from 'react';

const TeamList = (props) => {
  const { teams, increaseWins } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th>Team</th>
          <th>Flag</th>
          <th>Group</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
        </tr>
        {teams.map((team) => (    
        <tr key={team.id}>
            <td>{team.name}</td>
            <td><img src={team.flagUrl}/></td>
            <td>{team.group}</td>
            <td>{team.wins} <button onClick= {() => increaseWins(team.id)}>+</button><button>-</button></td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>

        </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamList;