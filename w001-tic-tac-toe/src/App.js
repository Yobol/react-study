// We need the Square component to "remember" that it got clicked, and fill it with an "X" mark.
// To "remember" things, components use state.
// React provides a special function called useState that helps us to let our components to "remember" things.
// The useState function receives a stateful value as the initial state, then returns a stateful value and a fucntion to update it.
import { useState } from 'react'; 

// In React, a component is a piece of reusable code that represents a part of a user interface.
// the Square component can be passed a prop called value.
function Square({ value, onSquareClick }) {
    // To “escape into JavaScript” from JSX, we need curly braces `{}` to wrapper the prop.
    return (
      <button 
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </button>
    )
}

function Board({ xIsNext, squares, onPlay }) {
  function handleSquareClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // <button> is a JSX element.
  // A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 
  // We must using an enclosing tag '(<></>)' to wrapper multiple adjacent JSX elements as following.
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/*
          Can't directly use '<Square value={squares[0]} onSquareClick={handleSquareClick(0)} />'.
          Because the 'handleSquareClick(0)' alters the state of the Board components by calling 'setSquares'.
          It will re-render the Square component to call the 'handleSquareClick(0)' again, 
          leading to an infinite looooooooooooooooooooooooooooooooooooooooooooooooooop!

          Note:
            onSquareClick={handleSquareClick} doesn't call the function.
            onSquareClick={handleSquareClick(0)} will call the function right now.
        */}
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}

// Forbid you from scrolling past it every time you edit your components.
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 5],
    [2, 4, 6],
  ]
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// The default is a JavaScript keyword tells other files using your code that it's the main function in your file.
// So we can using <App /> to replace <Game />.
export default function Game() {
  // Using immutability's serveral benefits:
  // 1. implement easily undo & redo actions to keep previous versions of the data intact, and reuse them later;
  // 2. makes it very cheap for components to compare whether their data has changed or not

  // To collect data from multiple children, or to have two child components communicate with each other, 
  // declare the shared state in their parent component instead. The parent component can pass that state back down 
  // to the children via props. This keeps the child components in sync with each other and with their parent.
  // Array(9).fill(null) creates an array with nine elements and sets each of them to null.
  // Besides, state is private to a component that defines it. So we cannot update the Board’s state directly from Square.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // There’s no reason for you to store both of these in state. In fact, always try to avoid redundant state.
  // Simplifying what you store in state reduces bugs and makes your code easier to understand.
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // Calling the setSquares functions lets React to know the state of the component has changed.
    // This will trigger a re-render of the components that use the squares state (the Board component) as well as
    // its child components (the Square components that make up the board).
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // In JavaScript, to transform one array into another, you can use the array map method:
  // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      // Keys tell React about the identity of each component, which allows React to maintain state between re-renders.
      // If a component’s key changes, the component will be destroyed and re-created with a new state.
      // It’s strongly recommended that you assign proper keys whenever you build dynamic lists.
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}