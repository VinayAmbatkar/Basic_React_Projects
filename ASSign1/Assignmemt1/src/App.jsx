// App.jsx
import React, { useState } from 'react';
import './App.css';

const items = [
  { name: 'Item 1', email: 'item1@example.com', image: 'https://via.placeholder.com/20' },
  { name: 'Item 2', email: 'item2@example.com', image: 'https://via.placeholder.com/20' },
  { name: 'Item 3', email: 'item3@example.com', image: 'https://via.placeholder.com/20' },
  { name: 'Item 4', email: 'item4@example.com', image: 'https://via.placeholder.com/20' },
  { name: 'Item 5', email: 'item5@example.com', image: 'https://via.placeholder.com/20' }
];

function App() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    const filtered = items.filter(item => item.name.toLowerCase().includes(value) && !chips.some(chip => chip.name === item.name));
    setFilteredItems(filtered);
  };

  const handleItemSelection = (item) => {
    setChips([...chips, item]);
    setInputValue('');
    setFilteredItems([]);
  };

  const handleChipRemoval = (index) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };

  return (
    <div className="App">
      <div id="demo-heading">Chip Component Demo Assignment</div>
      <div id="chip-container">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            <img src={chip.image} alt={chip.name} />
            <span>{chip.name}</span>
            <span className="remove-chip" onClick={() => handleChipRemoval(index)}>X</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        id="input-field"
        placeholder="Type here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul id="item-list">
        {filteredItems.map((item, index) => (
          <li key={index} onClick={() => handleItemSelection(item)}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>{item.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
