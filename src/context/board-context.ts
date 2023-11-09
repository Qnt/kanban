import { createContext } from 'react';
import { BoardContextType } from '../@types/kanban';

const BoardContext = createContext<BoardContextType | null>(null);

export default BoardContext;
