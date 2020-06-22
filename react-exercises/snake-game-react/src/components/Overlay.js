import React from 'react';
import Game from './Game';
import './SnakeGame.css';
const Overlay = (props) => {
  return (
    <Game.GameContext.Consumer>
      {({
        startGame,
        snake,
        status,
      }) => {
        if (status === 0) {
          return (
            <div className='snake-app__overlay'>
              <button onClick={startGame}>Start game!</button>
            </div>
          );
        } else if (status === 2) {
          return (
            <div className='snake-app__overlay'>
              <div className='mb-1'>
                <b>GAME OVER!</b>
              </div>
              <div className='mb-1'>Your score: {snake.length} </div>
              <button onClick={startGame}>Start a new game</button>
            </div>
          );
        }
        return null;
      }}
    </Game.GameContext.Consumer>
  );
};

export default Overlay;
