import Adder from './Adder';
import classes from './Column.module.css';
import ColumnContent from './ColumnContent';
import ColumnHeader from './ColumnHeader';

function Column() {
  return (
    <li className={classes.column}>
      <ColumnHeader />
      <ColumnContent />
      <Adder type="task" />
    </li>
  );
}

export default Column;
