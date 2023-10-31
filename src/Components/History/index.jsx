import React from 'react';
import './history.scss';

function History({ history, onSelect }) {
  return (
    <div>
      <h2>History</h2>
      {history.map((item, index) => (
        <div key={index} onClick={() => onSelect(item)}>
          <p>Method: {item.method}</p>
          <p>URL: {item.url}</p>
        </div>
      ))}
    </div>
  );
}

export default History;