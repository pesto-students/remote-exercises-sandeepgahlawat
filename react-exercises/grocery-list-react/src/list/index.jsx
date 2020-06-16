import React, { useState } from 'react';
import './List.css';

function List({ items, ...props }) {
  const [selectedItems, setSelectedItems] = useState([]);

  console.log('selected ',selectedItems)
  const handleLiClick = (item) => () => {
    
    const existingIndex = selectedItems.findIndex(el => el === item.id);
    
    if (existingIndex !== -1) {
      console.log('replacing',existingIndex,item)
      const newList = selectedItems.filter(id=> id !== item.id);
      setSelectedItems(newList);
    }else{
      console.log('inderting')
    setSelectedItems([...selectedItems, item.id]);
    }
  };
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div
            className={selectedItems.includes(item.id) ? 'list-item-selected' : 'list-item'}
            onClick={handleLiClick(item)}>
            <h4>{`${item.name}, quantity: (${item.count})`}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
