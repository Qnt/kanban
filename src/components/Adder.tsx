import { HTMLAttributes } from 'react';
import classes from './Adder.module.css';

interface AdderProps extends HTMLAttributes<HTMLElement> {
  type: 'column' | 'todo';
}

function Adder(props: AdderProps) {
  let content: JSX.Element;
  switch (props.type) {
    case 'column': {
      content = (
        <li className={classes.adder}>
          <p>Add</p>
        </li>
      );
      break;
    }
    case 'todo': {
      content = (
        <div className={classes.adder}>
          <p>Add</p>
        </div>
      );
      break;
    }
  }

  return content;
}

export default Adder;
