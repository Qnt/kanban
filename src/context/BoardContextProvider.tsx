import { ReactNode, useReducer } from 'react';
import { ActionType, BoardStateType, Task } from '../@types/kanban';
import BoardContext from './board-context';

const defaultBoardState: BoardStateType = {
  tasks: [],
};

function boardReducer(
  state: BoardStateType,
  action: ActionType,
): BoardStateType {
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, action.payload] };
    case 'DELETE': {
      const filtredTasks = state.tasks.filter(
        (task) => task.id !== action.payload,
      );
      return { tasks: [...filtredTasks] };
    }
    case 'UPDATE': {
      const unchangedTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id,
      );
      return { tasks: [...unchangedTasks, action.payload] };
    }
    default:
      return state;
  }
}

function BoardContextProvider({ children }: { children: ReactNode }) {
  const [boardState, dispatch] = useReducer(boardReducer, defaultBoardState);

  function addTask(task: Task) {
    dispatch({ type: 'ADD', payload: task });
  }
  function deleteTask(id: number) {
    dispatch({ type: 'DELETE', payload: id });
  }
  function updateTask(task: Task) {
    dispatch({ type: 'UPDATE', payload: task });
  }

  const boardContext = {
    tasks: boardState.tasks,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <BoardContext.Provider value={boardContext}>
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContextProvider;
