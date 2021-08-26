import { TaskGroupData } from './TaskGroupData';

export interface TaskGroupProps {
  taskGroupTitle: string;
  isNewTask?: boolean;
  taskGroupContent: TaskGroupData[];
}
