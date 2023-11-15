import { useContext } from 'react';
import { Task } from '../@types/kanban';
import BoardContext from '../context/board-context';
import classes from './ColumnContent.module.css';
import TaskItem from './TaskItem';

function ColumnContent({ columnTasks }: { columnTasks: Map<number, Task> }) {
  return (
    <ul className={classes['column-content']}>
      {Array.from(columnTasks.values()).map((task) => (
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
