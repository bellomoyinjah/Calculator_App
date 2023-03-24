import "./styles.css";

import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
      setInput('');
    } catch (e) {
      setResult("Error");
    }
  };

  const reset = () => {
    setInput("");
    setResult(0);
  };

  const handleNegation = () => {
    if (input !== "") {
      if (input.charAt(0) === "-") {
        setInput(input.slice(1));
      } else {
        setInput("-" + input);
      }
    }
  };

  const handlePercentage = () => {
    if (input !== "") {
      const lastChar = input.slice(-1);
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {
        setInput(input + "(" + result + "/100)");
      } else {
        setInput(input + "/100");
      }
    }
  };

  const handleDecimal = () => {
    if (!input.includes(".")) {
      setInput(input + ".");
    }
  };

  return (
    <div className="calculator">
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <div className="row">
        <button value="ac" onClick={reset}>
          AC
        </button>
        <button onClick={handleNegation}>+/-</button>
        <button onClick={handlePercentage}>%</button>
        <button value="/" onClick={handleClick}>
          /
        </button>
      </div>
      <div className="row">
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="*" onClick={handleClick}>
          *
        </button>
      </div>
      <div className="row">
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="-" onClick={handleClick}>
          -
        </button>
      </div>
      <div className="row">
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="+" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="row">
        <button value="0" onClick={handleClick}>
          0
        </button>
        <button value="." onClick={handleDecimal}>
          .
        </button>
        <button value="=" onClick={calculate}>
          =
        </button>
      </div>
      <br />

      <br />
      <input value={result} readOnly />
    </div>
  );
}

export default Calculator;
