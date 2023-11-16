import { HTMLAttributes, useContext } from 'react';
import { Task } from '../@types/kanban';
import BoardContext from '../context/board-context';
import classes from './AddTaskButton.module.css';

type AdderProps = HTMLAttributes<HTMLElement> & {
  columnId: number;
};

function AddTaskButton(props: AdderProps) {
  const boardCtx = useContext(BoardContext);

  function handleAddTask() {
    const newTask: Task = {
      id: Math.random(),
      text: '',
      status: props.columnId,
    };
    boardCtx?.addTask(newTask);
  }

  return (
    <button className={classes.adder} onClick={handleAddTask}>
      Add
    </button>
  );
}

export default AddTaskButton;
