import React from 'react';
import CircleCard from './components/CircleCard/CircleCard.js';
import './App.css';

const cards = [
  {
    title: 'Popular',
    description: 'some text',
    color: 'blue'
  },
  {
    title: 'Feature',
    description: 'some text',
    color: 'red'
  },
  {
    title: 'Service',
    description: 'some text',
    color: 'blue'
  },
  {
    title: 'Portfolio',
    description: 'some text',
    color: 'blue'
  },
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2 style ={{ color:'red', paddingRight: "15px", fontSize: "80px"}}>Smart </h2>
        <h2 style ={{ color:'blue', fontSize: "80px"}}>Landing</h2>
      </div>
      <div style = {{display:"flex", justifyContent: "center", fontSize: "20px", alignItems: "center"}}>
        <p style ={{ color:'black', margin:15, fontWeight: "700"}}>A great way to make awesome design!</p>
        <button style ={{padding: 10,backgroundColor: 'blue',border: 'none',borderRadius: 5, color: 'white'}}>Sign up now!</button>
      </div>

      <div className='circle-row'>
        {cards.map(
            (card) => <CircleCard title={card.title} description={card.description} color={card.color} />
          )}
      </div>
    </div>
  );
}

export default App;
