import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen: React.FC = () => {
  const { calc } = useContext(CalcContext);

  return (
    <h1 className="screen" >
      {calc.expression ? `${calc.expression} =` : calc.expression}
      <br />
      {calc.num ? calc.num : calc.res}
    </h1>
  );
}

export default Screen;
