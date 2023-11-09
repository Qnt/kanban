export type Task = {
  id: number;
  text: string;
  status: string;
};

export type BoardContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateTask: (task: Task) => void;
};

export type ActionType =
  | { type: 'ADD'; payload: Task }
  | { type: 'DELETE'; payload: number }
  | { type: 'UPDATE'; payload: Task };

export type BoardStateType = {
  tasks: Task[];
};
