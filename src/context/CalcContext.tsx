import React, { createContext, useState, ReactNode} from "react";

interface CalcState {
  sign: string;
  num: number;
  res: number;
  expression : string;
}

//React.SetStateAction is a generic type provided by React that represents a function that can update the state of a component whose new state is of type given

//the dispatch function can accept an action that updates the state of the calculator context
interface CalcContextProps {
  calc: CalcState;
  setCalc: React.Dispatch<React.SetStateAction<CalcState>>;
}

export const CalcContext = createContext<CalcContextProps>({} as CalcContextProps);

interface Props {
    children: ReactNode;
  }

const CalcProvider: React.FC<Props> = ({ children }) => {
  const [calc, setCalc] = useState<CalcState>({
    sign: "",
    num: 0,
    res: 0,
    expression: "",
  });

  const providerValue: CalcContextProps = {
    calc,
    setCalc,
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
