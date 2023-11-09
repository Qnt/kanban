import { HTMLAttributes } from 'react';
import classes from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLElement> {}

function Card(props: CardProps) {
  return (
    <div {...props} className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
