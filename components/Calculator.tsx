
import React, { useState } from 'react';
import { HIRAGANA_DIGITS, OPERATORS, BUTTON_LAYOUT, HIRAGANA_TO_NUMBER_MAP, NUMBER_TO_HIRAGANA_MAP } from '../constants';
import Display from './Display';
import Button from './Button';

const convertToNumericString = (hiragana: string): string => {
  return hiragana.split('').map(char => HIRAGANA_TO_NUMBER_MAP[char] || char).join('');
};

const convertToHiraganaString = (numeric: string): string => {
  return numeric.toString().split('').map(char => NUMBER_TO_HIRAGANA_MAP[char] || char).join('');
};

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isResult, setIsResult] = useState<boolean>(false);

  const handleButtonClick = (value: string) => {
    setError(false);

    if (value === 'C') {
      setInput('');
      setIsResult(false);
      return;
    }

    if (value === '=') {
      if (input === '' || isResult) return;

      try {
        const numericExpression = convertToNumericString(input);
        // Sanitize to prevent malicious code injection
        if (/[^0-9+\-*/.()]/.test(numericExpression)) {
          throw new Error('Invalid characters in expression');
        }
        
        // eslint-disable-next-line no-new-func
        const result = new Function('return ' + numericExpression)();

        if (!isFinite(result)) {
          throw new Error('Division by zero');
        }

        setInput(convertToHiraganaString(result.toString()));
        setIsResult(true);
      } catch (e) {
        setError(true);
        setInput('エラー');
        setIsResult(true);
      }
      return;
    }

    if (HIRAGANA_DIGITS.includes(value)) {
      if (isResult) {
        setInput(value);
        setIsResult(false);
      } else {
        setInput(prev => prev + value);
      }
    } else if (OPERATORS.includes(value)) {
      if (input === '' && value !== '-') return;
      if (isResult) setIsResult(false);

      const lastChar = input.slice(-1);
      if (OPERATORS.includes(lastChar)) {
        setInput(prev => prev.slice(0, -1) + value);
      } else {
        setInput(prev => prev + value);
      }
    }
  };

  const getButtonClass = (btn: string) => {
    const baseClass = "transition duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900";
    if (OPERATORS.includes(btn)) {
      return `${baseClass} bg-amber-500 hover:bg-amber-600 focus:ring-amber-500 text-white`;
    }
    if (btn === 'C' || btn === '=') {
      return `${baseClass} bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-600 focus:ring-gray-500 text-white`;
    }
    return `${baseClass} bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-indigo-500 text-gray-800 dark:text-white`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full">
      <Display value={input} error={error} />
      <div className="grid grid-cols-4 gap-4 mt-6">
        {BUTTON_LAYOUT.flat().map((btn) => (
          <Button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={getButtonClass(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
