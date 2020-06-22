import React from 'react';
import Game from './Game';
import './SnakeGame.css';

function GridCell(props) {
  const classes = `grid-cell 
    ${props.foodCell ? 'grid-cell--food' : ''} 
    ${props.snakeCell ? 'grid-cell--snake' : ''}
    `;
  return (
    <div className={classes} style={{ height: props.size + 'px', width: props.size + 'px' }} />
  );
}

const GridCells = (props) => {
  return (
    <Game.GameContext.Consumer>
      {({ snake, food, cellIndexes, cellSize }) =>
        cellIndexes.map((y) => {
          return cellIndexes.map((x) => {
            const foodCell = food[0] === x && food[1] === y;
            let snakeCell = snake.filter((c) => c[0] === x && c[1] === y);
            snakeCell = snakeCell.length && snakeCell[0];

            return (
              <GridCell
                foodCell={foodCell}
                snakeCell={snakeCell}
                size={cellSize}
                key={x + ' ' + y}
              />
            );
          });
        })
      }
    </Game.GameContext.Consumer>
  );
};

export default GridCells;
