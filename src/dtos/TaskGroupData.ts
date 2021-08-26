import { TaskData } from './TaskData';

export interface TaskGroupData {
  id?: string;
  name: string;
  tasks: TaskData[];
}
