import { HTMLAttributes } from 'react';
import classes from './Board.module.css';

interface BoardProps extends HTMLAttributes<HTMLElement> {}

function Board(props: BoardProps) {
  return (
    <ul {...props} className={`${classes.board} ${props.className}`}>
      {props.children}
    </ul>
  );
}

export default Board;
