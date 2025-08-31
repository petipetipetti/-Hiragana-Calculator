
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-16 md:h-20 text-2xl md:text-3xl font-medium rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
