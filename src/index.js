import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [width, setWidth] = useState(0);

  const styles = {
    backgroundColor: "#00cb78",
    width: width + "%"
  };

  useEffect(() => {
    if (width < 100) {
      const interval = setInterval(() => {
        setWidth(width + 0.1);
      }, 3);
      return () => clearInterval(interval);
    }
  }, [width]);

  return (
    <div className="App">
      <div style={styles}>
        <span>{width.toFixed(0)}%</span>
      </div>

      <button onClick={() => setWidth(0)}>Reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
