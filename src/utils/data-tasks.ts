export type Task= {
  title: string, 
  id: string, 
  points?: number
}

export const tasks: Task[] = [
  {
    title: 'A task',
    id: 'BUS-1',
    points:  5,
  },
  {
    title: 'Another task',
    id: 'BUS-2',
    points:  7,
  },
]