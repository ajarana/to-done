import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskModule)
  },
  {
    path: 'task/:id',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'task/:id/edit',
    loadChildren: () => import('./edit-task/edit-task.module').then(m => m.EditTaskModule)
  },
  // { path: '**',   redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }