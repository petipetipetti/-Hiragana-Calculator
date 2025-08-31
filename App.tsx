
import React from 'react';
import Calculator from './components/Calculator';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <div className="w-full max-w-md mx-auto text-center">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            ひらがな計算機
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Hiragana Calculator
          </p>
        </header>
        <Calculator />
      </div>
    </main>
  );
};

export default App;
