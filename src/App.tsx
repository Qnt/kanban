import { useContext } from 'react';
import classes from './App.module.css';
import AddColumnButton from './components/AddColumnButton';
import Board from './components/Board';
import Column from './components/Column';
import BoardContext from './context/board-context';

function App() {
  const boardCtx = useContext(BoardContext);

  return (
    <Board>
      {boardCtx?.columns.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          id={column.id}
          tasks={column.tasks}
        />
      ))}
    </Board>
  );
}

export default App;
