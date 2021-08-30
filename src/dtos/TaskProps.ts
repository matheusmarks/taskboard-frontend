import { TaskData } from './TaskData';

export interface TaskProps {
  isNewTask?: boolean;
  taskGroupTitle: string;
  taskContent: TaskData[];
  itemDnd?: string;
  index?: string;
  moveItem?: string;
  status?: boolean;
}
