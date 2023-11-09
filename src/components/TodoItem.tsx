import classes from './TodoItem.module.css';
import Card from './ui/Card';

function TodoItem() {
  return (
    <li>
      <Card className={classes['todo-item']}>todo</Card>
    </li>
  );
}

export default TodoItem;
