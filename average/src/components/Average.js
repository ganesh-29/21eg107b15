import React, { useState } from 'react';

const Average = () => {
  const [input, setInput] = useState('');
  const [average, setAverage] = useState(0);

  const calculateAverage = () => {
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((a, b) => a + b, 0);
    setAverage(sum / numbers.length);
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter numbers separated by commas" />
      <button onClick={calculateAverage}>Calculate Average</button>
      <p>Average: {average}</p>
    </div>
  );
};

export default Average;
