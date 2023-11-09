import classes from './App.module.css';
import Adder from './components/Adder';
import Board from './components/Board';
import Column from './components/Column';
import BoardContextProvider from './context/BoardContextProvider';

function App() {
  return (
    <BoardContextProvider>
      <Board>
        <Column />
        <Adder type="column" />
      </Board>
    </BoardContextProvider>
  );
}

export default App;
