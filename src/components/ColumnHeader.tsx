import { useContext, useRef, useState } from 'react';
import BoardContext from '../context/board-context';
import classes from './ColumnHeader.module.css';
import Card from './ui/Card';

function ColumnHeader({ id, title }: { id: number; title: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hRef = useRef<HTMLHeadingElement>(null);
  const boardCtx = useContext(BoardContext);

  function handleDoubleClick() {
    setIsEditing(true);
  }

  function handleOnBlur() {
    setIsEditing(false);
  }

  function handleColumnDelete() {
    boardCtx?.deleteColumn(id);
  }

  return (
    <Card className={classes.header}>
      {isEditing ? (
        <input
          type="text"
          onBlur={handleOnBlur}
          ref={inputRef}
          defaultValue={hRef.current!.textContent as string}
        ></input>
      ) : (
        <h3 onDoubleClick={handleDoubleClick} ref={hRef}>
          {`${title} ${id}`}
        </h3>
      )}
      <button onClick={handleColumnDelete}>X</button>
    </Card>
  );
}

export default ColumnHeader;
