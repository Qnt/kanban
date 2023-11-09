import classes from './TaskItem.module.css';
import Card from './ui/Card';

function TaskItem() {
  return (
    <li>
      <Card className={classes['task-item']}></Card>
    </li>
  );
}

export default TaskItem;
