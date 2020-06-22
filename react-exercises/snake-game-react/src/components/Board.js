import React from 'react';
import Game from './Game';
import './SnakeGame.css';

const Board = (props) => {
  return (
    <Game.GameContext.Consumer>
      {({
        startGame,
        snake,
        status,
        inputEl, setNewDirection,size
      }) => (
        <div
          className='snake-app'
          onKeyDown={setNewDirection}
          style={{
            width: size + 'px',
            height: size + 'px',
          }}
          ref={inputEl}
          tabIndex={-1}>
          <Game.Overlay status={status} snake={snake} startGame={startGame} />
          <div
            className='grid'
            style={{
              width: size + 'px',
              height: size + 'px',
            }}>
            <Game.GridCells />
          </div>
        </div>
      )}
    </Game.GameContext.Consumer>
  );
};

export default Board;
