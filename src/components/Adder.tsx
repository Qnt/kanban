import { HTMLAttributes, useContext } from 'react';
import { TColumn, Task } from '../@types/kanban';
import BoardContext from '../context/board-context';
import classes from './Adder.module.css';

interface AdderProps extends HTMLAttributes<HTMLElement> {
  type: 'column' | 'task';
  columnId: number;
}

function Adder(props: AdderProps) {
  const boardCtx = useContext(BoardContext);

  function handleAddTask() {
    const newTask: Task = {
      id: Math.random(),
      text: '',
      status: props.columnId,
    };
    boardCtx?.addTask(newTask);
  }

  function handleAddColumn() {
    const newColumn: TColumn = {
      id: boardCtx?.getIdForNewColumn() as number,
      title: 'New Column',
      tasks: new Map(),
    };

    boardCtx?.addColumn(newColumn);
  }

  let content: JSX.Element;
  switch (props.type) {
    case 'column': {
      content = (
        <li className={classes.adder}>
          <button onClick={handleAddColumn}>Add</button>
        </li>
      );
      break;
    }
    case 'task': {
      content = (
        <button className={classes.adder} onClick={handleAddTask}>
          Add
        </button>
      );
      break;
    }
  }

  return content;
}

export default Adder;
