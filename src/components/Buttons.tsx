import React, { ReactNode } from "react";

interface ButtonsProps {
  children: ReactNode;
}

const Buttons: React.FC<ButtonsProps> = ({ children }) => {
  return (
    <div className="buttonBox">{children}</div>
  );
}

export default Buttons;
