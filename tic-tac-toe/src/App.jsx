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
      body {
        font-family: 'Inter', sans-serif;
        background-color: #1a202c;
        color: #e2e8f0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }

      .status h2 {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        color: #90cdf4;
        margin-bottom: 24px;
      }

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
        background-color: #2d3748; /* Cor de fundo do botão */
        color: #e2e8f0; /* Cor do X e O */
        border: 1px solid #4a5568;
      }

      #reset {
        margin-top: 24px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #1a202c;
        background-color: #90cdf4;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      #reset:hover {
        background-color: #63b3ed;
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