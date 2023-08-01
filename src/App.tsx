import React from "react";
import Wrapper from "./components/Wrapper";
import ResWindow from "./components/ResWindow";
import Buttons from './components/Buttons'
import Button from './components/Button'
import CalcProvider from "./context/CalcContext";

const btnValues: (number | string)[][] = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <ResWindow />
        <Buttons>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </Buttons>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
