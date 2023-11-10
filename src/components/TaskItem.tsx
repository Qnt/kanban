import { useContext, useEffect, useRef, useState } from 'react';
import { Task } from '../@types/kanban';
import BoardContext from '../context/board-context';
import classes from './TaskItem.module.css';

function TaskItem({ id, text, state }: Task) {
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef<HTMLLIElement>(null);
  const boardCtx = useContext(BoardContext);

  useEffect(() => {
    if (isEditing && textRef.current) {
      setTimeout(() => {
        textRef.current?.focus();
      }, 0);
    }
  }, [isEditing]);

  function handleDoubleClick() {
    setIsEditing(true);
  }

  function handleOnBlur() {
    setIsEditing(false);
    boardCtx?.updateTask({
      id,
      text: textRef.current!.textContent,
      status: 'TODO',
    } as Task);
  }

  return (
    <li
      tabIndex={-1}
      className={classes['task-item']}
      contentEditable={isEditing}
      onDoubleClick={handleDoubleClick}
      onBlur={handleOnBlur}
      ref={textRef}
    ></li>
  );
}

export default TaskItem;
