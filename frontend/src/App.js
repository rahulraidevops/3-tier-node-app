import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetch('http://13.203.44.53:5000/api/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const addItem = async () => {
    const res = await fetch('http://13.203.44.53:5000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newItem })
    });
    const data = await res.json();
    setItems([...items, data]);
    setNewItem('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>3-Tier App (React + Node + MongoDB)</h1>
      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, idx) => <li key={idx}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

