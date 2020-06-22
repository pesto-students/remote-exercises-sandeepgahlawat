import React, { useState, useRef } from 'react';
import { shallowEquals, arrayDiff } from './utils';
import useInterval from './useInterval';
import GridCells from './GridCells';
import Overlay from './Overlay';
import Board from './Board';

function Game({ children, ...props }) {
  const [snake, setSnake] = useState([]);
  const [food, setFood] = useState([]);
  const [status, setStatus] = useState(0);
  const [direction, setDirection] = useState(39);

  const inputEl = useRef(null);
  const numCells = Math.floor(props.size / 15);
  const cellSize = props.size / numCells;
  const cellIndexes = Array.from(Array(numCells).keys());

  const moveFood = () => {
    const x = parseInt(Math.random() * numCells);
    const y = parseInt(Math.random() * numCells);
    setFood([x, y]);
  };

  const setNewDirection = ({ keyCode }) => {
    let changeDirection = true;
    [
      [38, 40],
      [37, 39],
    ].forEach((dir) => {
      if (dir.indexOf(direction) > -1 && dir.indexOf(keyCode) > -1) {
        changeDirection = false;
      }
    });

    if (changeDirection) setDirection(keyCode);
  };

  const moveSnake = () => {
    const newSnake = [];

    switch (direction) {
      // down
      case 40:
        newSnake[0] = [snake[0][0], snake[0][1] + 1];
        break;
      // up
      case 38:
        newSnake[0] = [snake[0][0], snake[0][1] - 1];
        break;
      // right
      case 39:
        newSnake[0] = [snake[0][0] + 1, snake[0][1]];
        break;
      // left
      case 37:
        newSnake[0] = [snake[0][0] - 1, snake[0][1]];
        break;
      default:
        break;
    }

    [].push.apply(
      newSnake,
      snake.slice(1).map((s, i) => {
        return snake[i];
      })
    );

    setSnake(newSnake);

    checkIfAteFood(newSnake);
    if (!isValid(newSnake[0]) || !doesntOverlap(newSnake)) {
      endGame();
    }
  };

  const checkIfAteFood = (newSnake) => {
    if (!shallowEquals(newSnake[0], food)) return;
    let newSnakeSegment;
    const lastSegment = newSnake[newSnake.length - 1];
    let lastPositionOptions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    if (newSnake.length > 1) {
      lastPositionOptions[0] = arrayDiff(lastSegment, newSnake[newSnake.length - 2]);
    }

    for (var i = 0; i < lastPositionOptions.length; i++) {
      newSnakeSegment = [
        lastSegment[0] + lastPositionOptions[i][0],
        lastSegment[1] + lastPositionOptions[i][1],
      ];
      if (isValid(newSnakeSegment)) {
        break;
      }
    }

    setSnake(newSnake.concat([newSnakeSegment]));
    setFood([]);
    moveFood();
  };

  const isValid = (cell) => {
    return cell[0] > -1 && cell[1] > -1 && cell[0] < numCells && cell[1] < numCells;
  };

  const doesntOverlap = (snake) => {
    return (
      snake.slice(1).filter((c) => {
        return shallowEquals(snake[0], c);
      }).length === 0
    );
  };

  const [setStartSnake] = useInterval(moveSnake, 130, status, 'snake');
  const [setStartFood] = useInterval(moveFood, 5000, status, 'food');

  const startGame = () => {
    setStartSnake(true);
    setStartFood(true);
    setStatus(1);
    setSnake([[5, 5]]);
    setFood([10, 10]);
    inputEl.current.focus();
  };

  const endGame = () => {
    setStatus(2);
    setStartSnake(false);
    setStartFood(false);
  };

  return (
    <Game.GameContext.Provider
      value={{
        startGame,
        endGame,
        snake,
        food,
        status,
        inputEl,
        setDirection,
        setNewDirection,
        cellIndexes,
        cellSize,
        size:props.size
      }}>
      {children}
    </Game.GameContext.Provider>
  );
}

Game.GameContext = React.createContext();
Game.GridCells = GridCells;
Game.Overlay = Overlay;
Game.Board = Board;

export default Game;
