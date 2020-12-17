import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: 'add-task',  component: TaskFormComponent },
  { path: '**',   redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTaskRoutingModule { }
