import React from 'react';
import './components/SnakeGame.css';
import Game from './components/Game';

function App() {
  return (
    <div className='App'>
      <Game size={350}>
        <Game.Board/>
      </Game>
    </div>
  );
}

export default App;
