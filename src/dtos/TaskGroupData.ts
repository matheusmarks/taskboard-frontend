import { TaskData } from './TaskData';

export interface TaskGroupData {
  task_group_id?: string;
  name: string;
  tasks: TaskData[];
}
