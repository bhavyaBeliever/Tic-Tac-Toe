import "./App.css"
import React from 'react';
import { useState } from "react";
const Square = (value, onSquareClick, isXnext) => {
  return (
    <button className="square" value={value} onClick={onSquareClick}>{isXnext ? "x" : "o"} </button>
  );
}
const handleClick = () => {
  setCountMoves(countMoves+1);
  
}

function App() {
  countMoves, setCountMoves = useState(0)
  isXnext = (countMoves % 2 === 0)
  return (
    <>
      <div className="board">

        <div className="row">
          <Square value="1" onSquareClick={handleClick} isXnext={isXnext} />
          <Square value="2" onSquareClick={handleClick} isXnext={isXnext} />
          <Square value="3" onSquareClick={handleClick} isXnext={isXnext} />
        </div>

      </div>
    </>
  );
}

export default App;
