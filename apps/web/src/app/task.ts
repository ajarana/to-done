export interface Task {
  name: string,
  thumbnailUrl: string,
  labels: Array<any>,
  description: string,
  dueDate: string,
  notes: string,
  complete: boolean,
  createdAt: string,
  userId: string
  id: string
}