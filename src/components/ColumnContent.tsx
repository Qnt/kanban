import { useContext } from 'react';
import BoardContext from '../context/board-context';
import classes from './ColumnContent.module.css';
import TaskItem from './TaskItem';

function ColumnContent() {
  const BoardCtx = useContext(BoardContext);

  return (
    <ul className={classes['column-content']}>
      {BoardCtx?.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          status={task.status}
        />
      ))}
    </ul>
  );
}

export default ColumnContent;
