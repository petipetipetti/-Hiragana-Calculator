
import React from 'react';

interface DisplayProps {
  value: string;
  error: boolean;
}

const Display: React.FC<DisplayProps> = ({ value, error }) => {
  const displayValue = value || 'わ';
  const textSizeClass = displayValue.length > 10 ? 'text-4xl' : 'text-6xl';

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 w-full h-28 flex items-end justify-end overflow-hidden">
      <p 
        className={`font-mono text-right break-all transition-colors duration-200 ${textSizeClass} ${error ? 'text-red-500' : 'text-gray-800 dark:text-white'}`}
        style={{ fontFamily: "'Roboto Mono', monospace" }}
      >
        {displayValue}
      </p>
    </div>
  );
};

export default Display;
