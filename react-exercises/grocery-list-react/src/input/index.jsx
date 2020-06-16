import React, { useState } from 'react';
import './Input.css';

function Input({ getInputValue, ...props }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    getInputValue({
      id: Math.random(),
      name: inputValue,
      count:1
    });
    setInputValue('');
  };

  return (
    <div className='container'>
      <label for='grocery-input'>Create Grocery List</label>
      <input
        type='text'
        id='grocery-input'
        name='grocery-input'
        placeholder='Add Grocery Items...'
        value={inputValue}
        onChange={handleInputChange}
      />

      <button className='submit-btn' onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
}

export default Input;
