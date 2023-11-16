import { TColumn } from '../@types/kanban';
import AddTaskButton from './AddTaskButton';
import classes from './Column.module.css';
import ColumnContent from './ColumnContent';
import ColumnHeader from './ColumnHeader';

function Column({ id, title, tasks }: TColumn) {
  return (
    <li className={classes.column}>
      <ColumnHeader id={id} title={title} />
      <ColumnContent columnTasks={tasks} />
      <AddTaskButton columnId={id} />
    </li>
  );
}

export default Column;
