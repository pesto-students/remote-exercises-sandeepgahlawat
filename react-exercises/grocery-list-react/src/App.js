import React, { useState } from 'react';
import List from './list';
import Input from './input';
import './App.css';

function App() {
  const [appState, setAppState] = useState({
    items: [],
  });

  const disableClearListBtn = appState.items.length > 0 ? false : true;

  const getInputValue = (value) => {
    const existingItemIndex = appState.items.findIndex((item) => item.name === value.name);
    if (existingItemIndex !== -1) {
      const existingItem = appState.items[existingItemIndex];
      existingItem.count = existingItem.count + 1;
      const newItemsList = [...appState.items];
      newItemsList.splice(existingItemIndex, 1, existingItem);
      setAppState({
        ...appState,
        items: newItemsList,
      });
    } else {
      setAppState({
        ...appState,
        items: [value, ...appState.items],
      });
    }
  };

  const handleClearList = () => {
    setAppState({
      ...appState,
      items: [],
    });
  };

  return (
    <div className='App'>
      <Input getInputValue={getInputValue} />

      <button disabled={disableClearListBtn} onClick={handleClearList}>Clear Grocery List</button>
      <List items={appState.items} />
    </div>
  );
}

export default App;
