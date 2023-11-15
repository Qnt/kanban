export type TColumn = {
  id: number;
  title: string;
  tasks: Map<number, Task>;
};

export type Task = {
  id: number;
  text: string;
  status: number;
};

export type BoardContextType = {
  columns: Column[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateTask: (task: Task) => void;
  addColumn: (column: Column) => void;
  deleteColumn: (id: number) => void;
  getIdForNewColumn: () => number;
};

export type ActionType =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'UPDATE_TASK'; payload: Task }
  | { type: 'ADD_COLUMN'; payload: Column }
  | { type: 'DELETE_COLUMN'; payload: number };

export type BoardStateType = {
  columns: Column[];
};
