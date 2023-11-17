import { HTMLAttributes } from 'react';
import AddColumnButton from './AddColumnButton';
import classes from './Board.module.css';

interface BoardProps extends HTMLAttributes<HTMLElement> {}

function Board(props: BoardProps) {
  return (
    <div className={`${classes.board} ${props.className}`}>
      <ul className={classes['board__columns']}>{props.children}</ul>
      <AddColumnButton />
    </div>
  );
}

export default Board;
