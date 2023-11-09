import classes from './App.module.css';
import Adder from './components/Adder';
import Board from './components/Board';
import Column from './components/Column';

function App() {
  return (
    <Board>
      <Column />
      <Adder type="column" />
    </Board>
  );
}

export default App;
