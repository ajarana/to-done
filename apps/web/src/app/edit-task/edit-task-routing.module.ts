import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';

const routes: Routes = [
  { path: '',  component: EditTaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTaskRoutingModule { }
