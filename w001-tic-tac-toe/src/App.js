import { useState } from 'react'; 

// In React, a component is a piece of reusable code that represents a part of a user interface.
// the Square component can be passed a prop called value.
function Square() {
    // We need the Square component to "remember" that it got clicked, and fill it with an "X" mark.
    // To "remember" things, components use state.
    // React provides a special function called useState that helps us to let our components to "remember" things.
    // The useState function receives a stateful value as the initial state, then returns a stateful value and a fucntion to update it.
    const [value, setValue] = useState(null)

    function handleClick() {
        setValue('X');
    }

    // To “escape into JavaScript” from JSX, we need curly braces `{}` to wrapper the prop.
    return (
      <button 
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    )
}

// The default is a JavaScript keyword tells other files using your code that it's the main function in your file.
// So we can using <App /> to replace <Board />.
export default function Board() {
  // <button> is a JSX element.
  // A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 
  // We must using an enclosing tag '(<></>)' to wrapper multiple adjacent JSX elements as following.
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square/>
        <Square />
        <Square />
      </div>
    </>
  );
}
