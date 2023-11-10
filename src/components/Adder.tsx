import { HTMLAttributes, useContext } from 'react';
import { Task } from '../@types/kanban';
import BoardContext from '../context/board-context';
import classes from './Adder.module.css';

interface AdderProps extends HTMLAttributes<HTMLElement> {
  type: 'column' | 'task';
}

function Adder(props: AdderProps) {
  const boardCtx = useContext(BoardContext);

  function handleClick() {
    const newTask: Task = {
      id: Math.random(),
      text: '',
      status: 'TODO',
    };
    boardCtx?.addTask(newTask);
  }

  let content: JSX.Element;
  switch (props.type) {
    case 'column': {
      content = (
        <li className={classes.adder}>
          <p>Add</p>
        </li>
      );
      break;
    }
    case 'task': {
      content = (
        <div className={classes.adder} onClick={handleClick}>
          <p>Add</p>
        </div>
      );
      break;
    }
  }

  return content;
}

export default Adder;
