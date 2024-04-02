export type Status = 'Todo' | 'Inprogress' | 'Done'
export type Priority = 'low' | 'medium' | 'high'
export type Task= {
  title: string, 
  id: string, 
  status: Status,
  priority: Priority
  points?: number
}

export const statuses: Status[] =  ['Todo', 'Inprogress', 'Done']
export const priorities: Priority[] = ['low' , 'medium' , 'high']
export const tasks: Task[] = [
  {
    title: 'A task',
    id: 'BUS-1',
    status: 'Todo',
    priority: 'medium',
    points:  5,
  },
  {
    title: 'Another task',
    id: 'BUS-3',
    status: 'Inprogress',
    priority: 'high',
    points:  7,
  },
  {
    title: 'Another Another task',
    id: 'BUS-2',
    status: 'Done',
    priority: 'medium',
    points:  7,
  },
]