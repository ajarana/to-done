import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaskRoutingModule } from './edit-task-routing.module';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';


@NgModule({
  declarations: [EditTaskFormComponent],
  imports: [
    CommonModule,
    EditTaskRoutingModule
  ]
})
export class EditTaskModule { }
