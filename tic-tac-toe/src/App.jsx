import { useState } from 'react';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function App() {
  const [play, setPlay] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(play);
  const isDraw = winner === null && play.every(square => square !== null);

  const handleReset = () => {
    setPlay(Array(9).fill(null));
    setIsXNext(true);
  }
  const handleClick = (index) => {
    if(play[index] !== null) {
      return;
    }

    if(winner !== null) {
      return;
    }
    const player = isXNext ? "X" : "O";

    const newPlay = [...play];

    newPlay[index] = player;

    setPlay(newPlay);

    setIsXNext(!isXNext);
  }

  return (
  <>
    <style>{`
    .board {
      display:grid;
      grid-template-columns: repeat(3, 100px);
      gap: 5px;
    }
    
    .square {
      width: 100px;
      height: 100px;
      font-size:36px;
      font-weight: bold;
    }
  `}</style>
    <div className="status">
      <h2>
        {winner ? `Winner: ${winner}` : isDraw ? `It's a draw!` : `Next player: ${isXNext ? 'X' : 'O'}`}

      </h2>
    </div>
    <div className="board">
      {play.map((value, index) => (
        <button
          className="square"
          key={index}
          onClick ={() => handleClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
    <button id="reset" onClick={handleReset}>
      Reset Game
    </button>
  </>
  )
}