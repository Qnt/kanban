import { useContext } from 'react';
import { TColumn } from '../@types/kanban';
import BoardContext from '../context/board-context';
import classes from './AddColumnButton.module.css';

function AddColumnButton() {
  const boardCtx = useContext(BoardContext);

  function handleAddColumn() {
    const newColumn: TColumn = {
      id: boardCtx?.getIdForNewColumn() as number,
      title: 'New Column',
      tasks: new Map(),
    };

    boardCtx?.addColumn(newColumn);
  }

  return (
    <li className={classes.adder}>
      <button onClick={handleAddColumn}>Add</button>
    </li>
  );
}

export default AddColumnButton;
