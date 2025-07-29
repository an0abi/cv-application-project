import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <div
      className={`text-center border border-gray-300 rounded p-2 cursor-pointer bg-indigo-200 hover:bg-indigo-200 hover:border-indigo-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
