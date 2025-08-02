import React from 'react';

function IndianPlayers() {
  const oddTeam = ['Virat', 'Dhoni', 'Hardik', 'Gill', 'Ashwin'];
  const evenTeam = ['Rohit', 'Shreyas', 'Jadeja', 'Bumrah', 'Iyer'];

  // Destructuring examples
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  // Merge two arrays
  const T20players = ['Kohli', 'Rohit'];
  const RanjiTrophy = ['Pujara', 'Rahane'];
  const mergedPlayers = [...T20players, ...RanjiTrophy]; // ES6 merge using spread

  return (
    <div>
      <h2>Odd Team Players (Using Destructuring)</h2>
      <p>{odd1}, {odd2}, {restOdd.join(', ')}</p>

      <h2>Even Team Players (Using Destructuring)</h2>
      <p>{even1}, {even2}, {restEven.join(', ')}</p>

      <h2>Merged Players (T20 + Ranji)</h2>
      <p>{mergedPlayers.join(', ')}</p>
    </div>
  );
}

export default IndianPlayers;
