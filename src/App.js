import "./App.css"
import React from 'react';
import { useState } from "react";
const Square = ({ value, countMoves, setCountMoves, isXnext, history, setHistory }) => {
  const [click, setClick] = useState(false)
  const [text, setText] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    if (click) {
      return;
    }
    setClick(true);
    setCountMoves(countMoves + 1);
    const newHistory = [...history];
    newHistory[value] = isXnext ? "X" : "O";
    setHistory(newHistory);
    isXnext ? setText("X") : setText("O");

  }
  return (
    <button className="square" value={value} onClick={handleClick}>{click && text}</button>
  );
}

function App() {
  const [history, setHistory] = useState(Array(9).fill(null))
  const [countMoves, setCountMoves] = useState(0)
  const isXnext = (countMoves % 2 === 0)
  const [end, setEnd] = useState(false);
  const winnerRow = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const isEndGame = (history) => {
    for (let i = 0; i < winnerRow.length; i++) {
      const [a, b, c] = winnerRow[i];
      if (history[a] && history[a] === history[b] && history[a] === history[c]) {
        console.log(history[a]);
        return history[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // Return null if there's no winner
  };
  const winner = isEndGame(history);
  console.log(winner);
  return (
    <>
      {
        !winner ? (
          <>
            <p>
              {isXnext ? "X " : "O "}
              to play
            </p>
            <div className="board">

              <div className="row">
                <Square value="0" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
                <Square value="1" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
                <Square value="2" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
              </div>

              <div className="row ">
                <Square value="3" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
                <Square value="4" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
                <Square value="5" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
              </div>

              <div className="row">
                <Square value="6" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
                <Square value="7" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
                <Square value="8" countMoves={countMoves} setCountMoves={setCountMoves} isXnext={isXnext} history={history} setHistory={setHistory} />
              </div>

            </div>
          </>
        ) : (
          <>
            <p>
              {`Winner is: ${winner} 🏆`}
            </p>
          </>
        )
      }
    </>
  );
}

export default App;
