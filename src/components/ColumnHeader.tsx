import classes from './ColumnHeader.module.css';
import Card from './ui/Card';

function ColumnHeader() {
  return (
    <Card className={classes.header}>
      <p>Header Title</p>
    </Card>
  );
}

export default ColumnHeader;
