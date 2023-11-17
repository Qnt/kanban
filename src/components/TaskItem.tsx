import { useContext, useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Task } from '../@types/kanban';
import BoardContext from '../context/board-context';
import classes from './TaskItem.module.css';

function TaskItem({ id, text, status }: Task) {
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const boardCtx = useContext(BoardContext);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    }
  }, [isEditing]);

  function handleDoubleClick() {
    setIsEditing(true);
  }

  function handleOnBlur() {
    setIsEditing(false);
    boardCtx?.updateTask({
      text: textareaRef.current!.value,
      id,
      status,
    } as Task);
  }

  return (
    <li>
      {isEditing && (
        <TextareaAutosize
          className={classes['textarea']}
          ref={textareaRef}
          onBlur={handleOnBlur}
          defaultValue={divRef.current!.textContent as string}
        ></TextareaAutosize>
      )}
      {!isEditing && (
        <p
          className={classes['task-item']}
          contentEditable={isEditing}
          onDoubleClick={handleDoubleClick}
          ref={divRef}
          draggable
        >
          {text}
        </p>
      )}
    </li>
  );
}

export default TaskItem;
