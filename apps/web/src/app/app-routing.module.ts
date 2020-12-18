import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule),
    resolve: {
      data: ResolverService
    }
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskModule),
    resolve: {
      data: ResolverService
    }
  },
  {
    path: 'task/:id',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule),
    resolve: {
      data: ResolverService
    }
  },
  {
    path: 'task/:id/edit',
    loadChildren: () => import('./edit-task/edit-task.module').then(m => m.EditTaskModule),
    resolve: {
      data: ResolverService
    }
  },
  { path: '**',   redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }