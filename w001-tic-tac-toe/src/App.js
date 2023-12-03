// In React, a component is a piece of reusable code that represents a part of a user interface.
// The default is a JavaScript keyword tells other files using your code that it's the main function in your file.
export default function Board() {
  // <button> is a JSX element.
  // A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 
  // We must using an enclosing tag '<></>' to wrapper multiple adjacent JSX elements as following.
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
