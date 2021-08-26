import { TaskData } from './TaskData';

export interface TaskProps {
  isNewTask?: boolean;
  taskGroupTitle: string;
  taskContent: TaskData[];
}
