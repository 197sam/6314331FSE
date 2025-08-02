import React from 'react';

const players = [
  { name: "Virat", score: 95 },
  { name: "Rohit", score: 88 },
  { name: "Dhoni", score: 100 },
  { name: "Hardik", score: 65 },
  { name: "Shreyas", score: 70 },
  { name: "Gill", score: 60 },
  { name: "Jadeja", score: 78 },
  { name: "Bumrah", score: 50 },
  { name: "Surya", score: 85 },
  { name: "Ashwin", score: 67 },
  { name: "Iyer", score: 72 },
];

function ListofPlayers() {
  // Use map to list all players
  const allPlayers = players.map((player, index) => (
    <li key={index}>
      {player.name} - {player.score}
    </li>
  ));

  // Use arrow function and filter for scores below 70
  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h3>Players with Score below 70</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
