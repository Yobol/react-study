// In React, a component is a piece of reusable code that represents a part of a user interface.
// the Square component can be passed a prop called value.
function Square({value}) {
    // To “escape into JavaScript” from JSX, we need curly braces `{}` to wrapper the prop.
    return <button className="square">{value}</button>
}

// The default is a JavaScript keyword tells other files using your code that it's the main function in your file.
// So we can using <App /> to replace <Board />.
export default function Board() {
  // <button> is a JSX element.
  // A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 
  // We must using an enclosing tag '<></>' to wrapper multiple adjacent JSX elements as following.
  return (
    <>
      <div className="board-row">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="board-row">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}
