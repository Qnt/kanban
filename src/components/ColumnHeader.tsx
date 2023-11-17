import { KeyboardEvent, useContext, useRef, useState } from 'react';
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
    boardCtx?.updateColumnTitle(id, inputRef.current?.value ?? '');
  }

  function handleColumnDelete() {
    boardCtx?.deleteColumn(id);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setIsEditing(false);
      boardCtx?.updateColumnTitle(id, inputRef.current?.value ?? '');
    }
  }

  return (
    <Card className={classes.header}>
      {isEditing && (
        <input
          type="text"
          onBlur={handleOnBlur}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          defaultValue={hRef.current!.textContent as string}
          autoFocus
        ></input>
      )}
      {!isEditing && (
        <h2 onDoubleClick={handleDoubleClick} ref={hRef}>
          {title}
        </h2>
      )}
      <button className={classes['delete-btn']} onClick={handleColumnDelete}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            role="img"
            d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
            stroke="rgba(187, 187, 187)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 10 10"
            aria-hidden="true"
            focusable="false"
          />
        </svg>
        <span className={classes['visually-hidden']}>Delete</span>
      </button>
    </Card>
  );
}

export default ColumnHeader;
