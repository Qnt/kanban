import { ReactNode, useReducer } from 'react';
import {
  ActionType,
  BoardContextType,
  BoardStateType,
  TColumn,
  Task,
} from '../@types/kanban';
import BoardContext from './board-context';

const defaultBoardState: BoardStateType = {
  columns: [],
};

function boardReducer(
  state: BoardStateType,
  action: ActionType,
): BoardStateType {
  switch (action.type) {
    case 'ADD_TASK': {
      const targetColumn = state.columns.find(
        (column) => column.id === action.payload.status,
      ) as TColumn;
      const updatedColumn: TColumn = {
        id: targetColumn.id,
        title: targetColumn.title,
        tasks: new Map(targetColumn.tasks.entries()).set(
          action.payload.id,
          action.payload,
        ),
      };
      const unchangedColumns = state.columns.filter(
        (column) => column.id !== targetColumn.id,
      );
      return {
        columns: [...unchangedColumns, updatedColumn].sort(
          (a, b) => a.id - b.id,
        ),
      };
    }
    case 'DELETE_TASK': {
      return {};
      // const filtredTasks = state.tasks.filter(
      //   (task) => task.id !== action.payload,
      // );
      // return { columns: state.columns, tasks: [...filtredTasks] };
    }
    case 'UPDATE_TASK': {
      const targetColumn = state.columns.find(
        (column) => column.id === action.payload.status,
      ) as TColumn;
      const updatedColumn = {
        id: targetColumn.id,
        title: targetColumn.title,
        tasks: new Map(targetColumn.tasks.entries()).set(
          action.payload.id,
          action.payload,
        ),
      };
      const unchangedColumns = state.columns.filter(
        (column) => column.id !== targetColumn.id,
      );
      return {
        columns: [...unchangedColumns, updatedColumn].sort(
          (a, b) => a.id - b.id,
        ),
      };
    }
    case 'ADD_COLUMN': {
      return {
        columns: [...state.columns, action.payload],
      };
    }
    case 'DELETE_COLUMN': {
      const filtredColumns = state.columns.filter(
        (column) => column.id !== action.payload,
      );
      return { columns: [...filtredColumns] };
    }
    case 'UPDATE_COLUMN': {
      const targetColumn = state.columns.find(
        (column) => column.id === action.payload.id,
      ) as TColumn;
      const updatedColumn = {
        ...targetColumn,
        title: action.payload.newTitle,
      } as TColumn;
      return {
        columns: [
          ...state.columns.map((column) => {
            return column.id === action.payload.id ? updatedColumn : column;
          }),
        ],
      };
    }
    default:
      return state;
  }
}

function BoardContextProvider({ children }: { children: ReactNode }) {
  const [boardState, dispatch] = useReducer(boardReducer, defaultBoardState);

  function addTask(task: Task) {
    dispatch({ type: 'ADD_TASK', payload: task });
  }
  function deleteTask(id: number) {
    dispatch({ type: 'DELETE_TASK', payload: id });
  }
  function updateTask(task: Task) {
    dispatch({ type: 'UPDATE_TASK', payload: task });
  }
  function addColumn(column: TColumn) {
    dispatch({ type: 'ADD_COLUMN', payload: column });
  }
  function deleteColumn(id: number) {
    dispatch({ type: 'DELETE_COLUMN', payload: id });
  }
  function updateColumnTitle(id: number, newTitle: string) {
    dispatch({ type: 'UPDATE_COLUMN', payload: { id, newTitle } });
  }

  function getIdForNewColumn() {
    const allColumnIds = boardState.columns.map((column) => column.id);
    if (allColumnIds.length === 0) {
      return 0;
    }
    return allColumnIds[allColumnIds.length - 1] + 1;
  }

  const boardContext: BoardContextType = {
    columns: boardState.columns,
    addTask,
    deleteTask,
    updateTask,
    addColumn,
    deleteColumn,
    updateColumnTitle,
    getIdForNewColumn,
  };

  return (
    <BoardContext.Provider value={boardContext}>
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContextProvider;
