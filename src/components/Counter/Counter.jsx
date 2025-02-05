import React, { useContext } from "react";
import "./Counter.css"; 
import AppContext from "../../ContextAPI/AppContext";
import "../../App.css"
const Counter = () => {
  const {counter, setCounter} = useContext(AppContext)
  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    setCounter((counter) => Math.max(0, counter - 1)); 
  };

  const reset = () => {
    setCounter(0);
  };
  const colorHeight = `${counter}%`;

  return (
    <div className="counter-container">
      <div className="color-bar" style={{ height: colorHeight }}></div>
      <div className="counter-content">
        <h1 className="counter-title">Count: {counter}</h1>
        <div className="button-container">
        <button className="button" onClick={increment}>
            Increment
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>   
          <button className="button" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;