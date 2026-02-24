import React, { useState } from 'react';

export default function Compose() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (event) => {
    document.getElementById()
    console.log('Input value:', inputValue);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text here"
      />
      <button onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );
}
