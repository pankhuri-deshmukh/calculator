import React, { ReactNode } from "react";

interface ButtonBoxProps {
  children: ReactNode;
}

const ButtonBox: React.FC<ButtonBoxProps> = ({ children }) => {
  return (
    <div className="buttonBox">{children}</div>
  );
}

export default ButtonBox;
