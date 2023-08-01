import React, { createContext, useState, ReactNode} from "react";

interface CalcState {
  sign: string;
  num: number;
  res: number;
}

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
